"use client";

import React, { useActionState, useEffect, useRef } from "react";
import axios from "axios";
import { toast } from "sonner";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/shared/Modal";

type ExpenseState = {
  success?: boolean;
  error?: string;
};

async function addExpenseAction(
  prevState: ExpenseState | null,
  formData: FormData
): Promise<ExpenseState> {
  const description = formData.get("description") as string;
  const amount = Number(formData.get("amount"));
  const category = formData.get("category") as string;
  const dateValue = formData.get("date") as string;

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const token = localStorage.getItem("token");

  if (!description || !amount || !category || !dateValue) {
    return { error: "All fields are required" };
  }

  try {
    await axios.post(
      `${baseUrl}/api/expenses`,
      {
        description,
        amount,
        category,
        date: new Date(dateValue).toISOString(),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return { success: true };
  } catch (err: any) {
    return {
      error: err.response?.data?.message || "Failed to add expense",
    };
  }
}

const AddExpenseDialog = ({ trigger }: { trigger: React.ReactNode }) => {
  const [state, formAction, pending] = useActionState<
    ExpenseState,
    FormData
  >(addExpenseAction, {});

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success) {
      toast.success("Expense added successfully!");
      formRef.current?.reset();
    }

    if (state?.error) {
      toast.error(state.error);
    }
  }, [state]);

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Expense</DialogTitle>
        </DialogHeader>

        <form
          ref={formRef}
          action={formAction}
          className="flex flex-col gap-4 mt-4"
        >
          <input
            name="description"
            placeholder="Description"
            required
            className="px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white"
          />

          <input
            name="amount"
            type="number"
            step="0.01"
            placeholder="Amount"
            required
            className="px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white"
          />

          <select
            name="category"
            required
            className="px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white"
          >
            <option value="">Select Category</option>
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
            <option value="Shopping">Shopping</option>
            <option value="Bills">Bills</option>
            <option value="Other">Other</option>
          </select>

          <input
            name="date"
            type="date"
            required
            className="px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white"
          />

          <button
            type="submit"
            disabled={pending}
            className="py-2 rounded-lg bg-linear-to-r from-emerald-400 to-cyan-400 text-black font-semibold hover:opacity-90 transition"
          >
            {pending ? "Adding..." : "Add Expense"}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddExpenseDialog;
