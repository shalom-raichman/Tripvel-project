import { constSchema } from '../models/constModel'
import { daySchema } from '../models/dayModel'
import { settingsSchema } from '../models/settingsModel'

export type Setting = ReturnType<() => typeof settingsSchema>

export type Day = ReturnType<() => typeof daySchema>

export type Const = ReturnType<() => typeof constSchema>

