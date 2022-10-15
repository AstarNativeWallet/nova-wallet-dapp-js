// Copyright 2019-2022 @polkadot/extension authors & contributors
// SPDX-License-Identifier: Apache-2.0

// Runs in the extension background, handling all keyring access

import { AccountsStore } from '@polkadot/extension-base/stores'
import keyring from '@polkadot/ui-keyring'
import { cryptoWaitReady } from '@polkadot/util-crypto'

// initial setup
cryptoWaitReady()
  .then((): void => {
    console.log('crypto initialized')

    // load all the keyring data
    keyring.loadAll({ store: new AccountsStore(), type: 'sr25519' })

    console.log('initialization completed')
  })
  .catch((error): void => {
    console.error('initialization failed', error)
  })
