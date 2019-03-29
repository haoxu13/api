

*__name__*: EnumType

*__description__*: This implements an enum, that based on the value wraps a different type. It is effectively an extension to enum where the value type is determined by the actual index.

# Type parameters
#### T 
# Hierarchy

 [Base](_codec_base_.base.md)<[Codec](../interfaces/_types_.codec.md)>

**↳ EnumType**

↳  [StorageFunctionType](_metadata_v0_modules_.storagefunctiontype.md)

↳  [MetadataStorageModifier](_metadata_v1_storage_.metadatastoragemodifier.md)

↳  [MetadataStorageType](_metadata_v1_storage_.metadatastoragetype.md)

↳  [MetadataStorageType](_metadata_v2_storage_.metadatastoragetype.md)

↳  [MetadataStorageType](_metadata_v3_storage_.metadatastoragetype.md)

↳  [ExtrinsicStatus](_rpc_extrinsicstatus_.extrinsicstatus.md)

↳  [DigestItem](_type_digest_.digestitem.md)

↳  [ValidityAttestation](_type_attestedcandidate_.validityattestation.md)

↳  [Phase](_type_eventrecord_.phase.md)

↳  [MisbehaviorKind](_type_misbehaviorreport_.misbehaviorkind.md)

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new EnumType**(def: *`TypesDef`*, value?: *`any`*, index?: *`number` \| [EnumType](_codec_enumtype_.enumtype.md)<`T`>*, aliasses?: *`Aliasses`*): [EnumType](_codec_enumtype_.enumtype.md)

*Overrides [Base](_codec_base_.base.md).[constructor](_codec_base_.base.md#constructor)*

*Defined in [codec/EnumType.ts:39](https://github.com/polkadot-js/api/blob/e2b15ad/packages/types/src/codec/EnumType.ts#L39)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| def | `TypesDef` |
| `Optional` value | `any` |
| `Optional` index | `number` \| [EnumType](_codec_enumtype_.enumtype.md)<`T`> |
| `Optional` aliasses | `Aliasses` |

**Returns:** [EnumType](_codec_enumtype_.enumtype.md)

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

**get encodedLength**(): `number`

*Defined in [codec/EnumType.ts:127](https://github.com/polkadot-js/api/blob/e2b15ad/packages/types/src/codec/EnumType.ts#L127)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="index"></a>

##  index

**get index**(): `number`

*Defined in [codec/EnumType.ts:134](https://github.com/polkadot-js/api/blob/e2b15ad/packages/types/src/codec/EnumType.ts#L134)*

*__description__*: The index of the metadata value

**Returns:** `number`

___
<a id="isempty"></a>

##  isEmpty

**get isEmpty**(): `boolean`

*Defined in [codec/EnumType.ts:141](https://github.com/polkadot-js/api/blob/e2b15ad/packages/types/src/codec/EnumType.ts#L141)*

*__description__*: Checks if the value is an empty value

**Returns:** `boolean`

___
<a id="isnone"></a>

##  isNone

**get isNone**(): `boolean`

*Defined in [codec/EnumType.ts:148](https://github.com/polkadot-js/api/blob/e2b15ad/packages/types/src/codec/EnumType.ts#L148)*

*__description__*: Checks if the Enum points to a [Null](_primitive_null_.null.md) type

**Returns:** `boolean`

___
<a id="isnull"></a>

##  isNull

**get isNull**(): `boolean`

*Defined in [codec/EnumType.ts:155](https://github.com/polkadot-js/api/blob/e2b15ad/packages/types/src/codec/EnumType.ts#L155)*

*__description__*: Checks if the Enum points to a [Null](_primitive_null_.null.md) type (deprecated, use isNone)

**Returns:** `boolean`

___
<a id="type"></a>

##  type

**get type**(): `string`

*Defined in [codec/EnumType.ts:162](https://github.com/polkadot-js/api/blob/e2b15ad/packages/types/src/codec/EnumType.ts#L162)*

*__description__*: The name of the type this enum value represents

**Returns:** `string`

___
<a id="value"></a>

##  value

**get value**(): [Codec](../interfaces/_types_.codec.md)

*Defined in [codec/EnumType.ts:169](https://github.com/polkadot-js/api/blob/e2b15ad/packages/types/src/codec/EnumType.ts#L169)*

*__description__*: The value of the enum

**Returns:** [Codec](../interfaces/_types_.codec.md)

___

# Methods

<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Defined in [codec/EnumType.ts:176](https://github.com/polkadot-js/api/blob/e2b15ad/packages/types/src/codec/EnumType.ts#L176)*

*__description__*: Compares the value of the input to see if there is a match

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` other | `any` |

**Returns:** `boolean`

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Defined in [codec/EnumType.ts:189](https://github.com/polkadot-js/api/blob/e2b15ad/packages/types/src/codec/EnumType.ts#L189)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Defined in [codec/EnumType.ts:196](https://github.com/polkadot-js/api/blob/e2b15ad/packages/types/src/codec/EnumType.ts#L196)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tonumber"></a>

##  toNumber

▸ **toNumber**(): `number`

*Defined in [codec/EnumType.ts:205](https://github.com/polkadot-js/api/blob/e2b15ad/packages/types/src/codec/EnumType.ts#L205)*

*__description__*: Returns the number representation for the value

**Returns:** `number`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Defined in [codec/EnumType.ts:212](https://github.com/polkadot-js/api/blob/e2b15ad/packages/types/src/codec/EnumType.ts#L212)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Defined in [codec/EnumType.ts:222](https://github.com/polkadot-js/api/blob/e2b15ad/packages/types/src/codec/EnumType.ts#L222)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` \| `false` \| `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`S`>(Types: *`S`*): `EnumConstructor`<[EnumType](_codec_enumtype_.enumtype.md)<`S`>>

*Defined in [codec/EnumType.ts:114](https://github.com/polkadot-js/api/blob/e2b15ad/packages/types/src/codec/EnumType.ts#L114)*

**Type parameters:**

#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** `EnumConstructor`<[EnumType](_codec_enumtype_.enumtype.md)<`S`>>

___
