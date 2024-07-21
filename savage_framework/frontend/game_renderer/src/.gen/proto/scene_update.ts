// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.181.1
//   protoc               v3.21.12
// source: scene_update.proto

/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { DrawBundle } from "./draw_bundle";
import { UniformAttributes } from "./uniform_attributes";

export const protobufPackage = "game_renderer";

export enum UpdateType {
  Full = 0,
  Increment = 1,
  UNRECOGNIZED = -1,
}

export function updateTypeFromJSON(object: any): UpdateType {
  switch (object) {
    case 0:
    case "Full":
      return UpdateType.Full;
    case 1:
    case "Increment":
      return UpdateType.Increment;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UpdateType.UNRECOGNIZED;
  }
}

export function updateTypeToJSON(object: UpdateType): string {
  switch (object) {
    case UpdateType.Full:
      return "Full";
    case UpdateType.Increment:
      return "Increment";
    case UpdateType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface SceneElement {
  id: string;
  drawBundle?: DrawBundle | undefined;
}

export interface SceneUpdate {
  type?: UpdateType | undefined;
  sharedAttributes?: UniformAttributes | undefined;
  elements: SceneElement[];
}

function createBaseSceneElement(): SceneElement {
  return { id: "", drawBundle: undefined };
}

export const SceneElement = {
  encode(message: SceneElement, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.drawBundle !== undefined) {
      DrawBundle.encode(message.drawBundle, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SceneElement {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSceneElement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.drawBundle = DrawBundle.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SceneElement {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      drawBundle: isSet(object.drawBundle) ? DrawBundle.fromJSON(object.drawBundle) : undefined,
    };
  },

  toJSON(message: SceneElement): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.drawBundle !== undefined) {
      obj.drawBundle = DrawBundle.toJSON(message.drawBundle);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SceneElement>, I>>(base?: I): SceneElement {
    return SceneElement.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SceneElement>, I>>(object: I): SceneElement {
    const message = createBaseSceneElement();
    message.id = object.id ?? "";
    message.drawBundle = (object.drawBundle !== undefined && object.drawBundle !== null)
      ? DrawBundle.fromPartial(object.drawBundle)
      : undefined;
    return message;
  },
};

function createBaseSceneUpdate(): SceneUpdate {
  return { type: undefined, sharedAttributes: undefined, elements: [] };
}

export const SceneUpdate = {
  encode(message: SceneUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== undefined) {
      writer.uint32(8).int32(message.type);
    }
    if (message.sharedAttributes !== undefined) {
      UniformAttributes.encode(message.sharedAttributes, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.elements) {
      SceneElement.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SceneUpdate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSceneUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sharedAttributes = UniformAttributes.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.elements.push(SceneElement.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SceneUpdate {
    return {
      type: isSet(object.type) ? updateTypeFromJSON(object.type) : undefined,
      sharedAttributes: isSet(object.sharedAttributes)
        ? UniformAttributes.fromJSON(object.sharedAttributes)
        : undefined,
      elements: globalThis.Array.isArray(object?.elements)
        ? object.elements.map((e: any) => SceneElement.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SceneUpdate): unknown {
    const obj: any = {};
    if (message.type !== undefined) {
      obj.type = updateTypeToJSON(message.type);
    }
    if (message.sharedAttributes !== undefined) {
      obj.sharedAttributes = UniformAttributes.toJSON(message.sharedAttributes);
    }
    if (message.elements?.length) {
      obj.elements = message.elements.map((e) => SceneElement.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SceneUpdate>, I>>(base?: I): SceneUpdate {
    return SceneUpdate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SceneUpdate>, I>>(object: I): SceneUpdate {
    const message = createBaseSceneUpdate();
    message.type = object.type ?? undefined;
    message.sharedAttributes = (object.sharedAttributes !== undefined && object.sharedAttributes !== null)
      ? UniformAttributes.fromPartial(object.sharedAttributes)
      : undefined;
    message.elements = object.elements?.map((e) => SceneElement.fromPartial(e)) || [];
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
