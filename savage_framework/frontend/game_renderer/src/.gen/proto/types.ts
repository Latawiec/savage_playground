// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.181.1
//   protoc               v3.21.12
// source: types.proto

/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "game_renderer";

export interface Float32Array {
  values: number[];
}

export interface Uint32Array {
  values: number[];
}

export interface Texture {
  bindOffset: number;
  asset: string;
}

function createBaseFloat32Array(): Float32Array {
  return { values: [] };
}

export const Float32Array = {
  encode(message: Float32Array, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.values) {
      writer.float(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Float32Array {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFloat32Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 13) {
            message.values.push(reader.float());

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.values.push(reader.float());
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

  fromJSON(object: any): Float32Array {
    return {
      values: globalThis.Array.isArray(object?.values) ? object.values.map((e: any) => globalThis.Number(e)) : [],
    };
  },

  toJSON(message: Float32Array): unknown {
    const obj: any = {};
    if (message.values?.length) {
      obj.values = message.values;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Float32Array>, I>>(base?: I): Float32Array {
    return Float32Array.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Float32Array>, I>>(object: I): Float32Array {
    const message = createBaseFloat32Array();
    message.values = object.values?.map((e) => e) || [];
    return message;
  },
};

function createBaseUint32Array(): Uint32Array {
  return { values: [] };
}

export const Uint32Array = {
  encode(message: Uint32Array, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.values) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Uint32Array {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUint32Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.values.push(reader.uint32());

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.values.push(reader.uint32());
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

  fromJSON(object: any): Uint32Array {
    return {
      values: globalThis.Array.isArray(object?.values) ? object.values.map((e: any) => globalThis.Number(e)) : [],
    };
  },

  toJSON(message: Uint32Array): unknown {
    const obj: any = {};
    if (message.values?.length) {
      obj.values = message.values.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Uint32Array>, I>>(base?: I): Uint32Array {
    return Uint32Array.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Uint32Array>, I>>(object: I): Uint32Array {
    const message = createBaseUint32Array();
    message.values = object.values?.map((e) => e) || [];
    return message;
  },
};

function createBaseTexture(): Texture {
  return { bindOffset: 0, asset: "" };
}

export const Texture = {
  encode(message: Texture, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bindOffset !== 0) {
      writer.uint32(8).uint32(message.bindOffset);
    }
    if (message.asset !== "") {
      writer.uint32(18).string(message.asset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Texture {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTexture();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.bindOffset = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.asset = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Texture {
    return {
      bindOffset: isSet(object.bindOffset) ? globalThis.Number(object.bindOffset) : 0,
      asset: isSet(object.asset) ? globalThis.String(object.asset) : "",
    };
  },

  toJSON(message: Texture): unknown {
    const obj: any = {};
    if (message.bindOffset !== 0) {
      obj.bindOffset = Math.round(message.bindOffset);
    }
    if (message.asset !== "") {
      obj.asset = message.asset;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Texture>, I>>(base?: I): Texture {
    return Texture.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Texture>, I>>(object: I): Texture {
    const message = createBaseTexture();
    message.bindOffset = object.bindOffset ?? 0;
    message.asset = object.asset ?? "";
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