import { Ref, prop, getModelForClass } from '@typegoose/typegoose'
import { User } from './user'

export class Payments {
  @prop({ ref: User })
  public userId?: Ref<User>

  @prop({ required: true })
  public type!: string

  @prop({ required: true })
  public status!: string

  @prop({ required: true })
  public token!: string
}

export const PaymentsModel = getModelForClass(Payments)
