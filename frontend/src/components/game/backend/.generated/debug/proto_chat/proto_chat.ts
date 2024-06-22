/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import Long = require("long");

export const protobufPackage = "proto_chat";

export enum ProtoChatRequestType {
  History = 0,
  UNRECOGNIZED = -1,
}

export function protoChatRequestTypeFromJSON(object: any): ProtoChatRequestType {
  switch (object) {
    case 0:
    case "History":
      return ProtoChatRequestType.History;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProtoChatRequestType.UNRECOGNIZED;
  }
}

export function protoChatRequestTypeToJSON(object: ProtoChatRequestType): string {
  switch (object) {
    case ProtoChatRequestType.History:
      return "History";
    case ProtoChatRequestType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface ProtoChatRequest {
  requests: ProtoChatRequestType[];
}

export interface ProtoChatMessage {
  userId?: number | undefined;
  userMessage?: string | undefined;
}

export interface ProtoChatHistory {
  history: ProtoChatMessage[];
}

function createBaseProtoChatRequest(): ProtoChatRequest {
  return { requests: [] };
}

export const ProtoChatRequest = {
  encode(message: ProtoChatRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.requests) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProtoChatRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProtoChatRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.requests.push(reader.int32() as any);

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.requests.push(reader.int32() as any);
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProtoChatRequest {
    return {
      requests: globalThis.Array.isArray(object?.requests)
        ? object.requests.map((e: any) => protoChatRequestTypeFromJSON(e))
        : [],
    };
  },

  toJSON(message: ProtoChatRequest): unknown {
    const obj: any = {};
    if (message.requests?.length) {
      obj.requests = message.requests.map((e) => protoChatRequestTypeToJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProtoChatRequest>, I>>(base?: I): ProtoChatRequest {
    return ProtoChatRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProtoChatRequest>, I>>(object: I): ProtoChatRequest {
    const message = createBaseProtoChatRequest();
    message.requests = object.requests?.map((e) => e) || [];
    return message;
  },
};

function createBaseProtoChatMessage(): ProtoChatMessage {
  return { userId: undefined, userMessage: undefined };
}

export const ProtoChatMessage = {
  encode(message: ProtoChatMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== undefined) {
      writer.uint32(8).uint64(message.userId);
    }
    if (message.userMessage !== undefined) {
      writer.uint32(18).string(message.userMessage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProtoChatMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProtoChatMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.userId = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userMessage = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProtoChatMessage {
    return {
      userId: isSet(object.userId) ? globalThis.Number(object.userId) : undefined,
      userMessage: isSet(object.userMessage) ? globalThis.String(object.userMessage) : undefined,
    };
  },

  toJSON(message: ProtoChatMessage): unknown {
    const obj: any = {};
    if (message.userId !== undefined) {
      obj.userId = Math.round(message.userId);
    }
    if (message.userMessage !== undefined) {
      obj.userMessage = message.userMessage;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProtoChatMessage>, I>>(base?: I): ProtoChatMessage {
    return ProtoChatMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProtoChatMessage>, I>>(object: I): ProtoChatMessage {
    const message = createBaseProtoChatMessage();
    message.userId = object.userId ?? undefined;
    message.userMessage = object.userMessage ?? undefined;
    return message;
  },
};

function createBaseProtoChatHistory(): ProtoChatHistory {
  return { history: [] };
}

export const ProtoChatHistory = {
  encode(message: ProtoChatHistory, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.history) {
      ProtoChatMessage.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProtoChatHistory {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProtoChatHistory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.history.push(ProtoChatMessage.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProtoChatHistory {
    return {
      history: globalThis.Array.isArray(object?.history)
        ? object.history.map((e: any) => ProtoChatMessage.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ProtoChatHistory): unknown {
    const obj: any = {};
    if (message.history?.length) {
      obj.history = message.history.map((e) => ProtoChatMessage.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProtoChatHistory>, I>>(base?: I): ProtoChatHistory {
    return ProtoChatHistory.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProtoChatHistory>, I>>(object: I): ProtoChatHistory {
    const message = createBaseProtoChatHistory();
    message.history = object.history?.map((e) => ProtoChatMessage.fromPartial(e)) || [];
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}