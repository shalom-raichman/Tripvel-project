import { model, Schema } from 'mongoose'

const constSchema = new Schema(
  {
    description: String,
    amount: Number,
  },
  { timestamps: true }
)

export const ConstModel = model('Const', constSchema)
