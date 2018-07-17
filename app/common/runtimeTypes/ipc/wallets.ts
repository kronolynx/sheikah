import {Empty} from "app/common/runtimeTypes/index"
import {Wallets} from "app/common/runtimeTypes/storage/wallets"
import * as t from "io-ts"

export const GetWalletsParams = Empty
export type GetWalletsParams = t.TypeOf<typeof GetWalletsParams>

export const GetWalletsResponse = Wallets
export type GetWalletsResponse = t.TypeOf<typeof GetWalletsResponse>

export const EncryptWalletParams = t.intersection([
  t.type({
    id: t.string,
    password: t.string
  }),
  t.partial({
    caption: t.string
  })
])

export type EncryptWalletParams = t.TypeOf<typeof EncryptWalletParams>