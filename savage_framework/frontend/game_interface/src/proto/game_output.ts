// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.181.1
//   protoc               v3.21.12
// source: game_output.proto

/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Any } from "./google/protobuf/any";
import Long = require("long");

export const protobufPackage = "game_output";

export interface GameMessage {
  message: Any | undefined;
}

export interface GameDirectOutput {
  receiverId: number;
  gameOutput: GameMessage | undefined;
}

export interface GameOutput {
  directMessages: GameDirectOutput[];
  broadcast?: GameMessage | undefined;
}

function createBaseGameMessage(): GameMessage {
  return { message: undefined };
}

export const GameMessage = {
  encode(message: GameMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== undefined) {
      Any.encode(message.message, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GameMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGameMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.message = Any.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GameMessage {
    return { message: isSet(object.message) ? Any.fromJSON(object.message) : undefined };
  },

  toJSON(message: GameMessage): unknown {
    const obj: any = {};
    if (message.message !== undefined) {
      obj.message = Any.toJSON(message.message);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GameMessage>, I>>(base?: I): GameMessage {
    return GameMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GameMessage>, I>>(object: I): GameMessage {
    const message = createBaseGameMessage();
    message.message = (object.message !== undefined && object.message !== null)
      ? Any.fromPartial(object.message)
      : undefined;
    return message;
  },
};

function createBaseGameDirectOutput(): GameDirectOutput {
  return { receiverId: 0, gameOutput: undefined };
}

export const GameDirectOutput = {
  encode(message: GameDirectOutput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.receiverId !== 0) {
      writer.uint32(8).uint64(message.receiverId);
    }
    if (message.gameOutput !== undefined) {
      GameMessage.encode(message.gameOutput, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GameDirectOutput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGameDirectOutput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.receiverId = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.gameOutput = GameMessage.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GameDirectOutput {
    return {
      receiverId: isSet(object.receiverId) ? globalThis.Number(object.receiverId) : 0,
      gameOutput: isSet(object.gameOutput) ? GameMessage.fromJSON(object.gameOutput) : undefined,
    };
  },

  toJSON(message: GameDirectOutput): unknown {
    const obj: any = {};
    if (message.receiverId !== 0) {
      obj.receiverId = Math.round(message.receiverId);
    }
    if (message.gameOutput !== undefined) {
      obj.gameOutput = GameMessage.toJSON(message.gameOutput);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GameDirectOutput>, I>>(base?: I): GameDirectOutput {
    return GameDirectOutput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GameDirectOutput>, I>>(object: I): GameDirectOutput {
    const message = createBaseGameDirectOutput();
    message.receiverId = object.receiverId ?? 0;
    message.gameOutput = (object.gameOutput !== undefined && object.gameOutput !== null)
      ? GameMessage.fromPartial(object.gameOutput)
      : undefined;
    return message;
  },
};

function createBaseGameOutput(): GameOutput {
  return { directMessages: [], broadcast: undefined };
}

export const GameOutput = {
  encode(message: GameOutput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.directMessages) {
      GameDirectOutput.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.broadcast !== undefined) {
      GameMessage.encode(message.broadcast, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GameOutput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGameOutput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.directMessages.push(GameDirectOutput.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.broadcast = GameMessage.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GameOutput {
    return {
      directMessages: globalThis.Array.isArray(object?.directMessages)
        ? object.directMessages.map((e: any) => GameDirectOutput.fromJSON(e))
        : [],
      broadcast: isSet(object.broadcast) ? GameMessage.fromJSON(object.broadcast) : undefined,
    };
  },

  toJSON(message: GameOutput): unknown {
    const obj: any = {};
    if (message.directMessages?.length) {
      obj.directMessages = message.directMessages.map((e) => GameDirectOutput.toJSON(e));
    }
    if (message.broadcast !== undefined) {
      obj.broadcast = GameMessage.toJSON(message.broadcast);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GameOutput>, I>>(base?: I): GameOutput {
    return GameOutput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GameOutput>, I>>(object: I): GameOutput {
    const message = createBaseGameOutput();
    message.directMessages = object.directMessages?.map((e) => GameDirectOutput.fromPartial(e)) || [];
    message.broadcast = (object.broadcast !== undefined && object.broadcast !== null)
      ? GameMessage.fromPartial(object.broadcast)
      : undefined;
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
  if (long.lt(globalThis.Number.MIN_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
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