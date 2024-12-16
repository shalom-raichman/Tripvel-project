import { NextFunction, Request, Response } from 'express'

export const getExpenses = async (req: Request, res: Response, next: NextFunction) => {
  try {
  } catch (err) {
    console.error(`Can't get Expenses ${err}`)
  }
}

export const getAggregatedDashboard = async (req: Request, res: Response, next: NextFunction) => {
  try {
  } catch (err) {
    console.error(`Can't get dashboard ${err}`)
  }
}

export const addExpense = async (req: Request, res: Response, next: NextFunction) => {
  try {
  } catch (err) {
    console.error(`Can't add expense ${err}`)
  }
}

export const updateExpense = async (req: Request, res: Response, next: NextFunction) => {
  try {
  } catch (err) {
    console.error(`Can't update expense ${err}`)
  }
}
