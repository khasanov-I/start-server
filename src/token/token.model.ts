import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript"
import { User } from "src/users/users.model";

type TokenCreationAttrs = {
    userId: number,
    refreshToken: string
}

@Table({tableName: 'tokens'})
export class Token extends Model<Token, TokenCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.TEXT, allowNull: false})
    refreshToken: string;    

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;

    @BelongsTo(() => User)
    user: User
}