import { ConstModel } from '../models/constModel'
import { Const } from '../types/models'

export const getConsts = async () => {
  try {
    return await ConstModel.find({}).lean()
  } catch (err) {
    console.error(err)
    throw err
  }
}

export const addConstsExpense = async (data: Const) => {
  try {
    const constExpense = new ConstModel(data)
    return await constExpense.save()
  } catch (err) {
    console.error(err)
    throw err
  }
}
