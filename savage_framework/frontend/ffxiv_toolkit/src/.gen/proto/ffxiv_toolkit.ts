// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.181.1
//   protoc               v3.21.12
// source: ffxiv_toolkit.proto

/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { FfxivCharacterSelection } from "./components/character_selection";
import { SceneUpdate } from "./game_renderer/game_renderer";

export const protobufPackage = "ffxiv_toolkit";

export interface FfxivGameUiOutput {
  characterSelection?: FfxivCharacterSelection | undefined;
}

export interface FfxivGameOutput {
  sceneUpdate?: SceneUpdate | undefined;
  uiUpdate?: FfxivGameUiOutput | undefined;
}

export interface FfxivGameInput {
  inputActionsSet?: number | undefined;
}

function createBaseFfxivGameUiOutput(): FfxivGameUiOutput {
  return { characterSelection: undefined };
}

export const FfxivGameUiOutput = {
  encode(message: FfxivGameUiOutput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.characterSelection !== undefined) {
      FfxivCharacterSelection.encode(message.characterSelection, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FfxivGameUiOutput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFfxivGameUiOutput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.characterSelection = FfxivCharacterSelection.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FfxivGameUiOutput {
    return {
      characterSelection: isSet(object.characterSelection)
        ? FfxivCharacterSelection.fromJSON(object.characterSelection)
        : undefined,
    };
  },

  toJSON(message: FfxivGameUiOutput): unknown {
    const obj: any = {};
    if (message.characterSelection !== undefined) {
      obj.characterSelection = FfxivCharacterSelection.toJSON(message.characterSelection);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FfxivGameUiOutput>, I>>(base?: I): FfxivGameUiOutput {
    return FfxivGameUiOutput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FfxivGameUiOutput>, I>>(object: I): FfxivGameUiOutput {
    const message = createBaseFfxivGameUiOutput();
    message.characterSelection = (object.characterSelection !== undefined && object.characterSelection !== null)
      ? FfxivCharacterSelection.fromPartial(object.characterSelection)
      : undefined;
    return message;
  },
};

function createBaseFfxivGameOutput(): FfxivGameOutput {
  return { sceneUpdate: undefined, uiUpdate: undefined };
}

export const FfxivGameOutput = {
  encode(message: FfxivGameOutput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sceneUpdate !== undefined) {
      SceneUpdate.encode(message.sceneUpdate, writer.uint32(10).fork()).ldelim();
    }
    if (message.uiUpdate !== undefined) {
      FfxivGameUiOutput.encode(message.uiUpdate, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FfxivGameOutput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFfxivGameOutput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sceneUpdate = SceneUpdate.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.uiUpdate = FfxivGameUiOutput.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FfxivGameOutput {
    return {
      sceneUpdate: isSet(object.sceneUpdate) ? SceneUpdate.fromJSON(object.sceneUpdate) : undefined,
      uiUpdate: isSet(object.uiUpdate) ? FfxivGameUiOutput.fromJSON(object.uiUpdate) : undefined,
    };
  },

  toJSON(message: FfxivGameOutput): unknown {
    const obj: any = {};
    if (message.sceneUpdate !== undefined) {
      obj.sceneUpdate = SceneUpdate.toJSON(message.sceneUpdate);
    }
    if (message.uiUpdate !== undefined) {
      obj.uiUpdate = FfxivGameUiOutput.toJSON(message.uiUpdate);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FfxivGameOutput>, I>>(base?: I): FfxivGameOutput {
    return FfxivGameOutput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FfxivGameOutput>, I>>(object: I): FfxivGameOutput {
    const message = createBaseFfxivGameOutput();
    message.sceneUpdate = (object.sceneUpdate !== undefined && object.sceneUpdate !== null)
      ? SceneUpdate.fromPartial(object.sceneUpdate)
      : undefined;
    message.uiUpdate = (object.uiUpdate !== undefined && object.uiUpdate !== null)
      ? FfxivGameUiOutput.fromPartial(object.uiUpdate)
      : undefined;
    return message;
  },
};

function createBaseFfxivGameInput(): FfxivGameInput {
  return { inputActionsSet: undefined };
}

export const FfxivGameInput = {
  encode(message: FfxivGameInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inputActionsSet !== undefined) {
      writer.uint32(8).uint64(message.inputActionsSet);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FfxivGameInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFfxivGameInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.inputActionsSet = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FfxivGameInput {
    return { inputActionsSet: isSet(object.inputActionsSet) ? globalThis.Number(object.inputActionsSet) : undefined };
  },

  toJSON(message: FfxivGameInput): unknown {
    const obj: any = {};
    if (message.inputActionsSet !== undefined) {
      obj.inputActionsSet = Math.round(message.inputActionsSet);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FfxivGameInput>, I>>(base?: I): FfxivGameInput {
    return FfxivGameInput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FfxivGameInput>, I>>(object: I): FfxivGameInput {
    const message = createBaseFfxivGameInput();
    message.inputActionsSet = object.inputActionsSet ?? undefined;
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
