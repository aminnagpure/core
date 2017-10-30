global.Class = {
    register: clazz => {
        global[clazz.prototype.constructor.name] = clazz;
    }
};

global.JDB = require('jungle-db');

require('./utils/LogNative.js');
require('../../generic/utils/Log.js');
require('../../generic/utils/Observable.js');
require('../../generic/utils/Services.js');
require('../../generic/utils/Synchronizer.js');
require('../../generic/utils/Timers.js');
require('../../generic/utils/Version.js');
require('../../generic/utils/database/TypedDBTransaction.js');
require('./database/TypedDB.js');
require('../../generic/utils/database/ObjectDB.js');
require('../../generic/utils/array/IndexedArray.js');
require('../../generic/utils/array/HashMap.js');
require('../../generic/utils/array/HashSet.js');
require('../../generic/utils/array/Queue.js');
require('../../generic/utils/array/ArrayUtils.js');
require('../../generic/utils/assert/Assert.js');
require('../../generic/utils/buffer/SerialBuffer.js');
require('../../generic/utils/buffer/BufferUtils.js');
require('./crypto/CryptoLib.js');
require('../../generic/utils/crypto/Crypto.js');
require('../../generic/utils/crc/CRC32.js');
require('../../generic/utils/number/NumberUtils.js');
require('../../generic/utils/merkle/MerkleTree.js');
require('../../generic/utils/platform/PlatformUtils.js');
require('../../generic/utils/string/StringUtils.js');
require('../../generic/consensus/Policy.js');
require('../../generic/consensus/base/primitive/Primitive.js');
require('../../generic/consensus/base/primitive/Hash.js');
require('../../generic/consensus/base/primitive/PrivateKey.js');
require('../../generic/consensus/base/primitive/PublicKey.js');
require('../../generic/consensus/base/primitive/KeyPair.js');
require('../../generic/consensus/base/primitive/Signature.js');
require('../../generic/consensus/base/account/Address.js');
require('../../generic/consensus/base/account/Balance.js');
require('../../generic/consensus/base/account/Account.js');
require('../../generic/consensus/base/account/tree/AccountsTreeNode.js');
require('../../generic/consensus/base/account/tree/AccountsTreeStore.js');
require('../../generic/consensus/base/account/tree/AccountsTree.js');
require('../../generic/consensus/base/account/Accounts.js');
require('../../generic/consensus/base/block/BlockUtils.js');
require('../../generic/consensus/base/block/BlockBody.js');
require('../../generic/consensus/base/block/BlockInterlink.js');
require('../../generic/consensus/base/block/BlockHeader.js');
require('../../generic/consensus/base/transaction/Transaction.js');
require('../../generic/consensus/base/block/Block.js');
require('../../generic/consensus/base/blockchain/IBlockchain.js');
require('../../generic/consensus/base/blockchain/BaseChain.js');
require('../../generic/consensus/base/blockchain/BlockChain.js');
require('../../generic/consensus/base/blockchain/HeaderChain.js');
require('../../generic/consensus/base/blockchain/ChainProof.js');
require('../../generic/consensus/base/blockchain/ChainData.js');
require('../../generic/consensus/base/blockchain/ChainDataStore.js');
require('../../generic/consensus/base/mempool/Mempool.js');
require('../../generic/consensus/full/FullChain.js');
require('../../generic/consensus/full/FullConsensusAgent.js');
require('../../generic/consensus/full/FullConsensus.js');
require('../../generic/consensus/nano/NanoChain.js');
require('../../generic/consensus/nano/NanoConsensusAgent.js');
require('../../generic/consensus/nano/NanoConsensus.js');
require('../../generic/consensus/ConsensusDB.js');
require('../../generic/consensus/Consensus.js');
require('../../generic/network/Protocol.js');
require('../../generic/network/address/NetAddress.js');
require('../../generic/network/address/PeerAddress.js');
require('../../generic/network/address/PeerAddresses.js');
require('../../generic/network/message/Message.js');
require('../../generic/network/message/AddrMessage.js');
require('../../generic/network/message/BlockMessage.js');
require('../../generic/network/message/GetAddrMessage.js');
require('../../generic/network/message/GetBlocksMessage.js');
require('../../generic/network/message/HeaderMessage.js');
require('../../generic/network/message/InventoryMessage.js');
require('../../generic/network/message/MempoolMessage.js');
require('../../generic/network/message/PingMessage.js');
require('../../generic/network/message/PongMessage.js');
require('../../generic/network/message/RejectMessage.js');
require('../../generic/network/message/SignalMessage.js');
require('../../generic/network/message/TxMessage.js');
require('../../generic/network/message/VersionMessage.js');
require('../../generic/network/message/AccountsProofMessage.js');
require('../../generic/network/message/GetAccountsProofMessage.js');
require('../../generic/network/message/ChainProofMessage.js');
require('../../generic/network/message/GetChainProofMessage.js');
require('../../generic/network/message/AccountsTreeChunkMessage.js');
require('../../generic/network/message/GetAccountsTreeChunkMessage.js');
require('../../generic/network/message/MessageFactory.js');
require('./network/webrtc/WebRtcConnector.js');
require('./network/websocket/WebSocketConnector.js');
require('./network/NetworkConfig.js');
require('../../generic/network/PeerConnection.js');
require('../../generic/network/PeerChannel.js');
require('../../generic/network/Peer.js');
require('../../generic/network/NetworkAgent.js');
require('../../generic/network/Network.js');
require('../../generic/network/NetUtils.js');
require('../../generic/miner/Miner.js');
require('../../generic/wallet/WalletStore.js');
require('../../generic/wallet/Wallet.js');
require('./utils/WindowDetector.js');
require('../../generic/Core.js');
