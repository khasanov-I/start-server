import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { User } from "src/users/users.model";

export type NotificationCreationAttrs = {
    title: string;
    description: string;
    href: string;
    userId: number
}

@Table({tableName: 'notifications'})
export class Notification extends Model<Notification, NotificationCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING})
    title: string;

    @Column({type: DataType.STRING})
    description: string;

    @Column({type: DataType.STRING})
    href: string;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;

    @BelongsTo(() => User)
    user: User
}