/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface DealInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "approval"
      | "approveSale"
      | "buyer"
      | "cancelSale"
      | "depositEarnest"
      | "finalizeSale"
      | "getBalance"
      | "isListed"
      | "list"
      | "nftAddress"
      | "purchasePrice"
      | "seller"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "approval",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "approveSale",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "buyer", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "cancelSale",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "depositEarnest",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "finalizeSale",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isListed",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "list",
    values: [BigNumberish, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "nftAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "purchasePrice",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "seller", values?: undefined): string;

  decodeFunctionResult(functionFragment: "approval", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "approveSale",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "buyer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cancelSale", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositEarnest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "finalizeSale",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getBalance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isListed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "list", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nftAddress", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "purchasePrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "seller", data: BytesLike): Result;
}

export interface Deal extends BaseContract {
  connect(runner?: ContractRunner | null): Deal;
  waitForDeployment(): Promise<this>;

  interface: DealInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  approval: TypedContractMethod<
    [arg0: BigNumberish, arg1: AddressLike],
    [boolean],
    "view"
  >;

  approveSale: TypedContractMethod<
    [_nftID: BigNumberish],
    [void],
    "nonpayable"
  >;

  buyer: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  cancelSale: TypedContractMethod<[_nftID: BigNumberish], [void], "nonpayable">;

  depositEarnest: TypedContractMethod<
    [_nftID: BigNumberish],
    [void],
    "payable"
  >;

  finalizeSale: TypedContractMethod<
    [_nftID: BigNumberish],
    [void],
    "nonpayable"
  >;

  getBalance: TypedContractMethod<[], [bigint], "view">;

  isListed: TypedContractMethod<[arg0: BigNumberish], [boolean], "view">;

  list: TypedContractMethod<
    [_nftID: BigNumberish, _buyer: AddressLike, _purchasePrice: BigNumberish],
    [void],
    "payable"
  >;

  nftAddress: TypedContractMethod<[], [string], "view">;

  purchasePrice: TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;

  seller: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "approval"
  ): TypedContractMethod<
    [arg0: BigNumberish, arg1: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "approveSale"
  ): TypedContractMethod<[_nftID: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "buyer"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "cancelSale"
  ): TypedContractMethod<[_nftID: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "depositEarnest"
  ): TypedContractMethod<[_nftID: BigNumberish], [void], "payable">;
  getFunction(
    nameOrSignature: "finalizeSale"
  ): TypedContractMethod<[_nftID: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "getBalance"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "isListed"
  ): TypedContractMethod<[arg0: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "list"
  ): TypedContractMethod<
    [_nftID: BigNumberish, _buyer: AddressLike, _purchasePrice: BigNumberish],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "nftAddress"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "purchasePrice"
  ): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "seller"
  ): TypedContractMethod<[], [string], "view">;

  filters: {};
}
