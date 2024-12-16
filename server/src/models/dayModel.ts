import { model, Schema } from 'mongoose'

const daySchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
    unique: true,
  },
  total: {
    type: Number,
    default: 0,
  },
  accommodation: {
    type: Number,
    default: 0,
  },
  activities: {
    type: Number,
    default: 0,
  },
  shopping: {
    type: Number,
    default: 0,
  },
  ather: {
    type: Number,
    default: 0,
  },
  food: {
    type: Number,
    default: 0,
  },
})

export type Day = ReturnType<() => typeof daySchema>

export const DayModel = model<Day>('Day', daySchema)
