import { model, Schema } from 'mongoose'

const settingsSchema = new Schema({
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

export type Setting = ReturnType<() => typeof settingsSchema>

export const SettingsModel = model<Setting>('Setting', settingsSchema)
