// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AddLiquidity extends ethereum.Event {
  get params(): AddLiquidity__Params {
    return new AddLiquidity__Params(this);
  }
}

export class AddLiquidity__Params {
  _event: AddLiquidity;

  constructor(event: AddLiquidity) {
    this._event = event;
  }

  get lTokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get underlying(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get newLiquidity(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class AddMargin extends ethereum.Event {
  get params(): AddMargin__Params {
    return new AddMargin__Params(this);
  }
}

export class AddMargin__Params {
  _event: AddMargin;

  constructor(event: AddMargin) {
    this._event = event;
  }

  get pTokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get underlying(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get newMargin(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class AddMarket extends ethereum.Event {
  get params(): AddMarket__Params {
    return new AddMarket__Params(this);
  }
}

export class AddMarket__Params {
  _event: AddMarket;

  constructor(event: AddMarket) {
    this._event = event;
  }

  get market(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class CollectProtocolFee extends ethereum.Event {
  get params(): CollectProtocolFee__Params {
    return new CollectProtocolFee__Params(this);
  }
}

export class CollectProtocolFee__Params {
  _event: CollectProtocolFee;

  constructor(event: CollectProtocolFee) {
    this._event = event;
  }

  get collector(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class NewAdmin extends ethereum.Event {
  get params(): NewAdmin__Params {
    return new NewAdmin__Params(this);
  }
}

export class NewAdmin__Params {
  _event: NewAdmin;

  constructor(event: NewAdmin) {
    this._event = event;
  }

  get newAdmin(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class NewImplementation extends ethereum.Event {
  get params(): NewImplementation__Params {
    return new NewImplementation__Params(this);
  }
}

export class NewImplementation__Params {
  _event: NewImplementation;

  constructor(event: NewImplementation) {
    this._event = event;
  }

  get newImplementation(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class NewProtocolFeeCollector extends ethereum.Event {
  get params(): NewProtocolFeeCollector__Params {
    return new NewProtocolFeeCollector__Params(this);
  }
}

export class NewProtocolFeeCollector__Params {
  _event: NewProtocolFeeCollector;

  constructor(event: NewProtocolFeeCollector) {
    this._event = event;
  }

  get newProtocolFeeCollector(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class RemoveLiquidity extends ethereum.Event {
  get params(): RemoveLiquidity__Params {
    return new RemoveLiquidity__Params(this);
  }
}

export class RemoveLiquidity__Params {
  _event: RemoveLiquidity;

  constructor(event: RemoveLiquidity) {
    this._event = event;
  }

  get lTokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get underlying(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get newLiquidity(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class RemoveMargin extends ethereum.Event {
  get params(): RemoveMargin__Params {
    return new RemoveMargin__Params(this);
  }
}

export class RemoveMargin__Params {
  _event: RemoveMargin;

  constructor(event: RemoveMargin) {
    this._event = event;
  }

  get pTokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get underlying(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get newMargin(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class PoolAbi__lpInfosResult {
  value0: Address;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;

  constructor(value0: Address, value1: BigInt, value2: BigInt, value3: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromSignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromSignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromSignedBigInt(this.value3));
    return map;
  }
}

export class PoolAbi__tdInfosResult {
  value0: Address;
  value1: BigInt;

  constructor(value0: Address, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromSignedBigInt(this.value1));
    return map;
  }
}

export class PoolAbi extends ethereum.SmartContract {
  static bind(address: Address): PoolAbi {
    return new PoolAbi("PoolAbi", address);
  }

  admin(): Address {
    let result = super.call("admin", "admin():(address)", []);

    return result[0].toAddress();
  }

  try_admin(): ethereum.CallResult<Address> {
    let result = super.tryCall("admin", "admin():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  cumulativePnlPerLiquidity(): BigInt {
    let result = super.call(
      "cumulativePnlPerLiquidity",
      "cumulativePnlPerLiquidity():(int256)",
      []
    );

    return result[0].toBigInt();
  }

  try_cumulativePnlPerLiquidity(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "cumulativePnlPerLiquidity",
      "cumulativePnlPerLiquidity():(int256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  implementation(): Address {
    let result = super.call("implementation", "implementation():(address)", []);

    return result[0].toAddress();
  }

  try_implementation(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "implementation",
      "implementation():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  lToken(): Address {
    let result = super.call("lToken", "lToken():(address)", []);

    return result[0].toAddress();
  }

  try_lToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("lToken", "lToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  liquidationRewardCutRatio(): BigInt {
    let result = super.call(
      "liquidationRewardCutRatio",
      "liquidationRewardCutRatio():(int256)",
      []
    );

    return result[0].toBigInt();
  }

  try_liquidationRewardCutRatio(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "liquidationRewardCutRatio",
      "liquidationRewardCutRatio():(int256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  liquidity(): BigInt {
    let result = super.call("liquidity", "liquidity():(int256)", []);

    return result[0].toBigInt();
  }

  try_liquidity(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("liquidity", "liquidity():(int256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  lpInfos(param0: BigInt): PoolAbi__lpInfosResult {
    let result = super.call(
      "lpInfos",
      "lpInfos(uint256):(address,int256,int256,int256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new PoolAbi__lpInfosResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt()
    );
  }

  try_lpInfos(param0: BigInt): ethereum.CallResult<PoolAbi__lpInfosResult> {
    let result = super.tryCall(
      "lpInfos",
      "lpInfos(uint256):(address,int256,int256,int256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new PoolAbi__lpInfosResult(
        value[0].toAddress(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt()
      )
    );
  }

  lpsPnl(): BigInt {
    let result = super.call("lpsPnl", "lpsPnl():(int256)", []);

    return result[0].toBigInt();
  }

  try_lpsPnl(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("lpsPnl", "lpsPnl():(int256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  markets(param0: Address): Address {
    let result = super.call("markets", "markets(address):(address)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toAddress();
  }

  try_markets(param0: Address): ethereum.CallResult<Address> {
    let result = super.tryCall("markets", "markets(address):(address)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  maxLiquidationReward(): BigInt {
    let result = super.call(
      "maxLiquidationReward",
      "maxLiquidationReward():(int256)",
      []
    );

    return result[0].toBigInt();
  }

  try_maxLiquidationReward(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "maxLiquidationReward",
      "maxLiquidationReward():(int256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  minLiquidationReward(): BigInt {
    let result = super.call(
      "minLiquidationReward",
      "minLiquidationReward():(int256)",
      []
    );

    return result[0].toBigInt();
  }

  try_minLiquidationReward(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "minLiquidationReward",
      "minLiquidationReward():(int256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  minRatioB0(): BigInt {
    let result = super.call("minRatioB0", "minRatioB0():(int256)", []);

    return result[0].toBigInt();
  }

  try_minRatioB0(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("minRatioB0", "minRatioB0():(int256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  nameId(): Bytes {
    let result = super.call("nameId", "nameId():(bytes32)", []);

    return result[0].toBytes();
  }

  try_nameId(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("nameId", "nameId():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  oracleManager(): Address {
    let result = super.call("oracleManager", "oracleManager():(address)", []);

    return result[0].toAddress();
  }

  try_oracleManager(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "oracleManager",
      "oracleManager():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  pToken(): Address {
    let result = super.call("pToken", "pToken():(address)", []);

    return result[0].toAddress();
  }

  try_pToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("pToken", "pToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  poolInitialMarginMultiplier(): BigInt {
    let result = super.call(
      "poolInitialMarginMultiplier",
      "poolInitialMarginMultiplier():(int256)",
      []
    );

    return result[0].toBigInt();
  }

  try_poolInitialMarginMultiplier(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "poolInitialMarginMultiplier",
      "poolInitialMarginMultiplier():(int256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  protocolFeeAccrued(): BigInt {
    let result = super.call(
      "protocolFeeAccrued",
      "protocolFeeAccrued():(int256)",
      []
    );

    return result[0].toBigInt();
  }

  try_protocolFeeAccrued(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "protocolFeeAccrued",
      "protocolFeeAccrued():(int256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  protocolFeeCollectRatio(): BigInt {
    let result = super.call(
      "protocolFeeCollectRatio",
      "protocolFeeCollectRatio():(int256)",
      []
    );

    return result[0].toBigInt();
  }

  try_protocolFeeCollectRatio(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "protocolFeeCollectRatio",
      "protocolFeeCollectRatio():(int256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  protocolFeeCollector(): Address {
    let result = super.call(
      "protocolFeeCollector",
      "protocolFeeCollector():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_protocolFeeCollector(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "protocolFeeCollector",
      "protocolFeeCollector():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  reserveRatioB0(): BigInt {
    let result = super.call("reserveRatioB0", "reserveRatioB0():(uint256)", []);

    return result[0].toBigInt();
  }

  try_reserveRatioB0(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "reserveRatioB0",
      "reserveRatioB0():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  swapper(): Address {
    let result = super.call("swapper", "swapper():(address)", []);

    return result[0].toAddress();
  }

  try_swapper(): ethereum.CallResult<Address> {
    let result = super.tryCall("swapper", "swapper():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  symbolManager(): Address {
    let result = super.call("symbolManager", "symbolManager():(address)", []);

    return result[0].toAddress();
  }

  try_symbolManager(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "symbolManager",
      "symbolManager():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  tdInfos(param0: BigInt): PoolAbi__tdInfosResult {
    let result = super.call("tdInfos", "tdInfos(uint256):(address,int256)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return new PoolAbi__tdInfosResult(
      result[0].toAddress(),
      result[1].toBigInt()
    );
  }

  try_tdInfos(param0: BigInt): ethereum.CallResult<PoolAbi__tdInfosResult> {
    let result = super.tryCall("tdInfos", "tdInfos(uint256):(address,int256)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new PoolAbi__tdInfosResult(value[0].toAddress(), value[1].toBigInt())
    );
  }

  tokenB0(): Address {
    let result = super.call("tokenB0", "tokenB0():(address)", []);

    return result[0].toAddress();
  }

  try_tokenB0(): ethereum.CallResult<Address> {
    let result = super.tryCall("tokenB0", "tokenB0():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  tokenWETH(): Address {
    let result = super.call("tokenWETH", "tokenWETH():(address)", []);

    return result[0].toAddress();
  }

  try_tokenWETH(): ethereum.CallResult<Address> {
    let result = super.tryCall("tokenWETH", "tokenWETH():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  marketB0(): Address {
    let result = super.call("marketB0", "marketB0():(address)", []);

    return result[0].toAddress();
  }

  try_marketB0(): ethereum.CallResult<Address> {
    let result = super.tryCall("marketB0", "marketB0():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  marketWETH(): Address {
    let result = super.call("marketWETH", "marketWETH():(address)", []);

    return result[0].toAddress();
  }

  try_marketWETH(): ethereum.CallResult<Address> {
    let result = super.tryCall("marketWETH", "marketWETH():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  vTokenB0(): Address {
    let result = super.call("vTokenB0", "vTokenB0():(address)", []);

    return result[0].toAddress();
  }

  try_vTokenB0(): ethereum.CallResult<Address> {
    let result = super.tryCall("vTokenB0", "vTokenB0():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  vTokenETH(): Address {
    let result = super.call("vTokenETH", "vTokenETH():(address)", []);

    return result[0].toAddress();
  }

  try_vTokenETH(): ethereum.CallResult<Address> {
    let result = super.tryCall("vTokenETH", "vTokenETH():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  vaultImplementation(): Address {
    let result = super.call(
      "vaultImplementation",
      "vaultImplementation():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_vaultImplementation(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "vaultImplementation",
      "vaultImplementation():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  vaultTemplate(): Address {
    let result = super.call("vaultTemplate", "vaultTemplate():(address)", []);

    return result[0].toAddress();
  }

  try_vaultTemplate(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "vaultTemplate",
      "vaultTemplate():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  versionId(): Bytes {
    let result = super.call("versionId", "versionId():(bytes32)", []);

    return result[0].toBytes();
  }

  try_versionId(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("versionId", "versionId():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get addresses_(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get parameters_(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddLiquidityCall extends ethereum.Call {
  get inputs(): AddLiquidityCall__Inputs {
    return new AddLiquidityCall__Inputs(this);
  }

  get outputs(): AddLiquidityCall__Outputs {
    return new AddLiquidityCall__Outputs(this);
  }
}

export class AddLiquidityCall__Inputs {
  _call: AddLiquidityCall;

  constructor(call: AddLiquidityCall) {
    this._call = call;
  }

  get underlying(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get oracleSignatures(): Array<AddLiquidityCallOracleSignaturesStruct> {
    return this._call.inputValues[2].value.toTupleArray<
      AddLiquidityCallOracleSignaturesStruct
    >();
  }
}

export class AddLiquidityCall__Outputs {
  _call: AddLiquidityCall;

  constructor(call: AddLiquidityCall) {
    this._call = call;
  }
}

export class AddLiquidityCallOracleSignaturesStruct extends ethereum.Tuple {
  get oracleSymbolId(): Bytes {
    return this[0].toBytes();
  }

  get timestamp(): BigInt {
    return this[1].toBigInt();
  }

  get value(): BigInt {
    return this[2].toBigInt();
  }

  get v(): i32 {
    return this[3].toI32();
  }

  get r(): Bytes {
    return this[4].toBytes();
  }

  get s(): Bytes {
    return this[5].toBytes();
  }
}

export class AddMarginCall extends ethereum.Call {
  get inputs(): AddMarginCall__Inputs {
    return new AddMarginCall__Inputs(this);
  }

  get outputs(): AddMarginCall__Outputs {
    return new AddMarginCall__Outputs(this);
  }
}

export class AddMarginCall__Inputs {
  _call: AddMarginCall;

  constructor(call: AddMarginCall) {
    this._call = call;
  }

  get underlying(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get oracleSignatures(): Array<AddMarginCallOracleSignaturesStruct> {
    return this._call.inputValues[2].value.toTupleArray<
      AddMarginCallOracleSignaturesStruct
    >();
  }
}

export class AddMarginCall__Outputs {
  _call: AddMarginCall;

  constructor(call: AddMarginCall) {
    this._call = call;
  }
}

export class AddMarginCallOracleSignaturesStruct extends ethereum.Tuple {
  get oracleSymbolId(): Bytes {
    return this[0].toBytes();
  }

  get timestamp(): BigInt {
    return this[1].toBigInt();
  }

  get value(): BigInt {
    return this[2].toBigInt();
  }

  get v(): i32 {
    return this[3].toI32();
  }

  get r(): Bytes {
    return this[4].toBytes();
  }

  get s(): Bytes {
    return this[5].toBytes();
  }
}

export class AddMarketCall extends ethereum.Call {
  get inputs(): AddMarketCall__Inputs {
    return new AddMarketCall__Inputs(this);
  }

  get outputs(): AddMarketCall__Outputs {
    return new AddMarketCall__Outputs(this);
  }
}

export class AddMarketCall__Inputs {
  _call: AddMarketCall;

  constructor(call: AddMarketCall) {
    this._call = call;
  }

  get market(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddMarketCall__Outputs {
  _call: AddMarketCall;

  constructor(call: AddMarketCall) {
    this._call = call;
  }
}

export class ApproveSwapperCall extends ethereum.Call {
  get inputs(): ApproveSwapperCall__Inputs {
    return new ApproveSwapperCall__Inputs(this);
  }

  get outputs(): ApproveSwapperCall__Outputs {
    return new ApproveSwapperCall__Outputs(this);
  }
}

export class ApproveSwapperCall__Inputs {
  _call: ApproveSwapperCall;

  constructor(call: ApproveSwapperCall) {
    this._call = call;
  }

  get underlying(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ApproveSwapperCall__Outputs {
  _call: ApproveSwapperCall;

  constructor(call: ApproveSwapperCall) {
    this._call = call;
  }
}

export class ClaimVenusLpCall extends ethereum.Call {
  get inputs(): ClaimVenusLpCall__Inputs {
    return new ClaimVenusLpCall__Inputs(this);
  }

  get outputs(): ClaimVenusLpCall__Outputs {
    return new ClaimVenusLpCall__Outputs(this);
  }
}

export class ClaimVenusLpCall__Inputs {
  _call: ClaimVenusLpCall;

  constructor(call: ClaimVenusLpCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ClaimVenusLpCall__Outputs {
  _call: ClaimVenusLpCall;

  constructor(call: ClaimVenusLpCall) {
    this._call = call;
  }
}

export class ClaimVenusTraderCall extends ethereum.Call {
  get inputs(): ClaimVenusTraderCall__Inputs {
    return new ClaimVenusTraderCall__Inputs(this);
  }

  get outputs(): ClaimVenusTraderCall__Outputs {
    return new ClaimVenusTraderCall__Outputs(this);
  }
}

export class ClaimVenusTraderCall__Inputs {
  _call: ClaimVenusTraderCall;

  constructor(call: ClaimVenusTraderCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ClaimVenusTraderCall__Outputs {
  _call: ClaimVenusTraderCall;

  constructor(call: ClaimVenusTraderCall) {
    this._call = call;
  }
}

export class CollectProtocolFeeCall extends ethereum.Call {
  get inputs(): CollectProtocolFeeCall__Inputs {
    return new CollectProtocolFeeCall__Inputs(this);
  }

  get outputs(): CollectProtocolFeeCall__Outputs {
    return new CollectProtocolFeeCall__Outputs(this);
  }
}

export class CollectProtocolFeeCall__Inputs {
  _call: CollectProtocolFeeCall;

  constructor(call: CollectProtocolFeeCall) {
    this._call = call;
  }
}

export class CollectProtocolFeeCall__Outputs {
  _call: CollectProtocolFeeCall;

  constructor(call: CollectProtocolFeeCall) {
    this._call = call;
  }
}

export class LiquidateCall extends ethereum.Call {
  get inputs(): LiquidateCall__Inputs {
    return new LiquidateCall__Inputs(this);
  }

  get outputs(): LiquidateCall__Outputs {
    return new LiquidateCall__Outputs(this);
  }
}

export class LiquidateCall__Inputs {
  _call: LiquidateCall;

  constructor(call: LiquidateCall) {
    this._call = call;
  }

  get pTokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get oracleSignatures(): Array<LiquidateCallOracleSignaturesStruct> {
    return this._call.inputValues[1].value.toTupleArray<
      LiquidateCallOracleSignaturesStruct
    >();
  }
}

export class LiquidateCall__Outputs {
  _call: LiquidateCall;

  constructor(call: LiquidateCall) {
    this._call = call;
  }
}

export class LiquidateCallOracleSignaturesStruct extends ethereum.Tuple {
  get oracleSymbolId(): Bytes {
    return this[0].toBytes();
  }

  get timestamp(): BigInt {
    return this[1].toBigInt();
  }

  get value(): BigInt {
    return this[2].toBigInt();
  }

  get v(): i32 {
    return this[3].toI32();
  }

  get r(): Bytes {
    return this[4].toBytes();
  }

  get s(): Bytes {
    return this[5].toBytes();
  }
}

export class RemoveLiquidityCall extends ethereum.Call {
  get inputs(): RemoveLiquidityCall__Inputs {
    return new RemoveLiquidityCall__Inputs(this);
  }

  get outputs(): RemoveLiquidityCall__Outputs {
    return new RemoveLiquidityCall__Outputs(this);
  }
}

export class RemoveLiquidityCall__Inputs {
  _call: RemoveLiquidityCall;

  constructor(call: RemoveLiquidityCall) {
    this._call = call;
  }

  get underlying(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get oracleSignatures(): Array<RemoveLiquidityCallOracleSignaturesStruct> {
    return this._call.inputValues[2].value.toTupleArray<
      RemoveLiquidityCallOracleSignaturesStruct
    >();
  }
}

export class RemoveLiquidityCall__Outputs {
  _call: RemoveLiquidityCall;

  constructor(call: RemoveLiquidityCall) {
    this._call = call;
  }
}

export class RemoveLiquidityCallOracleSignaturesStruct extends ethereum.Tuple {
  get oracleSymbolId(): Bytes {
    return this[0].toBytes();
  }

  get timestamp(): BigInt {
    return this[1].toBigInt();
  }

  get value(): BigInt {
    return this[2].toBigInt();
  }

  get v(): i32 {
    return this[3].toI32();
  }

  get r(): Bytes {
    return this[4].toBytes();
  }

  get s(): Bytes {
    return this[5].toBytes();
  }
}

export class RemoveMarginCall extends ethereum.Call {
  get inputs(): RemoveMarginCall__Inputs {
    return new RemoveMarginCall__Inputs(this);
  }

  get outputs(): RemoveMarginCall__Outputs {
    return new RemoveMarginCall__Outputs(this);
  }
}

export class RemoveMarginCall__Inputs {
  _call: RemoveMarginCall;

  constructor(call: RemoveMarginCall) {
    this._call = call;
  }

  get underlying(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get oracleSignatures(): Array<RemoveMarginCallOracleSignaturesStruct> {
    return this._call.inputValues[2].value.toTupleArray<
      RemoveMarginCallOracleSignaturesStruct
    >();
  }
}

export class RemoveMarginCall__Outputs {
  _call: RemoveMarginCall;

  constructor(call: RemoveMarginCall) {
    this._call = call;
  }
}

export class RemoveMarginCallOracleSignaturesStruct extends ethereum.Tuple {
  get oracleSymbolId(): Bytes {
    return this[0].toBytes();
  }

  get timestamp(): BigInt {
    return this[1].toBigInt();
  }

  get value(): BigInt {
    return this[2].toBigInt();
  }

  get v(): i32 {
    return this[3].toI32();
  }

  get r(): Bytes {
    return this[4].toBytes();
  }

  get s(): Bytes {
    return this[5].toBytes();
  }
}

export class SetAdminCall extends ethereum.Call {
  get inputs(): SetAdminCall__Inputs {
    return new SetAdminCall__Inputs(this);
  }

  get outputs(): SetAdminCall__Outputs {
    return new SetAdminCall__Outputs(this);
  }
}

export class SetAdminCall__Inputs {
  _call: SetAdminCall;

  constructor(call: SetAdminCall) {
    this._call = call;
  }

  get newAdmin(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetAdminCall__Outputs {
  _call: SetAdminCall;

  constructor(call: SetAdminCall) {
    this._call = call;
  }
}

export class TradeCall extends ethereum.Call {
  get inputs(): TradeCall__Inputs {
    return new TradeCall__Inputs(this);
  }

  get outputs(): TradeCall__Outputs {
    return new TradeCall__Outputs(this);
  }
}

export class TradeCall__Inputs {
  _call: TradeCall;

  constructor(call: TradeCall) {
    this._call = call;
  }

  get symbolName(): string {
    return this._call.inputValues[0].value.toString();
  }

  get tradeVolume(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get priceLimit(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get oracleSignatures(): Array<TradeCallOracleSignaturesStruct> {
    return this._call.inputValues[3].value.toTupleArray<
      TradeCallOracleSignaturesStruct
    >();
  }
}

export class TradeCall__Outputs {
  _call: TradeCall;

  constructor(call: TradeCall) {
    this._call = call;
  }
}

export class TradeCallOracleSignaturesStruct extends ethereum.Tuple {
  get oracleSymbolId(): Bytes {
    return this[0].toBytes();
  }

  get timestamp(): BigInt {
    return this[1].toBigInt();
  }

  get value(): BigInt {
    return this[2].toBigInt();
  }

  get v(): i32 {
    return this[3].toI32();
  }

  get r(): Bytes {
    return this[4].toBytes();
  }

  get s(): Bytes {
    return this[5].toBytes();
  }
}
