
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Cliente
 * Tabla física: clientes
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model Admision
 * Tabla física: admisiones
 */
export type Admision = $Result.DefaultSelection<Prisma.$AdmisionPayload>
/**
 * Model Asesor
 * Tabla física: asesores
 */
export type Asesor = $Result.DefaultSelection<Prisma.$AsesorPayload>
/**
 * Model AsignacionCliente
 * Tabla física: asignaciones_clientes
 */
export type AsignacionCliente = $Result.DefaultSelection<Prisma.$AsignacionClientePayload>
/**
 * Model Ruta
 * Tabla física: rutas
 */
export type Ruta = $Result.DefaultSelection<Prisma.$RutaPayload>
/**
 * Model RutaCliente
 * Tabla física: rutas_clientes (tabla intermedia de detalle de visitas programadas)
 */
export type RutaCliente = $Result.DefaultSelection<Prisma.$RutaClientePayload>
/**
 * Model Visita
 * Tabla física: visitas (registro de ejecución real y gestión en campo)
 */
export type Visita = $Result.DefaultSelection<Prisma.$VisitaPayload>
/**
 * Model Usuario
 * Tabla física: usuarios
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model AuditoriaSeguridad
 * 
 */
export type AuditoriaSeguridad = $Result.DefaultSelection<Prisma.$AuditoriaSeguridadPayload>
/**
 * Model ImportacionMasiva
 * 
 */
export type ImportacionMasiva = $Result.DefaultSelection<Prisma.$ImportacionMasivaPayload>
/**
 * Model RegistroCalidad
 * Registro controlado del Sistema de Gestión de Calidad (ISO 9001).
 */
export type RegistroCalidad = $Result.DefaultSelection<Prisma.$RegistroCalidadPayload>
/**
 * Model HistorialCalidad
 * Evidencia inmutable de cada modificación del registro de calidad.
 */
export type HistorialCalidad = $Result.DefaultSelection<Prisma.$HistorialCalidadPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TipoDocumento: {
  DNI: 'DNI',
  CE: 'CE',
  PASAPORTE: 'PASAPORTE',
  RUC: 'RUC'
};

export type TipoDocumento = (typeof TipoDocumento)[keyof typeof TipoDocumento]

}

export type TipoDocumento = $Enums.TipoDocumento

export const TipoDocumento: typeof $Enums.TipoDocumento

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Clientes
 * const clientes = await prisma.cliente.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Clientes
   * const clientes = await prisma.cliente.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admision`: Exposes CRUD operations for the **Admision** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admisions
    * const admisions = await prisma.admision.findMany()
    * ```
    */
  get admision(): Prisma.AdmisionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.asesor`: Exposes CRUD operations for the **Asesor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Asesors
    * const asesors = await prisma.asesor.findMany()
    * ```
    */
  get asesor(): Prisma.AsesorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.asignacionCliente`: Exposes CRUD operations for the **AsignacionCliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AsignacionClientes
    * const asignacionClientes = await prisma.asignacionCliente.findMany()
    * ```
    */
  get asignacionCliente(): Prisma.AsignacionClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ruta`: Exposes CRUD operations for the **Ruta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rutas
    * const rutas = await prisma.ruta.findMany()
    * ```
    */
  get ruta(): Prisma.RutaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rutaCliente`: Exposes CRUD operations for the **RutaCliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RutaClientes
    * const rutaClientes = await prisma.rutaCliente.findMany()
    * ```
    */
  get rutaCliente(): Prisma.RutaClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.visita`: Exposes CRUD operations for the **Visita** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Visitas
    * const visitas = await prisma.visita.findMany()
    * ```
    */
  get visita(): Prisma.VisitaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditoriaSeguridad`: Exposes CRUD operations for the **AuditoriaSeguridad** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditoriaSeguridads
    * const auditoriaSeguridads = await prisma.auditoriaSeguridad.findMany()
    * ```
    */
  get auditoriaSeguridad(): Prisma.AuditoriaSeguridadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.importacionMasiva`: Exposes CRUD operations for the **ImportacionMasiva** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ImportacionMasivas
    * const importacionMasivas = await prisma.importacionMasiva.findMany()
    * ```
    */
  get importacionMasiva(): Prisma.ImportacionMasivaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.registroCalidad`: Exposes CRUD operations for the **RegistroCalidad** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RegistroCalidads
    * const registroCalidads = await prisma.registroCalidad.findMany()
    * ```
    */
  get registroCalidad(): Prisma.RegistroCalidadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.historialCalidad`: Exposes CRUD operations for the **HistorialCalidad** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HistorialCalidads
    * const historialCalidads = await prisma.historialCalidad.findMany()
    * ```
    */
  get historialCalidad(): Prisma.HistorialCalidadDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.9.1
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Cliente: 'Cliente',
    Admision: 'Admision',
    Asesor: 'Asesor',
    AsignacionCliente: 'AsignacionCliente',
    Ruta: 'Ruta',
    RutaCliente: 'RutaCliente',
    Visita: 'Visita',
    Usuario: 'Usuario',
    AuditoriaSeguridad: 'AuditoriaSeguridad',
    ImportacionMasiva: 'ImportacionMasiva',
    RegistroCalidad: 'RegistroCalidad',
    HistorialCalidad: 'HistorialCalidad'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "cliente" | "admision" | "asesor" | "asignacionCliente" | "ruta" | "rutaCliente" | "visita" | "usuario" | "auditoriaSeguridad" | "importacionMasiva" | "registroCalidad" | "historialCalidad"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      Admision: {
        payload: Prisma.$AdmisionPayload<ExtArgs>
        fields: Prisma.AdmisionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdmisionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmisionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdmisionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmisionPayload>
          }
          findFirst: {
            args: Prisma.AdmisionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmisionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdmisionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmisionPayload>
          }
          findMany: {
            args: Prisma.AdmisionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmisionPayload>[]
          }
          create: {
            args: Prisma.AdmisionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmisionPayload>
          }
          createMany: {
            args: Prisma.AdmisionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdmisionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmisionPayload>[]
          }
          delete: {
            args: Prisma.AdmisionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmisionPayload>
          }
          update: {
            args: Prisma.AdmisionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmisionPayload>
          }
          deleteMany: {
            args: Prisma.AdmisionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdmisionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdmisionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmisionPayload>[]
          }
          upsert: {
            args: Prisma.AdmisionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmisionPayload>
          }
          aggregate: {
            args: Prisma.AdmisionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmision>
          }
          groupBy: {
            args: Prisma.AdmisionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdmisionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdmisionCountArgs<ExtArgs>
            result: $Utils.Optional<AdmisionCountAggregateOutputType> | number
          }
        }
      }
      Asesor: {
        payload: Prisma.$AsesorPayload<ExtArgs>
        fields: Prisma.AsesorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AsesorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsesorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AsesorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsesorPayload>
          }
          findFirst: {
            args: Prisma.AsesorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsesorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AsesorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsesorPayload>
          }
          findMany: {
            args: Prisma.AsesorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsesorPayload>[]
          }
          create: {
            args: Prisma.AsesorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsesorPayload>
          }
          createMany: {
            args: Prisma.AsesorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AsesorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsesorPayload>[]
          }
          delete: {
            args: Prisma.AsesorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsesorPayload>
          }
          update: {
            args: Prisma.AsesorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsesorPayload>
          }
          deleteMany: {
            args: Prisma.AsesorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AsesorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AsesorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsesorPayload>[]
          }
          upsert: {
            args: Prisma.AsesorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsesorPayload>
          }
          aggregate: {
            args: Prisma.AsesorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAsesor>
          }
          groupBy: {
            args: Prisma.AsesorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AsesorGroupByOutputType>[]
          }
          count: {
            args: Prisma.AsesorCountArgs<ExtArgs>
            result: $Utils.Optional<AsesorCountAggregateOutputType> | number
          }
        }
      }
      AsignacionCliente: {
        payload: Prisma.$AsignacionClientePayload<ExtArgs>
        fields: Prisma.AsignacionClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AsignacionClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignacionClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AsignacionClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignacionClientePayload>
          }
          findFirst: {
            args: Prisma.AsignacionClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignacionClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AsignacionClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignacionClientePayload>
          }
          findMany: {
            args: Prisma.AsignacionClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignacionClientePayload>[]
          }
          create: {
            args: Prisma.AsignacionClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignacionClientePayload>
          }
          createMany: {
            args: Prisma.AsignacionClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AsignacionClienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignacionClientePayload>[]
          }
          delete: {
            args: Prisma.AsignacionClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignacionClientePayload>
          }
          update: {
            args: Prisma.AsignacionClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignacionClientePayload>
          }
          deleteMany: {
            args: Prisma.AsignacionClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AsignacionClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AsignacionClienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignacionClientePayload>[]
          }
          upsert: {
            args: Prisma.AsignacionClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignacionClientePayload>
          }
          aggregate: {
            args: Prisma.AsignacionClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAsignacionCliente>
          }
          groupBy: {
            args: Prisma.AsignacionClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<AsignacionClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.AsignacionClienteCountArgs<ExtArgs>
            result: $Utils.Optional<AsignacionClienteCountAggregateOutputType> | number
          }
        }
      }
      Ruta: {
        payload: Prisma.$RutaPayload<ExtArgs>
        fields: Prisma.RutaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RutaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RutaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutaPayload>
          }
          findFirst: {
            args: Prisma.RutaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RutaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutaPayload>
          }
          findMany: {
            args: Prisma.RutaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutaPayload>[]
          }
          create: {
            args: Prisma.RutaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutaPayload>
          }
          createMany: {
            args: Prisma.RutaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RutaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutaPayload>[]
          }
          delete: {
            args: Prisma.RutaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutaPayload>
          }
          update: {
            args: Prisma.RutaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutaPayload>
          }
          deleteMany: {
            args: Prisma.RutaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RutaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RutaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutaPayload>[]
          }
          upsert: {
            args: Prisma.RutaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutaPayload>
          }
          aggregate: {
            args: Prisma.RutaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRuta>
          }
          groupBy: {
            args: Prisma.RutaGroupByArgs<ExtArgs>
            result: $Utils.Optional<RutaGroupByOutputType>[]
          }
          count: {
            args: Prisma.RutaCountArgs<ExtArgs>
            result: $Utils.Optional<RutaCountAggregateOutputType> | number
          }
        }
      }
      RutaCliente: {
        payload: Prisma.$RutaClientePayload<ExtArgs>
        fields: Prisma.RutaClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RutaClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutaClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RutaClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutaClientePayload>
          }
          findFirst: {
            args: Prisma.RutaClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutaClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RutaClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutaClientePayload>
          }
          findMany: {
            args: Prisma.RutaClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutaClientePayload>[]
          }
          create: {
            args: Prisma.RutaClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutaClientePayload>
          }
          createMany: {
            args: Prisma.RutaClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RutaClienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutaClientePayload>[]
          }
          delete: {
            args: Prisma.RutaClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutaClientePayload>
          }
          update: {
            args: Prisma.RutaClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutaClientePayload>
          }
          deleteMany: {
            args: Prisma.RutaClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RutaClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RutaClienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutaClientePayload>[]
          }
          upsert: {
            args: Prisma.RutaClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutaClientePayload>
          }
          aggregate: {
            args: Prisma.RutaClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRutaCliente>
          }
          groupBy: {
            args: Prisma.RutaClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<RutaClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.RutaClienteCountArgs<ExtArgs>
            result: $Utils.Optional<RutaClienteCountAggregateOutputType> | number
          }
        }
      }
      Visita: {
        payload: Prisma.$VisitaPayload<ExtArgs>
        fields: Prisma.VisitaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VisitaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VisitaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitaPayload>
          }
          findFirst: {
            args: Prisma.VisitaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VisitaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitaPayload>
          }
          findMany: {
            args: Prisma.VisitaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitaPayload>[]
          }
          create: {
            args: Prisma.VisitaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitaPayload>
          }
          createMany: {
            args: Prisma.VisitaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VisitaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitaPayload>[]
          }
          delete: {
            args: Prisma.VisitaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitaPayload>
          }
          update: {
            args: Prisma.VisitaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitaPayload>
          }
          deleteMany: {
            args: Prisma.VisitaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VisitaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VisitaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitaPayload>[]
          }
          upsert: {
            args: Prisma.VisitaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitaPayload>
          }
          aggregate: {
            args: Prisma.VisitaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVisita>
          }
          groupBy: {
            args: Prisma.VisitaGroupByArgs<ExtArgs>
            result: $Utils.Optional<VisitaGroupByOutputType>[]
          }
          count: {
            args: Prisma.VisitaCountArgs<ExtArgs>
            result: $Utils.Optional<VisitaCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      AuditoriaSeguridad: {
        payload: Prisma.$AuditoriaSeguridadPayload<ExtArgs>
        fields: Prisma.AuditoriaSeguridadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditoriaSeguridadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditoriaSeguridadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditoriaSeguridadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditoriaSeguridadPayload>
          }
          findFirst: {
            args: Prisma.AuditoriaSeguridadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditoriaSeguridadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditoriaSeguridadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditoriaSeguridadPayload>
          }
          findMany: {
            args: Prisma.AuditoriaSeguridadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditoriaSeguridadPayload>[]
          }
          create: {
            args: Prisma.AuditoriaSeguridadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditoriaSeguridadPayload>
          }
          createMany: {
            args: Prisma.AuditoriaSeguridadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditoriaSeguridadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditoriaSeguridadPayload>[]
          }
          delete: {
            args: Prisma.AuditoriaSeguridadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditoriaSeguridadPayload>
          }
          update: {
            args: Prisma.AuditoriaSeguridadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditoriaSeguridadPayload>
          }
          deleteMany: {
            args: Prisma.AuditoriaSeguridadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditoriaSeguridadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditoriaSeguridadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditoriaSeguridadPayload>[]
          }
          upsert: {
            args: Prisma.AuditoriaSeguridadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditoriaSeguridadPayload>
          }
          aggregate: {
            args: Prisma.AuditoriaSeguridadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditoriaSeguridad>
          }
          groupBy: {
            args: Prisma.AuditoriaSeguridadGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditoriaSeguridadGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditoriaSeguridadCountArgs<ExtArgs>
            result: $Utils.Optional<AuditoriaSeguridadCountAggregateOutputType> | number
          }
        }
      }
      ImportacionMasiva: {
        payload: Prisma.$ImportacionMasivaPayload<ExtArgs>
        fields: Prisma.ImportacionMasivaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImportacionMasivaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportacionMasivaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImportacionMasivaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportacionMasivaPayload>
          }
          findFirst: {
            args: Prisma.ImportacionMasivaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportacionMasivaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImportacionMasivaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportacionMasivaPayload>
          }
          findMany: {
            args: Prisma.ImportacionMasivaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportacionMasivaPayload>[]
          }
          create: {
            args: Prisma.ImportacionMasivaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportacionMasivaPayload>
          }
          createMany: {
            args: Prisma.ImportacionMasivaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImportacionMasivaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportacionMasivaPayload>[]
          }
          delete: {
            args: Prisma.ImportacionMasivaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportacionMasivaPayload>
          }
          update: {
            args: Prisma.ImportacionMasivaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportacionMasivaPayload>
          }
          deleteMany: {
            args: Prisma.ImportacionMasivaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImportacionMasivaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImportacionMasivaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportacionMasivaPayload>[]
          }
          upsert: {
            args: Prisma.ImportacionMasivaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportacionMasivaPayload>
          }
          aggregate: {
            args: Prisma.ImportacionMasivaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImportacionMasiva>
          }
          groupBy: {
            args: Prisma.ImportacionMasivaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImportacionMasivaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImportacionMasivaCountArgs<ExtArgs>
            result: $Utils.Optional<ImportacionMasivaCountAggregateOutputType> | number
          }
        }
      }
      RegistroCalidad: {
        payload: Prisma.$RegistroCalidadPayload<ExtArgs>
        fields: Prisma.RegistroCalidadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegistroCalidadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroCalidadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegistroCalidadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroCalidadPayload>
          }
          findFirst: {
            args: Prisma.RegistroCalidadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroCalidadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegistroCalidadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroCalidadPayload>
          }
          findMany: {
            args: Prisma.RegistroCalidadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroCalidadPayload>[]
          }
          create: {
            args: Prisma.RegistroCalidadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroCalidadPayload>
          }
          createMany: {
            args: Prisma.RegistroCalidadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegistroCalidadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroCalidadPayload>[]
          }
          delete: {
            args: Prisma.RegistroCalidadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroCalidadPayload>
          }
          update: {
            args: Prisma.RegistroCalidadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroCalidadPayload>
          }
          deleteMany: {
            args: Prisma.RegistroCalidadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegistroCalidadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RegistroCalidadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroCalidadPayload>[]
          }
          upsert: {
            args: Prisma.RegistroCalidadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroCalidadPayload>
          }
          aggregate: {
            args: Prisma.RegistroCalidadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegistroCalidad>
          }
          groupBy: {
            args: Prisma.RegistroCalidadGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegistroCalidadGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegistroCalidadCountArgs<ExtArgs>
            result: $Utils.Optional<RegistroCalidadCountAggregateOutputType> | number
          }
        }
      }
      HistorialCalidad: {
        payload: Prisma.$HistorialCalidadPayload<ExtArgs>
        fields: Prisma.HistorialCalidadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HistorialCalidadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialCalidadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HistorialCalidadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialCalidadPayload>
          }
          findFirst: {
            args: Prisma.HistorialCalidadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialCalidadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HistorialCalidadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialCalidadPayload>
          }
          findMany: {
            args: Prisma.HistorialCalidadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialCalidadPayload>[]
          }
          create: {
            args: Prisma.HistorialCalidadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialCalidadPayload>
          }
          createMany: {
            args: Prisma.HistorialCalidadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HistorialCalidadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialCalidadPayload>[]
          }
          delete: {
            args: Prisma.HistorialCalidadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialCalidadPayload>
          }
          update: {
            args: Prisma.HistorialCalidadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialCalidadPayload>
          }
          deleteMany: {
            args: Prisma.HistorialCalidadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HistorialCalidadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HistorialCalidadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialCalidadPayload>[]
          }
          upsert: {
            args: Prisma.HistorialCalidadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialCalidadPayload>
          }
          aggregate: {
            args: Prisma.HistorialCalidadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistorialCalidad>
          }
          groupBy: {
            args: Prisma.HistorialCalidadGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistorialCalidadGroupByOutputType>[]
          }
          count: {
            args: Prisma.HistorialCalidadCountArgs<ExtArgs>
            result: $Utils.Optional<HistorialCalidadCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    cliente?: ClienteOmit
    admision?: AdmisionOmit
    asesor?: AsesorOmit
    asignacionCliente?: AsignacionClienteOmit
    ruta?: RutaOmit
    rutaCliente?: RutaClienteOmit
    visita?: VisitaOmit
    usuario?: UsuarioOmit
    auditoriaSeguridad?: AuditoriaSeguridadOmit
    importacionMasiva?: ImportacionMasivaOmit
    registroCalidad?: RegistroCalidadOmit
    historialCalidad?: HistorialCalidadOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    admisiones: number
    asignaciones: number
    rutas_clientes: number
    visitas: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admisiones?: boolean | ClienteCountOutputTypeCountAdmisionesArgs
    asignaciones?: boolean | ClienteCountOutputTypeCountAsignacionesArgs
    rutas_clientes?: boolean | ClienteCountOutputTypeCountRutas_clientesArgs
    visitas?: boolean | ClienteCountOutputTypeCountVisitasArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountAdmisionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdmisionWhereInput
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountAsignacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsignacionClienteWhereInput
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountRutas_clientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RutaClienteWhereInput
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountVisitasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitaWhereInput
  }


  /**
   * Count Type AsesorCountOutputType
   */

  export type AsesorCountOutputType = {
    asignaciones: number
    rutas: number
    visitas: number
  }

  export type AsesorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asignaciones?: boolean | AsesorCountOutputTypeCountAsignacionesArgs
    rutas?: boolean | AsesorCountOutputTypeCountRutasArgs
    visitas?: boolean | AsesorCountOutputTypeCountVisitasArgs
  }

  // Custom InputTypes
  /**
   * AsesorCountOutputType without action
   */
  export type AsesorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsesorCountOutputType
     */
    select?: AsesorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AsesorCountOutputType without action
   */
  export type AsesorCountOutputTypeCountAsignacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsignacionClienteWhereInput
  }

  /**
   * AsesorCountOutputType without action
   */
  export type AsesorCountOutputTypeCountRutasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RutaWhereInput
  }

  /**
   * AsesorCountOutputType without action
   */
  export type AsesorCountOutputTypeCountVisitasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitaWhereInput
  }


  /**
   * Count Type RutaCountOutputType
   */

  export type RutaCountOutputType = {
    rutas_clientes: number
  }

  export type RutaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rutas_clientes?: boolean | RutaCountOutputTypeCountRutas_clientesArgs
  }

  // Custom InputTypes
  /**
   * RutaCountOutputType without action
   */
  export type RutaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutaCountOutputType
     */
    select?: RutaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RutaCountOutputType without action
   */
  export type RutaCountOutputTypeCountRutas_clientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RutaClienteWhereInput
  }


  /**
   * Count Type RutaClienteCountOutputType
   */

  export type RutaClienteCountOutputType = {
    visitas: number
  }

  export type RutaClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visitas?: boolean | RutaClienteCountOutputTypeCountVisitasArgs
  }

  // Custom InputTypes
  /**
   * RutaClienteCountOutputType without action
   */
  export type RutaClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutaClienteCountOutputType
     */
    select?: RutaClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RutaClienteCountOutputType without action
   */
  export type RutaClienteCountOutputTypeCountVisitasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitaWhereInput
  }


  /**
   * Count Type RegistroCalidadCountOutputType
   */

  export type RegistroCalidadCountOutputType = {
    historial: number
  }

  export type RegistroCalidadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    historial?: boolean | RegistroCalidadCountOutputTypeCountHistorialArgs
  }

  // Custom InputTypes
  /**
   * RegistroCalidadCountOutputType without action
   */
  export type RegistroCalidadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroCalidadCountOutputType
     */
    select?: RegistroCalidadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RegistroCalidadCountOutputType without action
   */
  export type RegistroCalidadCountOutputTypeCountHistorialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistorialCalidadWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteAvgAggregateOutputType = {
    id_cliente: number | null
    deuda_castigada: Decimal | null
    deuda_vigente: Decimal | null
    otras_deudas: Decimal | null
    latitud: Decimal | null
    longitud: Decimal | null
  }

  export type ClienteSumAggregateOutputType = {
    id_cliente: number | null
    deuda_castigada: Decimal | null
    deuda_vigente: Decimal | null
    otras_deudas: Decimal | null
    latitud: Decimal | null
    longitud: Decimal | null
  }

  export type ClienteMinAggregateOutputType = {
    id_cliente: number | null
    tipo_documento: $Enums.TipoDocumento | null
    numero_documento: string | null
    telefono: string | null
    nombres: string | null
    apellido_paterno: string | null
    apellido_materno: string | null
    direccion: string | null
    distrito: string | null
    deuda_castigada: Decimal | null
    deuda_vigente: Decimal | null
    otras_deudas: Decimal | null
    estado: string | null
    ultima_gestion: Date | null
    latitud: Decimal | null
    longitud: Decimal | null
  }

  export type ClienteMaxAggregateOutputType = {
    id_cliente: number | null
    tipo_documento: $Enums.TipoDocumento | null
    numero_documento: string | null
    telefono: string | null
    nombres: string | null
    apellido_paterno: string | null
    apellido_materno: string | null
    direccion: string | null
    distrito: string | null
    deuda_castigada: Decimal | null
    deuda_vigente: Decimal | null
    otras_deudas: Decimal | null
    estado: string | null
    ultima_gestion: Date | null
    latitud: Decimal | null
    longitud: Decimal | null
  }

  export type ClienteCountAggregateOutputType = {
    id_cliente: number
    tipo_documento: number
    numero_documento: number
    telefono: number
    nombres: number
    apellido_paterno: number
    apellido_materno: number
    direccion: number
    distrito: number
    deuda_castigada: number
    deuda_vigente: number
    otras_deudas: number
    estado: number
    ultima_gestion: number
    latitud: number
    longitud: number
    _all: number
  }


  export type ClienteAvgAggregateInputType = {
    id_cliente?: true
    deuda_castigada?: true
    deuda_vigente?: true
    otras_deudas?: true
    latitud?: true
    longitud?: true
  }

  export type ClienteSumAggregateInputType = {
    id_cliente?: true
    deuda_castigada?: true
    deuda_vigente?: true
    otras_deudas?: true
    latitud?: true
    longitud?: true
  }

  export type ClienteMinAggregateInputType = {
    id_cliente?: true
    tipo_documento?: true
    numero_documento?: true
    telefono?: true
    nombres?: true
    apellido_paterno?: true
    apellido_materno?: true
    direccion?: true
    distrito?: true
    deuda_castigada?: true
    deuda_vigente?: true
    otras_deudas?: true
    estado?: true
    ultima_gestion?: true
    latitud?: true
    longitud?: true
  }

  export type ClienteMaxAggregateInputType = {
    id_cliente?: true
    tipo_documento?: true
    numero_documento?: true
    telefono?: true
    nombres?: true
    apellido_paterno?: true
    apellido_materno?: true
    direccion?: true
    distrito?: true
    deuda_castigada?: true
    deuda_vigente?: true
    otras_deudas?: true
    estado?: true
    ultima_gestion?: true
    latitud?: true
    longitud?: true
  }

  export type ClienteCountAggregateInputType = {
    id_cliente?: true
    tipo_documento?: true
    numero_documento?: true
    telefono?: true
    nombres?: true
    apellido_paterno?: true
    apellido_materno?: true
    direccion?: true
    distrito?: true
    deuda_castigada?: true
    deuda_vigente?: true
    otras_deudas?: true
    estado?: true
    ultima_gestion?: true
    latitud?: true
    longitud?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _avg?: ClienteAvgAggregateInputType
    _sum?: ClienteSumAggregateInputType
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    id_cliente: number
    tipo_documento: $Enums.TipoDocumento
    numero_documento: string
    telefono: string | null
    nombres: string
    apellido_paterno: string
    apellido_materno: string
    direccion: string | null
    distrito: string | null
    deuda_castigada: Decimal
    deuda_vigente: Decimal
    otras_deudas: Decimal
    estado: string
    ultima_gestion: Date | null
    latitud: Decimal | null
    longitud: Decimal | null
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cliente?: boolean
    tipo_documento?: boolean
    numero_documento?: boolean
    telefono?: boolean
    nombres?: boolean
    apellido_paterno?: boolean
    apellido_materno?: boolean
    direccion?: boolean
    distrito?: boolean
    deuda_castigada?: boolean
    deuda_vigente?: boolean
    otras_deudas?: boolean
    estado?: boolean
    ultima_gestion?: boolean
    latitud?: boolean
    longitud?: boolean
    admisiones?: boolean | Cliente$admisionesArgs<ExtArgs>
    asignaciones?: boolean | Cliente$asignacionesArgs<ExtArgs>
    rutas_clientes?: boolean | Cliente$rutas_clientesArgs<ExtArgs>
    visitas?: boolean | Cliente$visitasArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cliente?: boolean
    tipo_documento?: boolean
    numero_documento?: boolean
    telefono?: boolean
    nombres?: boolean
    apellido_paterno?: boolean
    apellido_materno?: boolean
    direccion?: boolean
    distrito?: boolean
    deuda_castigada?: boolean
    deuda_vigente?: boolean
    otras_deudas?: boolean
    estado?: boolean
    ultima_gestion?: boolean
    latitud?: boolean
    longitud?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cliente?: boolean
    tipo_documento?: boolean
    numero_documento?: boolean
    telefono?: boolean
    nombres?: boolean
    apellido_paterno?: boolean
    apellido_materno?: boolean
    direccion?: boolean
    distrito?: boolean
    deuda_castigada?: boolean
    deuda_vigente?: boolean
    otras_deudas?: boolean
    estado?: boolean
    ultima_gestion?: boolean
    latitud?: boolean
    longitud?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectScalar = {
    id_cliente?: boolean
    tipo_documento?: boolean
    numero_documento?: boolean
    telefono?: boolean
    nombres?: boolean
    apellido_paterno?: boolean
    apellido_materno?: boolean
    direccion?: boolean
    distrito?: boolean
    deuda_castigada?: boolean
    deuda_vigente?: boolean
    otras_deudas?: boolean
    estado?: boolean
    ultima_gestion?: boolean
    latitud?: boolean
    longitud?: boolean
  }

  export type ClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_cliente" | "tipo_documento" | "numero_documento" | "telefono" | "nombres" | "apellido_paterno" | "apellido_materno" | "direccion" | "distrito" | "deuda_castigada" | "deuda_vigente" | "otras_deudas" | "estado" | "ultima_gestion" | "latitud" | "longitud", ExtArgs["result"]["cliente"]>
  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admisiones?: boolean | Cliente$admisionesArgs<ExtArgs>
    asignaciones?: boolean | Cliente$asignacionesArgs<ExtArgs>
    rutas_clientes?: boolean | Cliente$rutas_clientesArgs<ExtArgs>
    visitas?: boolean | Cliente$visitasArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      admisiones: Prisma.$AdmisionPayload<ExtArgs>[]
      asignaciones: Prisma.$AsignacionClientePayload<ExtArgs>[]
      rutas_clientes: Prisma.$RutaClientePayload<ExtArgs>[]
      visitas: Prisma.$VisitaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_cliente: number
      tipo_documento: $Enums.TipoDocumento
      numero_documento: string
      telefono: string | null
      nombres: string
      apellido_paterno: string
      apellido_materno: string
      direccion: string | null
      distrito: string | null
      deuda_castigada: Prisma.Decimal
      deuda_vigente: Prisma.Decimal
      otras_deudas: Prisma.Decimal
      estado: string
      ultima_gestion: Date | null
      latitud: Prisma.Decimal | null
      longitud: Prisma.Decimal | null
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id_cliente`
     * const clienteWithId_clienteOnly = await prisma.cliente.findMany({ select: { id_cliente: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {ClienteCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `id_cliente`
     * const clienteWithId_clienteOnly = await prisma.cliente.createManyAndReturn({
     *   select: { id_cliente: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClienteCreateManyAndReturnArgs>(args?: SelectSubset<T, ClienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes and returns the data updated in the database.
     * @param {ClienteUpdateManyAndReturnArgs} args - Arguments to update many Clientes.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clientes and only return the `id_cliente`
     * const clienteWithId_clienteOnly = await prisma.cliente.updateManyAndReturn({
     *   select: { id_cliente: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClienteUpdateManyAndReturnArgs>(args: SelectSubset<T, ClienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admisiones<T extends Cliente$admisionesArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$admisionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdmisionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    asignaciones<T extends Cliente$asignacionesArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$asignacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsignacionClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rutas_clientes<T extends Cliente$rutas_clientesArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$rutas_clientesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutaClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    visitas<T extends Cliente$visitasArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$visitasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cliente model
   */
  interface ClienteFieldRefs {
    readonly id_cliente: FieldRef<"Cliente", 'Int'>
    readonly tipo_documento: FieldRef<"Cliente", 'TipoDocumento'>
    readonly numero_documento: FieldRef<"Cliente", 'String'>
    readonly telefono: FieldRef<"Cliente", 'String'>
    readonly nombres: FieldRef<"Cliente", 'String'>
    readonly apellido_paterno: FieldRef<"Cliente", 'String'>
    readonly apellido_materno: FieldRef<"Cliente", 'String'>
    readonly direccion: FieldRef<"Cliente", 'String'>
    readonly distrito: FieldRef<"Cliente", 'String'>
    readonly deuda_castigada: FieldRef<"Cliente", 'Decimal'>
    readonly deuda_vigente: FieldRef<"Cliente", 'Decimal'>
    readonly otras_deudas: FieldRef<"Cliente", 'Decimal'>
    readonly estado: FieldRef<"Cliente", 'String'>
    readonly ultima_gestion: FieldRef<"Cliente", 'DateTime'>
    readonly latitud: FieldRef<"Cliente", 'Decimal'>
    readonly longitud: FieldRef<"Cliente", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente createManyAndReturn
   */
  export type ClienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente updateManyAndReturn
   */
  export type ClienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Cliente.admisiones
   */
  export type Cliente$admisionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admision
     */
    select?: AdmisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admision
     */
    omit?: AdmisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmisionInclude<ExtArgs> | null
    where?: AdmisionWhereInput
    orderBy?: AdmisionOrderByWithRelationInput | AdmisionOrderByWithRelationInput[]
    cursor?: AdmisionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdmisionScalarFieldEnum | AdmisionScalarFieldEnum[]
  }

  /**
   * Cliente.asignaciones
   */
  export type Cliente$asignacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsignacionCliente
     */
    select?: AsignacionClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsignacionCliente
     */
    omit?: AsignacionClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignacionClienteInclude<ExtArgs> | null
    where?: AsignacionClienteWhereInput
    orderBy?: AsignacionClienteOrderByWithRelationInput | AsignacionClienteOrderByWithRelationInput[]
    cursor?: AsignacionClienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AsignacionClienteScalarFieldEnum | AsignacionClienteScalarFieldEnum[]
  }

  /**
   * Cliente.rutas_clientes
   */
  export type Cliente$rutas_clientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutaCliente
     */
    select?: RutaClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutaCliente
     */
    omit?: RutaClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutaClienteInclude<ExtArgs> | null
    where?: RutaClienteWhereInput
    orderBy?: RutaClienteOrderByWithRelationInput | RutaClienteOrderByWithRelationInput[]
    cursor?: RutaClienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RutaClienteScalarFieldEnum | RutaClienteScalarFieldEnum[]
  }

  /**
   * Cliente.visitas
   */
  export type Cliente$visitasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visita
     */
    select?: VisitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visita
     */
    omit?: VisitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitaInclude<ExtArgs> | null
    where?: VisitaWhereInput
    orderBy?: VisitaOrderByWithRelationInput | VisitaOrderByWithRelationInput[]
    cursor?: VisitaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VisitaScalarFieldEnum | VisitaScalarFieldEnum[]
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model Admision
   */

  export type AggregateAdmision = {
    _count: AdmisionCountAggregateOutputType | null
    _avg: AdmisionAvgAggregateOutputType | null
    _sum: AdmisionSumAggregateOutputType | null
    _min: AdmisionMinAggregateOutputType | null
    _max: AdmisionMaxAggregateOutputType | null
  }

  export type AdmisionAvgAggregateOutputType = {
    id_admision: number | null
    id_cliente: number | null
    linea_credito: Decimal | null
  }

  export type AdmisionSumAggregateOutputType = {
    id_admision: number | null
    id_cliente: number | null
    linea_credito: Decimal | null
  }

  export type AdmisionMinAggregateOutputType = {
    id_admision: number | null
    id_cliente: number | null
    producto: string | null
    linea_credito: Decimal | null
    estado: string | null
    fecha: Date | null
  }

  export type AdmisionMaxAggregateOutputType = {
    id_admision: number | null
    id_cliente: number | null
    producto: string | null
    linea_credito: Decimal | null
    estado: string | null
    fecha: Date | null
  }

  export type AdmisionCountAggregateOutputType = {
    id_admision: number
    id_cliente: number
    producto: number
    linea_credito: number
    estado: number
    fecha: number
    _all: number
  }


  export type AdmisionAvgAggregateInputType = {
    id_admision?: true
    id_cliente?: true
    linea_credito?: true
  }

  export type AdmisionSumAggregateInputType = {
    id_admision?: true
    id_cliente?: true
    linea_credito?: true
  }

  export type AdmisionMinAggregateInputType = {
    id_admision?: true
    id_cliente?: true
    producto?: true
    linea_credito?: true
    estado?: true
    fecha?: true
  }

  export type AdmisionMaxAggregateInputType = {
    id_admision?: true
    id_cliente?: true
    producto?: true
    linea_credito?: true
    estado?: true
    fecha?: true
  }

  export type AdmisionCountAggregateInputType = {
    id_admision?: true
    id_cliente?: true
    producto?: true
    linea_credito?: true
    estado?: true
    fecha?: true
    _all?: true
  }

  export type AdmisionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admision to aggregate.
     */
    where?: AdmisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admisions to fetch.
     */
    orderBy?: AdmisionOrderByWithRelationInput | AdmisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdmisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admisions
    **/
    _count?: true | AdmisionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdmisionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdmisionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdmisionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdmisionMaxAggregateInputType
  }

  export type GetAdmisionAggregateType<T extends AdmisionAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmision]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmision[P]>
      : GetScalarType<T[P], AggregateAdmision[P]>
  }




  export type AdmisionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdmisionWhereInput
    orderBy?: AdmisionOrderByWithAggregationInput | AdmisionOrderByWithAggregationInput[]
    by: AdmisionScalarFieldEnum[] | AdmisionScalarFieldEnum
    having?: AdmisionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdmisionCountAggregateInputType | true
    _avg?: AdmisionAvgAggregateInputType
    _sum?: AdmisionSumAggregateInputType
    _min?: AdmisionMinAggregateInputType
    _max?: AdmisionMaxAggregateInputType
  }

  export type AdmisionGroupByOutputType = {
    id_admision: number
    id_cliente: number
    producto: string | null
    linea_credito: Decimal | null
    estado: string
    fecha: Date | null
    _count: AdmisionCountAggregateOutputType | null
    _avg: AdmisionAvgAggregateOutputType | null
    _sum: AdmisionSumAggregateOutputType | null
    _min: AdmisionMinAggregateOutputType | null
    _max: AdmisionMaxAggregateOutputType | null
  }

  type GetAdmisionGroupByPayload<T extends AdmisionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdmisionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdmisionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdmisionGroupByOutputType[P]>
            : GetScalarType<T[P], AdmisionGroupByOutputType[P]>
        }
      >
    >


  export type AdmisionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_admision?: boolean
    id_cliente?: boolean
    producto?: boolean
    linea_credito?: boolean
    estado?: boolean
    fecha?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admision"]>

  export type AdmisionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_admision?: boolean
    id_cliente?: boolean
    producto?: boolean
    linea_credito?: boolean
    estado?: boolean
    fecha?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admision"]>

  export type AdmisionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_admision?: boolean
    id_cliente?: boolean
    producto?: boolean
    linea_credito?: boolean
    estado?: boolean
    fecha?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admision"]>

  export type AdmisionSelectScalar = {
    id_admision?: boolean
    id_cliente?: boolean
    producto?: boolean
    linea_credito?: boolean
    estado?: boolean
    fecha?: boolean
  }

  export type AdmisionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_admision" | "id_cliente" | "producto" | "linea_credito" | "estado" | "fecha", ExtArgs["result"]["admision"]>
  export type AdmisionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }
  export type AdmisionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }
  export type AdmisionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }

  export type $AdmisionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admision"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_admision: number
      id_cliente: number
      producto: string | null
      linea_credito: Prisma.Decimal | null
      estado: string
      fecha: Date | null
    }, ExtArgs["result"]["admision"]>
    composites: {}
  }

  type AdmisionGetPayload<S extends boolean | null | undefined | AdmisionDefaultArgs> = $Result.GetResult<Prisma.$AdmisionPayload, S>

  type AdmisionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdmisionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdmisionCountAggregateInputType | true
    }

  export interface AdmisionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admision'], meta: { name: 'Admision' } }
    /**
     * Find zero or one Admision that matches the filter.
     * @param {AdmisionFindUniqueArgs} args - Arguments to find a Admision
     * @example
     * // Get one Admision
     * const admision = await prisma.admision.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdmisionFindUniqueArgs>(args: SelectSubset<T, AdmisionFindUniqueArgs<ExtArgs>>): Prisma__AdmisionClient<$Result.GetResult<Prisma.$AdmisionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admision that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdmisionFindUniqueOrThrowArgs} args - Arguments to find a Admision
     * @example
     * // Get one Admision
     * const admision = await prisma.admision.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdmisionFindUniqueOrThrowArgs>(args: SelectSubset<T, AdmisionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdmisionClient<$Result.GetResult<Prisma.$AdmisionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admision that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmisionFindFirstArgs} args - Arguments to find a Admision
     * @example
     * // Get one Admision
     * const admision = await prisma.admision.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdmisionFindFirstArgs>(args?: SelectSubset<T, AdmisionFindFirstArgs<ExtArgs>>): Prisma__AdmisionClient<$Result.GetResult<Prisma.$AdmisionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admision that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmisionFindFirstOrThrowArgs} args - Arguments to find a Admision
     * @example
     * // Get one Admision
     * const admision = await prisma.admision.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdmisionFindFirstOrThrowArgs>(args?: SelectSubset<T, AdmisionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdmisionClient<$Result.GetResult<Prisma.$AdmisionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admisions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmisionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admisions
     * const admisions = await prisma.admision.findMany()
     * 
     * // Get first 10 Admisions
     * const admisions = await prisma.admision.findMany({ take: 10 })
     * 
     * // Only select the `id_admision`
     * const admisionWithId_admisionOnly = await prisma.admision.findMany({ select: { id_admision: true } })
     * 
     */
    findMany<T extends AdmisionFindManyArgs>(args?: SelectSubset<T, AdmisionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdmisionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admision.
     * @param {AdmisionCreateArgs} args - Arguments to create a Admision.
     * @example
     * // Create one Admision
     * const Admision = await prisma.admision.create({
     *   data: {
     *     // ... data to create a Admision
     *   }
     * })
     * 
     */
    create<T extends AdmisionCreateArgs>(args: SelectSubset<T, AdmisionCreateArgs<ExtArgs>>): Prisma__AdmisionClient<$Result.GetResult<Prisma.$AdmisionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admisions.
     * @param {AdmisionCreateManyArgs} args - Arguments to create many Admisions.
     * @example
     * // Create many Admisions
     * const admision = await prisma.admision.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdmisionCreateManyArgs>(args?: SelectSubset<T, AdmisionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admisions and returns the data saved in the database.
     * @param {AdmisionCreateManyAndReturnArgs} args - Arguments to create many Admisions.
     * @example
     * // Create many Admisions
     * const admision = await prisma.admision.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admisions and only return the `id_admision`
     * const admisionWithId_admisionOnly = await prisma.admision.createManyAndReturn({
     *   select: { id_admision: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdmisionCreateManyAndReturnArgs>(args?: SelectSubset<T, AdmisionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdmisionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admision.
     * @param {AdmisionDeleteArgs} args - Arguments to delete one Admision.
     * @example
     * // Delete one Admision
     * const Admision = await prisma.admision.delete({
     *   where: {
     *     // ... filter to delete one Admision
     *   }
     * })
     * 
     */
    delete<T extends AdmisionDeleteArgs>(args: SelectSubset<T, AdmisionDeleteArgs<ExtArgs>>): Prisma__AdmisionClient<$Result.GetResult<Prisma.$AdmisionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admision.
     * @param {AdmisionUpdateArgs} args - Arguments to update one Admision.
     * @example
     * // Update one Admision
     * const admision = await prisma.admision.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdmisionUpdateArgs>(args: SelectSubset<T, AdmisionUpdateArgs<ExtArgs>>): Prisma__AdmisionClient<$Result.GetResult<Prisma.$AdmisionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admisions.
     * @param {AdmisionDeleteManyArgs} args - Arguments to filter Admisions to delete.
     * @example
     * // Delete a few Admisions
     * const { count } = await prisma.admision.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdmisionDeleteManyArgs>(args?: SelectSubset<T, AdmisionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admisions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmisionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admisions
     * const admision = await prisma.admision.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdmisionUpdateManyArgs>(args: SelectSubset<T, AdmisionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admisions and returns the data updated in the database.
     * @param {AdmisionUpdateManyAndReturnArgs} args - Arguments to update many Admisions.
     * @example
     * // Update many Admisions
     * const admision = await prisma.admision.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admisions and only return the `id_admision`
     * const admisionWithId_admisionOnly = await prisma.admision.updateManyAndReturn({
     *   select: { id_admision: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdmisionUpdateManyAndReturnArgs>(args: SelectSubset<T, AdmisionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdmisionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admision.
     * @param {AdmisionUpsertArgs} args - Arguments to update or create a Admision.
     * @example
     * // Update or create a Admision
     * const admision = await prisma.admision.upsert({
     *   create: {
     *     // ... data to create a Admision
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admision we want to update
     *   }
     * })
     */
    upsert<T extends AdmisionUpsertArgs>(args: SelectSubset<T, AdmisionUpsertArgs<ExtArgs>>): Prisma__AdmisionClient<$Result.GetResult<Prisma.$AdmisionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admisions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmisionCountArgs} args - Arguments to filter Admisions to count.
     * @example
     * // Count the number of Admisions
     * const count = await prisma.admision.count({
     *   where: {
     *     // ... the filter for the Admisions we want to count
     *   }
     * })
    **/
    count<T extends AdmisionCountArgs>(
      args?: Subset<T, AdmisionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdmisionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admision.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmisionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdmisionAggregateArgs>(args: Subset<T, AdmisionAggregateArgs>): Prisma.PrismaPromise<GetAdmisionAggregateType<T>>

    /**
     * Group by Admision.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmisionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdmisionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdmisionGroupByArgs['orderBy'] }
        : { orderBy?: AdmisionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdmisionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdmisionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admision model
   */
  readonly fields: AdmisionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admision.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdmisionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admision model
   */
  interface AdmisionFieldRefs {
    readonly id_admision: FieldRef<"Admision", 'Int'>
    readonly id_cliente: FieldRef<"Admision", 'Int'>
    readonly producto: FieldRef<"Admision", 'String'>
    readonly linea_credito: FieldRef<"Admision", 'Decimal'>
    readonly estado: FieldRef<"Admision", 'String'>
    readonly fecha: FieldRef<"Admision", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admision findUnique
   */
  export type AdmisionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admision
     */
    select?: AdmisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admision
     */
    omit?: AdmisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmisionInclude<ExtArgs> | null
    /**
     * Filter, which Admision to fetch.
     */
    where: AdmisionWhereUniqueInput
  }

  /**
   * Admision findUniqueOrThrow
   */
  export type AdmisionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admision
     */
    select?: AdmisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admision
     */
    omit?: AdmisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmisionInclude<ExtArgs> | null
    /**
     * Filter, which Admision to fetch.
     */
    where: AdmisionWhereUniqueInput
  }

  /**
   * Admision findFirst
   */
  export type AdmisionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admision
     */
    select?: AdmisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admision
     */
    omit?: AdmisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmisionInclude<ExtArgs> | null
    /**
     * Filter, which Admision to fetch.
     */
    where?: AdmisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admisions to fetch.
     */
    orderBy?: AdmisionOrderByWithRelationInput | AdmisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admisions.
     */
    cursor?: AdmisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admisions.
     */
    distinct?: AdmisionScalarFieldEnum | AdmisionScalarFieldEnum[]
  }

  /**
   * Admision findFirstOrThrow
   */
  export type AdmisionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admision
     */
    select?: AdmisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admision
     */
    omit?: AdmisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmisionInclude<ExtArgs> | null
    /**
     * Filter, which Admision to fetch.
     */
    where?: AdmisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admisions to fetch.
     */
    orderBy?: AdmisionOrderByWithRelationInput | AdmisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admisions.
     */
    cursor?: AdmisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admisions.
     */
    distinct?: AdmisionScalarFieldEnum | AdmisionScalarFieldEnum[]
  }

  /**
   * Admision findMany
   */
  export type AdmisionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admision
     */
    select?: AdmisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admision
     */
    omit?: AdmisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmisionInclude<ExtArgs> | null
    /**
     * Filter, which Admisions to fetch.
     */
    where?: AdmisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admisions to fetch.
     */
    orderBy?: AdmisionOrderByWithRelationInput | AdmisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admisions.
     */
    cursor?: AdmisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admisions.
     */
    distinct?: AdmisionScalarFieldEnum | AdmisionScalarFieldEnum[]
  }

  /**
   * Admision create
   */
  export type AdmisionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admision
     */
    select?: AdmisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admision
     */
    omit?: AdmisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmisionInclude<ExtArgs> | null
    /**
     * The data needed to create a Admision.
     */
    data: XOR<AdmisionCreateInput, AdmisionUncheckedCreateInput>
  }

  /**
   * Admision createMany
   */
  export type AdmisionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admisions.
     */
    data: AdmisionCreateManyInput | AdmisionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admision createManyAndReturn
   */
  export type AdmisionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admision
     */
    select?: AdmisionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admision
     */
    omit?: AdmisionOmit<ExtArgs> | null
    /**
     * The data used to create many Admisions.
     */
    data: AdmisionCreateManyInput | AdmisionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmisionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Admision update
   */
  export type AdmisionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admision
     */
    select?: AdmisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admision
     */
    omit?: AdmisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmisionInclude<ExtArgs> | null
    /**
     * The data needed to update a Admision.
     */
    data: XOR<AdmisionUpdateInput, AdmisionUncheckedUpdateInput>
    /**
     * Choose, which Admision to update.
     */
    where: AdmisionWhereUniqueInput
  }

  /**
   * Admision updateMany
   */
  export type AdmisionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admisions.
     */
    data: XOR<AdmisionUpdateManyMutationInput, AdmisionUncheckedUpdateManyInput>
    /**
     * Filter which Admisions to update
     */
    where?: AdmisionWhereInput
    /**
     * Limit how many Admisions to update.
     */
    limit?: number
  }

  /**
   * Admision updateManyAndReturn
   */
  export type AdmisionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admision
     */
    select?: AdmisionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admision
     */
    omit?: AdmisionOmit<ExtArgs> | null
    /**
     * The data used to update Admisions.
     */
    data: XOR<AdmisionUpdateManyMutationInput, AdmisionUncheckedUpdateManyInput>
    /**
     * Filter which Admisions to update
     */
    where?: AdmisionWhereInput
    /**
     * Limit how many Admisions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmisionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Admision upsert
   */
  export type AdmisionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admision
     */
    select?: AdmisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admision
     */
    omit?: AdmisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmisionInclude<ExtArgs> | null
    /**
     * The filter to search for the Admision to update in case it exists.
     */
    where: AdmisionWhereUniqueInput
    /**
     * In case the Admision found by the `where` argument doesn't exist, create a new Admision with this data.
     */
    create: XOR<AdmisionCreateInput, AdmisionUncheckedCreateInput>
    /**
     * In case the Admision was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdmisionUpdateInput, AdmisionUncheckedUpdateInput>
  }

  /**
   * Admision delete
   */
  export type AdmisionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admision
     */
    select?: AdmisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admision
     */
    omit?: AdmisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmisionInclude<ExtArgs> | null
    /**
     * Filter which Admision to delete.
     */
    where: AdmisionWhereUniqueInput
  }

  /**
   * Admision deleteMany
   */
  export type AdmisionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admisions to delete
     */
    where?: AdmisionWhereInput
    /**
     * Limit how many Admisions to delete.
     */
    limit?: number
  }

  /**
   * Admision without action
   */
  export type AdmisionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admision
     */
    select?: AdmisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admision
     */
    omit?: AdmisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmisionInclude<ExtArgs> | null
  }


  /**
   * Model Asesor
   */

  export type AggregateAsesor = {
    _count: AsesorCountAggregateOutputType | null
    _avg: AsesorAvgAggregateOutputType | null
    _sum: AsesorSumAggregateOutputType | null
    _min: AsesorMinAggregateOutputType | null
    _max: AsesorMaxAggregateOutputType | null
  }

  export type AsesorAvgAggregateOutputType = {
    id_asesor: number | null
    latitud: Decimal | null
    longitud: Decimal | null
  }

  export type AsesorSumAggregateOutputType = {
    id_asesor: number | null
    latitud: Decimal | null
    longitud: Decimal | null
  }

  export type AsesorMinAggregateOutputType = {
    id_asesor: number | null
    dni: string | null
    nombres: string | null
    apellido_paterno: string | null
    apellido_materno: string | null
    telefono: string | null
    correo: string | null
    distrito: string | null
    estado: string | null
    latitud: Decimal | null
    longitud: Decimal | null
    fecha_creacion: Date | null
    fecha_actualizar: Date | null
  }

  export type AsesorMaxAggregateOutputType = {
    id_asesor: number | null
    dni: string | null
    nombres: string | null
    apellido_paterno: string | null
    apellido_materno: string | null
    telefono: string | null
    correo: string | null
    distrito: string | null
    estado: string | null
    latitud: Decimal | null
    longitud: Decimal | null
    fecha_creacion: Date | null
    fecha_actualizar: Date | null
  }

  export type AsesorCountAggregateOutputType = {
    id_asesor: number
    dni: number
    nombres: number
    apellido_paterno: number
    apellido_materno: number
    telefono: number
    correo: number
    distrito: number
    estado: number
    latitud: number
    longitud: number
    fecha_creacion: number
    fecha_actualizar: number
    _all: number
  }


  export type AsesorAvgAggregateInputType = {
    id_asesor?: true
    latitud?: true
    longitud?: true
  }

  export type AsesorSumAggregateInputType = {
    id_asesor?: true
    latitud?: true
    longitud?: true
  }

  export type AsesorMinAggregateInputType = {
    id_asesor?: true
    dni?: true
    nombres?: true
    apellido_paterno?: true
    apellido_materno?: true
    telefono?: true
    correo?: true
    distrito?: true
    estado?: true
    latitud?: true
    longitud?: true
    fecha_creacion?: true
    fecha_actualizar?: true
  }

  export type AsesorMaxAggregateInputType = {
    id_asesor?: true
    dni?: true
    nombres?: true
    apellido_paterno?: true
    apellido_materno?: true
    telefono?: true
    correo?: true
    distrito?: true
    estado?: true
    latitud?: true
    longitud?: true
    fecha_creacion?: true
    fecha_actualizar?: true
  }

  export type AsesorCountAggregateInputType = {
    id_asesor?: true
    dni?: true
    nombres?: true
    apellido_paterno?: true
    apellido_materno?: true
    telefono?: true
    correo?: true
    distrito?: true
    estado?: true
    latitud?: true
    longitud?: true
    fecha_creacion?: true
    fecha_actualizar?: true
    _all?: true
  }

  export type AsesorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Asesor to aggregate.
     */
    where?: AsesorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asesors to fetch.
     */
    orderBy?: AsesorOrderByWithRelationInput | AsesorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AsesorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Asesors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Asesors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Asesors
    **/
    _count?: true | AsesorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AsesorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AsesorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AsesorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AsesorMaxAggregateInputType
  }

  export type GetAsesorAggregateType<T extends AsesorAggregateArgs> = {
        [P in keyof T & keyof AggregateAsesor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsesor[P]>
      : GetScalarType<T[P], AggregateAsesor[P]>
  }




  export type AsesorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsesorWhereInput
    orderBy?: AsesorOrderByWithAggregationInput | AsesorOrderByWithAggregationInput[]
    by: AsesorScalarFieldEnum[] | AsesorScalarFieldEnum
    having?: AsesorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AsesorCountAggregateInputType | true
    _avg?: AsesorAvgAggregateInputType
    _sum?: AsesorSumAggregateInputType
    _min?: AsesorMinAggregateInputType
    _max?: AsesorMaxAggregateInputType
  }

  export type AsesorGroupByOutputType = {
    id_asesor: number
    dni: string
    nombres: string
    apellido_paterno: string
    apellido_materno: string
    telefono: string | null
    correo: string | null
    distrito: string | null
    estado: string
    latitud: Decimal | null
    longitud: Decimal | null
    fecha_creacion: Date
    fecha_actualizar: Date
    _count: AsesorCountAggregateOutputType | null
    _avg: AsesorAvgAggregateOutputType | null
    _sum: AsesorSumAggregateOutputType | null
    _min: AsesorMinAggregateOutputType | null
    _max: AsesorMaxAggregateOutputType | null
  }

  type GetAsesorGroupByPayload<T extends AsesorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AsesorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AsesorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AsesorGroupByOutputType[P]>
            : GetScalarType<T[P], AsesorGroupByOutputType[P]>
        }
      >
    >


  export type AsesorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_asesor?: boolean
    dni?: boolean
    nombres?: boolean
    apellido_paterno?: boolean
    apellido_materno?: boolean
    telefono?: boolean
    correo?: boolean
    distrito?: boolean
    estado?: boolean
    latitud?: boolean
    longitud?: boolean
    fecha_creacion?: boolean
    fecha_actualizar?: boolean
    asignaciones?: boolean | Asesor$asignacionesArgs<ExtArgs>
    rutas?: boolean | Asesor$rutasArgs<ExtArgs>
    visitas?: boolean | Asesor$visitasArgs<ExtArgs>
    usuario?: boolean | Asesor$usuarioArgs<ExtArgs>
    _count?: boolean | AsesorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asesor"]>

  export type AsesorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_asesor?: boolean
    dni?: boolean
    nombres?: boolean
    apellido_paterno?: boolean
    apellido_materno?: boolean
    telefono?: boolean
    correo?: boolean
    distrito?: boolean
    estado?: boolean
    latitud?: boolean
    longitud?: boolean
    fecha_creacion?: boolean
    fecha_actualizar?: boolean
  }, ExtArgs["result"]["asesor"]>

  export type AsesorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_asesor?: boolean
    dni?: boolean
    nombres?: boolean
    apellido_paterno?: boolean
    apellido_materno?: boolean
    telefono?: boolean
    correo?: boolean
    distrito?: boolean
    estado?: boolean
    latitud?: boolean
    longitud?: boolean
    fecha_creacion?: boolean
    fecha_actualizar?: boolean
  }, ExtArgs["result"]["asesor"]>

  export type AsesorSelectScalar = {
    id_asesor?: boolean
    dni?: boolean
    nombres?: boolean
    apellido_paterno?: boolean
    apellido_materno?: boolean
    telefono?: boolean
    correo?: boolean
    distrito?: boolean
    estado?: boolean
    latitud?: boolean
    longitud?: boolean
    fecha_creacion?: boolean
    fecha_actualizar?: boolean
  }

  export type AsesorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_asesor" | "dni" | "nombres" | "apellido_paterno" | "apellido_materno" | "telefono" | "correo" | "distrito" | "estado" | "latitud" | "longitud" | "fecha_creacion" | "fecha_actualizar", ExtArgs["result"]["asesor"]>
  export type AsesorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asignaciones?: boolean | Asesor$asignacionesArgs<ExtArgs>
    rutas?: boolean | Asesor$rutasArgs<ExtArgs>
    visitas?: boolean | Asesor$visitasArgs<ExtArgs>
    usuario?: boolean | Asesor$usuarioArgs<ExtArgs>
    _count?: boolean | AsesorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AsesorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AsesorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AsesorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Asesor"
    objects: {
      asignaciones: Prisma.$AsignacionClientePayload<ExtArgs>[]
      rutas: Prisma.$RutaPayload<ExtArgs>[]
      visitas: Prisma.$VisitaPayload<ExtArgs>[]
      usuario: Prisma.$UsuarioPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_asesor: number
      dni: string
      nombres: string
      apellido_paterno: string
      apellido_materno: string
      telefono: string | null
      correo: string | null
      distrito: string | null
      estado: string
      latitud: Prisma.Decimal | null
      longitud: Prisma.Decimal | null
      fecha_creacion: Date
      fecha_actualizar: Date
    }, ExtArgs["result"]["asesor"]>
    composites: {}
  }

  type AsesorGetPayload<S extends boolean | null | undefined | AsesorDefaultArgs> = $Result.GetResult<Prisma.$AsesorPayload, S>

  type AsesorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AsesorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AsesorCountAggregateInputType | true
    }

  export interface AsesorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Asesor'], meta: { name: 'Asesor' } }
    /**
     * Find zero or one Asesor that matches the filter.
     * @param {AsesorFindUniqueArgs} args - Arguments to find a Asesor
     * @example
     * // Get one Asesor
     * const asesor = await prisma.asesor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AsesorFindUniqueArgs>(args: SelectSubset<T, AsesorFindUniqueArgs<ExtArgs>>): Prisma__AsesorClient<$Result.GetResult<Prisma.$AsesorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Asesor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AsesorFindUniqueOrThrowArgs} args - Arguments to find a Asesor
     * @example
     * // Get one Asesor
     * const asesor = await prisma.asesor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AsesorFindUniqueOrThrowArgs>(args: SelectSubset<T, AsesorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AsesorClient<$Result.GetResult<Prisma.$AsesorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Asesor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsesorFindFirstArgs} args - Arguments to find a Asesor
     * @example
     * // Get one Asesor
     * const asesor = await prisma.asesor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AsesorFindFirstArgs>(args?: SelectSubset<T, AsesorFindFirstArgs<ExtArgs>>): Prisma__AsesorClient<$Result.GetResult<Prisma.$AsesorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Asesor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsesorFindFirstOrThrowArgs} args - Arguments to find a Asesor
     * @example
     * // Get one Asesor
     * const asesor = await prisma.asesor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AsesorFindFirstOrThrowArgs>(args?: SelectSubset<T, AsesorFindFirstOrThrowArgs<ExtArgs>>): Prisma__AsesorClient<$Result.GetResult<Prisma.$AsesorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Asesors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsesorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Asesors
     * const asesors = await prisma.asesor.findMany()
     * 
     * // Get first 10 Asesors
     * const asesors = await prisma.asesor.findMany({ take: 10 })
     * 
     * // Only select the `id_asesor`
     * const asesorWithId_asesorOnly = await prisma.asesor.findMany({ select: { id_asesor: true } })
     * 
     */
    findMany<T extends AsesorFindManyArgs>(args?: SelectSubset<T, AsesorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsesorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Asesor.
     * @param {AsesorCreateArgs} args - Arguments to create a Asesor.
     * @example
     * // Create one Asesor
     * const Asesor = await prisma.asesor.create({
     *   data: {
     *     // ... data to create a Asesor
     *   }
     * })
     * 
     */
    create<T extends AsesorCreateArgs>(args: SelectSubset<T, AsesorCreateArgs<ExtArgs>>): Prisma__AsesorClient<$Result.GetResult<Prisma.$AsesorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Asesors.
     * @param {AsesorCreateManyArgs} args - Arguments to create many Asesors.
     * @example
     * // Create many Asesors
     * const asesor = await prisma.asesor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AsesorCreateManyArgs>(args?: SelectSubset<T, AsesorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Asesors and returns the data saved in the database.
     * @param {AsesorCreateManyAndReturnArgs} args - Arguments to create many Asesors.
     * @example
     * // Create many Asesors
     * const asesor = await prisma.asesor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Asesors and only return the `id_asesor`
     * const asesorWithId_asesorOnly = await prisma.asesor.createManyAndReturn({
     *   select: { id_asesor: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AsesorCreateManyAndReturnArgs>(args?: SelectSubset<T, AsesorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsesorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Asesor.
     * @param {AsesorDeleteArgs} args - Arguments to delete one Asesor.
     * @example
     * // Delete one Asesor
     * const Asesor = await prisma.asesor.delete({
     *   where: {
     *     // ... filter to delete one Asesor
     *   }
     * })
     * 
     */
    delete<T extends AsesorDeleteArgs>(args: SelectSubset<T, AsesorDeleteArgs<ExtArgs>>): Prisma__AsesorClient<$Result.GetResult<Prisma.$AsesorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Asesor.
     * @param {AsesorUpdateArgs} args - Arguments to update one Asesor.
     * @example
     * // Update one Asesor
     * const asesor = await prisma.asesor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AsesorUpdateArgs>(args: SelectSubset<T, AsesorUpdateArgs<ExtArgs>>): Prisma__AsesorClient<$Result.GetResult<Prisma.$AsesorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Asesors.
     * @param {AsesorDeleteManyArgs} args - Arguments to filter Asesors to delete.
     * @example
     * // Delete a few Asesors
     * const { count } = await prisma.asesor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AsesorDeleteManyArgs>(args?: SelectSubset<T, AsesorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Asesors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsesorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Asesors
     * const asesor = await prisma.asesor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AsesorUpdateManyArgs>(args: SelectSubset<T, AsesorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Asesors and returns the data updated in the database.
     * @param {AsesorUpdateManyAndReturnArgs} args - Arguments to update many Asesors.
     * @example
     * // Update many Asesors
     * const asesor = await prisma.asesor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Asesors and only return the `id_asesor`
     * const asesorWithId_asesorOnly = await prisma.asesor.updateManyAndReturn({
     *   select: { id_asesor: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AsesorUpdateManyAndReturnArgs>(args: SelectSubset<T, AsesorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsesorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Asesor.
     * @param {AsesorUpsertArgs} args - Arguments to update or create a Asesor.
     * @example
     * // Update or create a Asesor
     * const asesor = await prisma.asesor.upsert({
     *   create: {
     *     // ... data to create a Asesor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Asesor we want to update
     *   }
     * })
     */
    upsert<T extends AsesorUpsertArgs>(args: SelectSubset<T, AsesorUpsertArgs<ExtArgs>>): Prisma__AsesorClient<$Result.GetResult<Prisma.$AsesorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Asesors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsesorCountArgs} args - Arguments to filter Asesors to count.
     * @example
     * // Count the number of Asesors
     * const count = await prisma.asesor.count({
     *   where: {
     *     // ... the filter for the Asesors we want to count
     *   }
     * })
    **/
    count<T extends AsesorCountArgs>(
      args?: Subset<T, AsesorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AsesorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Asesor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsesorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AsesorAggregateArgs>(args: Subset<T, AsesorAggregateArgs>): Prisma.PrismaPromise<GetAsesorAggregateType<T>>

    /**
     * Group by Asesor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsesorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AsesorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AsesorGroupByArgs['orderBy'] }
        : { orderBy?: AsesorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AsesorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAsesorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Asesor model
   */
  readonly fields: AsesorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Asesor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AsesorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    asignaciones<T extends Asesor$asignacionesArgs<ExtArgs> = {}>(args?: Subset<T, Asesor$asignacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsignacionClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rutas<T extends Asesor$rutasArgs<ExtArgs> = {}>(args?: Subset<T, Asesor$rutasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    visitas<T extends Asesor$visitasArgs<ExtArgs> = {}>(args?: Subset<T, Asesor$visitasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuario<T extends Asesor$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, Asesor$usuarioArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Asesor model
   */
  interface AsesorFieldRefs {
    readonly id_asesor: FieldRef<"Asesor", 'Int'>
    readonly dni: FieldRef<"Asesor", 'String'>
    readonly nombres: FieldRef<"Asesor", 'String'>
    readonly apellido_paterno: FieldRef<"Asesor", 'String'>
    readonly apellido_materno: FieldRef<"Asesor", 'String'>
    readonly telefono: FieldRef<"Asesor", 'String'>
    readonly correo: FieldRef<"Asesor", 'String'>
    readonly distrito: FieldRef<"Asesor", 'String'>
    readonly estado: FieldRef<"Asesor", 'String'>
    readonly latitud: FieldRef<"Asesor", 'Decimal'>
    readonly longitud: FieldRef<"Asesor", 'Decimal'>
    readonly fecha_creacion: FieldRef<"Asesor", 'DateTime'>
    readonly fecha_actualizar: FieldRef<"Asesor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Asesor findUnique
   */
  export type AsesorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asesor
     */
    select?: AsesorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asesor
     */
    omit?: AsesorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsesorInclude<ExtArgs> | null
    /**
     * Filter, which Asesor to fetch.
     */
    where: AsesorWhereUniqueInput
  }

  /**
   * Asesor findUniqueOrThrow
   */
  export type AsesorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asesor
     */
    select?: AsesorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asesor
     */
    omit?: AsesorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsesorInclude<ExtArgs> | null
    /**
     * Filter, which Asesor to fetch.
     */
    where: AsesorWhereUniqueInput
  }

  /**
   * Asesor findFirst
   */
  export type AsesorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asesor
     */
    select?: AsesorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asesor
     */
    omit?: AsesorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsesorInclude<ExtArgs> | null
    /**
     * Filter, which Asesor to fetch.
     */
    where?: AsesorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asesors to fetch.
     */
    orderBy?: AsesorOrderByWithRelationInput | AsesorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Asesors.
     */
    cursor?: AsesorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Asesors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Asesors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Asesors.
     */
    distinct?: AsesorScalarFieldEnum | AsesorScalarFieldEnum[]
  }

  /**
   * Asesor findFirstOrThrow
   */
  export type AsesorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asesor
     */
    select?: AsesorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asesor
     */
    omit?: AsesorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsesorInclude<ExtArgs> | null
    /**
     * Filter, which Asesor to fetch.
     */
    where?: AsesorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asesors to fetch.
     */
    orderBy?: AsesorOrderByWithRelationInput | AsesorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Asesors.
     */
    cursor?: AsesorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Asesors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Asesors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Asesors.
     */
    distinct?: AsesorScalarFieldEnum | AsesorScalarFieldEnum[]
  }

  /**
   * Asesor findMany
   */
  export type AsesorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asesor
     */
    select?: AsesorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asesor
     */
    omit?: AsesorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsesorInclude<ExtArgs> | null
    /**
     * Filter, which Asesors to fetch.
     */
    where?: AsesorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asesors to fetch.
     */
    orderBy?: AsesorOrderByWithRelationInput | AsesorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Asesors.
     */
    cursor?: AsesorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Asesors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Asesors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Asesors.
     */
    distinct?: AsesorScalarFieldEnum | AsesorScalarFieldEnum[]
  }

  /**
   * Asesor create
   */
  export type AsesorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asesor
     */
    select?: AsesorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asesor
     */
    omit?: AsesorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsesorInclude<ExtArgs> | null
    /**
     * The data needed to create a Asesor.
     */
    data: XOR<AsesorCreateInput, AsesorUncheckedCreateInput>
  }

  /**
   * Asesor createMany
   */
  export type AsesorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Asesors.
     */
    data: AsesorCreateManyInput | AsesorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Asesor createManyAndReturn
   */
  export type AsesorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asesor
     */
    select?: AsesorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Asesor
     */
    omit?: AsesorOmit<ExtArgs> | null
    /**
     * The data used to create many Asesors.
     */
    data: AsesorCreateManyInput | AsesorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Asesor update
   */
  export type AsesorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asesor
     */
    select?: AsesorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asesor
     */
    omit?: AsesorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsesorInclude<ExtArgs> | null
    /**
     * The data needed to update a Asesor.
     */
    data: XOR<AsesorUpdateInput, AsesorUncheckedUpdateInput>
    /**
     * Choose, which Asesor to update.
     */
    where: AsesorWhereUniqueInput
  }

  /**
   * Asesor updateMany
   */
  export type AsesorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Asesors.
     */
    data: XOR<AsesorUpdateManyMutationInput, AsesorUncheckedUpdateManyInput>
    /**
     * Filter which Asesors to update
     */
    where?: AsesorWhereInput
    /**
     * Limit how many Asesors to update.
     */
    limit?: number
  }

  /**
   * Asesor updateManyAndReturn
   */
  export type AsesorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asesor
     */
    select?: AsesorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Asesor
     */
    omit?: AsesorOmit<ExtArgs> | null
    /**
     * The data used to update Asesors.
     */
    data: XOR<AsesorUpdateManyMutationInput, AsesorUncheckedUpdateManyInput>
    /**
     * Filter which Asesors to update
     */
    where?: AsesorWhereInput
    /**
     * Limit how many Asesors to update.
     */
    limit?: number
  }

  /**
   * Asesor upsert
   */
  export type AsesorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asesor
     */
    select?: AsesorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asesor
     */
    omit?: AsesorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsesorInclude<ExtArgs> | null
    /**
     * The filter to search for the Asesor to update in case it exists.
     */
    where: AsesorWhereUniqueInput
    /**
     * In case the Asesor found by the `where` argument doesn't exist, create a new Asesor with this data.
     */
    create: XOR<AsesorCreateInput, AsesorUncheckedCreateInput>
    /**
     * In case the Asesor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AsesorUpdateInput, AsesorUncheckedUpdateInput>
  }

  /**
   * Asesor delete
   */
  export type AsesorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asesor
     */
    select?: AsesorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asesor
     */
    omit?: AsesorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsesorInclude<ExtArgs> | null
    /**
     * Filter which Asesor to delete.
     */
    where: AsesorWhereUniqueInput
  }

  /**
   * Asesor deleteMany
   */
  export type AsesorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Asesors to delete
     */
    where?: AsesorWhereInput
    /**
     * Limit how many Asesors to delete.
     */
    limit?: number
  }

  /**
   * Asesor.asignaciones
   */
  export type Asesor$asignacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsignacionCliente
     */
    select?: AsignacionClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsignacionCliente
     */
    omit?: AsignacionClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignacionClienteInclude<ExtArgs> | null
    where?: AsignacionClienteWhereInput
    orderBy?: AsignacionClienteOrderByWithRelationInput | AsignacionClienteOrderByWithRelationInput[]
    cursor?: AsignacionClienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AsignacionClienteScalarFieldEnum | AsignacionClienteScalarFieldEnum[]
  }

  /**
   * Asesor.rutas
   */
  export type Asesor$rutasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruta
     */
    select?: RutaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruta
     */
    omit?: RutaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutaInclude<ExtArgs> | null
    where?: RutaWhereInput
    orderBy?: RutaOrderByWithRelationInput | RutaOrderByWithRelationInput[]
    cursor?: RutaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RutaScalarFieldEnum | RutaScalarFieldEnum[]
  }

  /**
   * Asesor.visitas
   */
  export type Asesor$visitasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visita
     */
    select?: VisitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visita
     */
    omit?: VisitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitaInclude<ExtArgs> | null
    where?: VisitaWhereInput
    orderBy?: VisitaOrderByWithRelationInput | VisitaOrderByWithRelationInput[]
    cursor?: VisitaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VisitaScalarFieldEnum | VisitaScalarFieldEnum[]
  }

  /**
   * Asesor.usuario
   */
  export type Asesor$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
  }

  /**
   * Asesor without action
   */
  export type AsesorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asesor
     */
    select?: AsesorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asesor
     */
    omit?: AsesorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsesorInclude<ExtArgs> | null
  }


  /**
   * Model AsignacionCliente
   */

  export type AggregateAsignacionCliente = {
    _count: AsignacionClienteCountAggregateOutputType | null
    _avg: AsignacionClienteAvgAggregateOutputType | null
    _sum: AsignacionClienteSumAggregateOutputType | null
    _min: AsignacionClienteMinAggregateOutputType | null
    _max: AsignacionClienteMaxAggregateOutputType | null
  }

  export type AsignacionClienteAvgAggregateOutputType = {
    id_asignacion: number | null
    id_cliente: number | null
    id_asesor: number | null
  }

  export type AsignacionClienteSumAggregateOutputType = {
    id_asignacion: number | null
    id_cliente: number | null
    id_asesor: number | null
  }

  export type AsignacionClienteMinAggregateOutputType = {
    id_asignacion: number | null
    id_cliente: number | null
    id_asesor: number | null
    fecha_asignacion: Date | null
    fecha_fin: Date | null
    estado: string | null
  }

  export type AsignacionClienteMaxAggregateOutputType = {
    id_asignacion: number | null
    id_cliente: number | null
    id_asesor: number | null
    fecha_asignacion: Date | null
    fecha_fin: Date | null
    estado: string | null
  }

  export type AsignacionClienteCountAggregateOutputType = {
    id_asignacion: number
    id_cliente: number
    id_asesor: number
    fecha_asignacion: number
    fecha_fin: number
    estado: number
    _all: number
  }


  export type AsignacionClienteAvgAggregateInputType = {
    id_asignacion?: true
    id_cliente?: true
    id_asesor?: true
  }

  export type AsignacionClienteSumAggregateInputType = {
    id_asignacion?: true
    id_cliente?: true
    id_asesor?: true
  }

  export type AsignacionClienteMinAggregateInputType = {
    id_asignacion?: true
    id_cliente?: true
    id_asesor?: true
    fecha_asignacion?: true
    fecha_fin?: true
    estado?: true
  }

  export type AsignacionClienteMaxAggregateInputType = {
    id_asignacion?: true
    id_cliente?: true
    id_asesor?: true
    fecha_asignacion?: true
    fecha_fin?: true
    estado?: true
  }

  export type AsignacionClienteCountAggregateInputType = {
    id_asignacion?: true
    id_cliente?: true
    id_asesor?: true
    fecha_asignacion?: true
    fecha_fin?: true
    estado?: true
    _all?: true
  }

  export type AsignacionClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AsignacionCliente to aggregate.
     */
    where?: AsignacionClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AsignacionClientes to fetch.
     */
    orderBy?: AsignacionClienteOrderByWithRelationInput | AsignacionClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AsignacionClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AsignacionClientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AsignacionClientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AsignacionClientes
    **/
    _count?: true | AsignacionClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AsignacionClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AsignacionClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AsignacionClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AsignacionClienteMaxAggregateInputType
  }

  export type GetAsignacionClienteAggregateType<T extends AsignacionClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateAsignacionCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsignacionCliente[P]>
      : GetScalarType<T[P], AggregateAsignacionCliente[P]>
  }




  export type AsignacionClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsignacionClienteWhereInput
    orderBy?: AsignacionClienteOrderByWithAggregationInput | AsignacionClienteOrderByWithAggregationInput[]
    by: AsignacionClienteScalarFieldEnum[] | AsignacionClienteScalarFieldEnum
    having?: AsignacionClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AsignacionClienteCountAggregateInputType | true
    _avg?: AsignacionClienteAvgAggregateInputType
    _sum?: AsignacionClienteSumAggregateInputType
    _min?: AsignacionClienteMinAggregateInputType
    _max?: AsignacionClienteMaxAggregateInputType
  }

  export type AsignacionClienteGroupByOutputType = {
    id_asignacion: number
    id_cliente: number
    id_asesor: number
    fecha_asignacion: Date
    fecha_fin: Date | null
    estado: string
    _count: AsignacionClienteCountAggregateOutputType | null
    _avg: AsignacionClienteAvgAggregateOutputType | null
    _sum: AsignacionClienteSumAggregateOutputType | null
    _min: AsignacionClienteMinAggregateOutputType | null
    _max: AsignacionClienteMaxAggregateOutputType | null
  }

  type GetAsignacionClienteGroupByPayload<T extends AsignacionClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AsignacionClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AsignacionClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AsignacionClienteGroupByOutputType[P]>
            : GetScalarType<T[P], AsignacionClienteGroupByOutputType[P]>
        }
      >
    >


  export type AsignacionClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_asignacion?: boolean
    id_cliente?: boolean
    id_asesor?: boolean
    fecha_asignacion?: boolean
    fecha_fin?: boolean
    estado?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    asesor?: boolean | AsesorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asignacionCliente"]>

  export type AsignacionClienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_asignacion?: boolean
    id_cliente?: boolean
    id_asesor?: boolean
    fecha_asignacion?: boolean
    fecha_fin?: boolean
    estado?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    asesor?: boolean | AsesorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asignacionCliente"]>

  export type AsignacionClienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_asignacion?: boolean
    id_cliente?: boolean
    id_asesor?: boolean
    fecha_asignacion?: boolean
    fecha_fin?: boolean
    estado?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    asesor?: boolean | AsesorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asignacionCliente"]>

  export type AsignacionClienteSelectScalar = {
    id_asignacion?: boolean
    id_cliente?: boolean
    id_asesor?: boolean
    fecha_asignacion?: boolean
    fecha_fin?: boolean
    estado?: boolean
  }

  export type AsignacionClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_asignacion" | "id_cliente" | "id_asesor" | "fecha_asignacion" | "fecha_fin" | "estado", ExtArgs["result"]["asignacionCliente"]>
  export type AsignacionClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    asesor?: boolean | AsesorDefaultArgs<ExtArgs>
  }
  export type AsignacionClienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    asesor?: boolean | AsesorDefaultArgs<ExtArgs>
  }
  export type AsignacionClienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    asesor?: boolean | AsesorDefaultArgs<ExtArgs>
  }

  export type $AsignacionClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AsignacionCliente"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>
      asesor: Prisma.$AsesorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_asignacion: number
      id_cliente: number
      id_asesor: number
      fecha_asignacion: Date
      fecha_fin: Date | null
      estado: string
    }, ExtArgs["result"]["asignacionCliente"]>
    composites: {}
  }

  type AsignacionClienteGetPayload<S extends boolean | null | undefined | AsignacionClienteDefaultArgs> = $Result.GetResult<Prisma.$AsignacionClientePayload, S>

  type AsignacionClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AsignacionClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AsignacionClienteCountAggregateInputType | true
    }

  export interface AsignacionClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AsignacionCliente'], meta: { name: 'AsignacionCliente' } }
    /**
     * Find zero or one AsignacionCliente that matches the filter.
     * @param {AsignacionClienteFindUniqueArgs} args - Arguments to find a AsignacionCliente
     * @example
     * // Get one AsignacionCliente
     * const asignacionCliente = await prisma.asignacionCliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AsignacionClienteFindUniqueArgs>(args: SelectSubset<T, AsignacionClienteFindUniqueArgs<ExtArgs>>): Prisma__AsignacionClienteClient<$Result.GetResult<Prisma.$AsignacionClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AsignacionCliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AsignacionClienteFindUniqueOrThrowArgs} args - Arguments to find a AsignacionCliente
     * @example
     * // Get one AsignacionCliente
     * const asignacionCliente = await prisma.asignacionCliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AsignacionClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, AsignacionClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AsignacionClienteClient<$Result.GetResult<Prisma.$AsignacionClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AsignacionCliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsignacionClienteFindFirstArgs} args - Arguments to find a AsignacionCliente
     * @example
     * // Get one AsignacionCliente
     * const asignacionCliente = await prisma.asignacionCliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AsignacionClienteFindFirstArgs>(args?: SelectSubset<T, AsignacionClienteFindFirstArgs<ExtArgs>>): Prisma__AsignacionClienteClient<$Result.GetResult<Prisma.$AsignacionClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AsignacionCliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsignacionClienteFindFirstOrThrowArgs} args - Arguments to find a AsignacionCliente
     * @example
     * // Get one AsignacionCliente
     * const asignacionCliente = await prisma.asignacionCliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AsignacionClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, AsignacionClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__AsignacionClienteClient<$Result.GetResult<Prisma.$AsignacionClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AsignacionClientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsignacionClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AsignacionClientes
     * const asignacionClientes = await prisma.asignacionCliente.findMany()
     * 
     * // Get first 10 AsignacionClientes
     * const asignacionClientes = await prisma.asignacionCliente.findMany({ take: 10 })
     * 
     * // Only select the `id_asignacion`
     * const asignacionClienteWithId_asignacionOnly = await prisma.asignacionCliente.findMany({ select: { id_asignacion: true } })
     * 
     */
    findMany<T extends AsignacionClienteFindManyArgs>(args?: SelectSubset<T, AsignacionClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsignacionClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AsignacionCliente.
     * @param {AsignacionClienteCreateArgs} args - Arguments to create a AsignacionCliente.
     * @example
     * // Create one AsignacionCliente
     * const AsignacionCliente = await prisma.asignacionCliente.create({
     *   data: {
     *     // ... data to create a AsignacionCliente
     *   }
     * })
     * 
     */
    create<T extends AsignacionClienteCreateArgs>(args: SelectSubset<T, AsignacionClienteCreateArgs<ExtArgs>>): Prisma__AsignacionClienteClient<$Result.GetResult<Prisma.$AsignacionClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AsignacionClientes.
     * @param {AsignacionClienteCreateManyArgs} args - Arguments to create many AsignacionClientes.
     * @example
     * // Create many AsignacionClientes
     * const asignacionCliente = await prisma.asignacionCliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AsignacionClienteCreateManyArgs>(args?: SelectSubset<T, AsignacionClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AsignacionClientes and returns the data saved in the database.
     * @param {AsignacionClienteCreateManyAndReturnArgs} args - Arguments to create many AsignacionClientes.
     * @example
     * // Create many AsignacionClientes
     * const asignacionCliente = await prisma.asignacionCliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AsignacionClientes and only return the `id_asignacion`
     * const asignacionClienteWithId_asignacionOnly = await prisma.asignacionCliente.createManyAndReturn({
     *   select: { id_asignacion: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AsignacionClienteCreateManyAndReturnArgs>(args?: SelectSubset<T, AsignacionClienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsignacionClientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AsignacionCliente.
     * @param {AsignacionClienteDeleteArgs} args - Arguments to delete one AsignacionCliente.
     * @example
     * // Delete one AsignacionCliente
     * const AsignacionCliente = await prisma.asignacionCliente.delete({
     *   where: {
     *     // ... filter to delete one AsignacionCliente
     *   }
     * })
     * 
     */
    delete<T extends AsignacionClienteDeleteArgs>(args: SelectSubset<T, AsignacionClienteDeleteArgs<ExtArgs>>): Prisma__AsignacionClienteClient<$Result.GetResult<Prisma.$AsignacionClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AsignacionCliente.
     * @param {AsignacionClienteUpdateArgs} args - Arguments to update one AsignacionCliente.
     * @example
     * // Update one AsignacionCliente
     * const asignacionCliente = await prisma.asignacionCliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AsignacionClienteUpdateArgs>(args: SelectSubset<T, AsignacionClienteUpdateArgs<ExtArgs>>): Prisma__AsignacionClienteClient<$Result.GetResult<Prisma.$AsignacionClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AsignacionClientes.
     * @param {AsignacionClienteDeleteManyArgs} args - Arguments to filter AsignacionClientes to delete.
     * @example
     * // Delete a few AsignacionClientes
     * const { count } = await prisma.asignacionCliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AsignacionClienteDeleteManyArgs>(args?: SelectSubset<T, AsignacionClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AsignacionClientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsignacionClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AsignacionClientes
     * const asignacionCliente = await prisma.asignacionCliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AsignacionClienteUpdateManyArgs>(args: SelectSubset<T, AsignacionClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AsignacionClientes and returns the data updated in the database.
     * @param {AsignacionClienteUpdateManyAndReturnArgs} args - Arguments to update many AsignacionClientes.
     * @example
     * // Update many AsignacionClientes
     * const asignacionCliente = await prisma.asignacionCliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AsignacionClientes and only return the `id_asignacion`
     * const asignacionClienteWithId_asignacionOnly = await prisma.asignacionCliente.updateManyAndReturn({
     *   select: { id_asignacion: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AsignacionClienteUpdateManyAndReturnArgs>(args: SelectSubset<T, AsignacionClienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsignacionClientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AsignacionCliente.
     * @param {AsignacionClienteUpsertArgs} args - Arguments to update or create a AsignacionCliente.
     * @example
     * // Update or create a AsignacionCliente
     * const asignacionCliente = await prisma.asignacionCliente.upsert({
     *   create: {
     *     // ... data to create a AsignacionCliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AsignacionCliente we want to update
     *   }
     * })
     */
    upsert<T extends AsignacionClienteUpsertArgs>(args: SelectSubset<T, AsignacionClienteUpsertArgs<ExtArgs>>): Prisma__AsignacionClienteClient<$Result.GetResult<Prisma.$AsignacionClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AsignacionClientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsignacionClienteCountArgs} args - Arguments to filter AsignacionClientes to count.
     * @example
     * // Count the number of AsignacionClientes
     * const count = await prisma.asignacionCliente.count({
     *   where: {
     *     // ... the filter for the AsignacionClientes we want to count
     *   }
     * })
    **/
    count<T extends AsignacionClienteCountArgs>(
      args?: Subset<T, AsignacionClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AsignacionClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AsignacionCliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsignacionClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AsignacionClienteAggregateArgs>(args: Subset<T, AsignacionClienteAggregateArgs>): Prisma.PrismaPromise<GetAsignacionClienteAggregateType<T>>

    /**
     * Group by AsignacionCliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsignacionClienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AsignacionClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AsignacionClienteGroupByArgs['orderBy'] }
        : { orderBy?: AsignacionClienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AsignacionClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAsignacionClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AsignacionCliente model
   */
  readonly fields: AsignacionClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AsignacionCliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AsignacionClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    asesor<T extends AsesorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AsesorDefaultArgs<ExtArgs>>): Prisma__AsesorClient<$Result.GetResult<Prisma.$AsesorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AsignacionCliente model
   */
  interface AsignacionClienteFieldRefs {
    readonly id_asignacion: FieldRef<"AsignacionCliente", 'Int'>
    readonly id_cliente: FieldRef<"AsignacionCliente", 'Int'>
    readonly id_asesor: FieldRef<"AsignacionCliente", 'Int'>
    readonly fecha_asignacion: FieldRef<"AsignacionCliente", 'DateTime'>
    readonly fecha_fin: FieldRef<"AsignacionCliente", 'DateTime'>
    readonly estado: FieldRef<"AsignacionCliente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AsignacionCliente findUnique
   */
  export type AsignacionClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsignacionCliente
     */
    select?: AsignacionClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsignacionCliente
     */
    omit?: AsignacionClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignacionClienteInclude<ExtArgs> | null
    /**
     * Filter, which AsignacionCliente to fetch.
     */
    where: AsignacionClienteWhereUniqueInput
  }

  /**
   * AsignacionCliente findUniqueOrThrow
   */
  export type AsignacionClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsignacionCliente
     */
    select?: AsignacionClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsignacionCliente
     */
    omit?: AsignacionClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignacionClienteInclude<ExtArgs> | null
    /**
     * Filter, which AsignacionCliente to fetch.
     */
    where: AsignacionClienteWhereUniqueInput
  }

  /**
   * AsignacionCliente findFirst
   */
  export type AsignacionClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsignacionCliente
     */
    select?: AsignacionClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsignacionCliente
     */
    omit?: AsignacionClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignacionClienteInclude<ExtArgs> | null
    /**
     * Filter, which AsignacionCliente to fetch.
     */
    where?: AsignacionClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AsignacionClientes to fetch.
     */
    orderBy?: AsignacionClienteOrderByWithRelationInput | AsignacionClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AsignacionClientes.
     */
    cursor?: AsignacionClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AsignacionClientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AsignacionClientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AsignacionClientes.
     */
    distinct?: AsignacionClienteScalarFieldEnum | AsignacionClienteScalarFieldEnum[]
  }

  /**
   * AsignacionCliente findFirstOrThrow
   */
  export type AsignacionClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsignacionCliente
     */
    select?: AsignacionClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsignacionCliente
     */
    omit?: AsignacionClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignacionClienteInclude<ExtArgs> | null
    /**
     * Filter, which AsignacionCliente to fetch.
     */
    where?: AsignacionClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AsignacionClientes to fetch.
     */
    orderBy?: AsignacionClienteOrderByWithRelationInput | AsignacionClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AsignacionClientes.
     */
    cursor?: AsignacionClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AsignacionClientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AsignacionClientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AsignacionClientes.
     */
    distinct?: AsignacionClienteScalarFieldEnum | AsignacionClienteScalarFieldEnum[]
  }

  /**
   * AsignacionCliente findMany
   */
  export type AsignacionClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsignacionCliente
     */
    select?: AsignacionClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsignacionCliente
     */
    omit?: AsignacionClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignacionClienteInclude<ExtArgs> | null
    /**
     * Filter, which AsignacionClientes to fetch.
     */
    where?: AsignacionClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AsignacionClientes to fetch.
     */
    orderBy?: AsignacionClienteOrderByWithRelationInput | AsignacionClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AsignacionClientes.
     */
    cursor?: AsignacionClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AsignacionClientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AsignacionClientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AsignacionClientes.
     */
    distinct?: AsignacionClienteScalarFieldEnum | AsignacionClienteScalarFieldEnum[]
  }

  /**
   * AsignacionCliente create
   */
  export type AsignacionClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsignacionCliente
     */
    select?: AsignacionClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsignacionCliente
     */
    omit?: AsignacionClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignacionClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a AsignacionCliente.
     */
    data: XOR<AsignacionClienteCreateInput, AsignacionClienteUncheckedCreateInput>
  }

  /**
   * AsignacionCliente createMany
   */
  export type AsignacionClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AsignacionClientes.
     */
    data: AsignacionClienteCreateManyInput | AsignacionClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AsignacionCliente createManyAndReturn
   */
  export type AsignacionClienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsignacionCliente
     */
    select?: AsignacionClienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AsignacionCliente
     */
    omit?: AsignacionClienteOmit<ExtArgs> | null
    /**
     * The data used to create many AsignacionClientes.
     */
    data: AsignacionClienteCreateManyInput | AsignacionClienteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignacionClienteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AsignacionCliente update
   */
  export type AsignacionClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsignacionCliente
     */
    select?: AsignacionClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsignacionCliente
     */
    omit?: AsignacionClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignacionClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a AsignacionCliente.
     */
    data: XOR<AsignacionClienteUpdateInput, AsignacionClienteUncheckedUpdateInput>
    /**
     * Choose, which AsignacionCliente to update.
     */
    where: AsignacionClienteWhereUniqueInput
  }

  /**
   * AsignacionCliente updateMany
   */
  export type AsignacionClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AsignacionClientes.
     */
    data: XOR<AsignacionClienteUpdateManyMutationInput, AsignacionClienteUncheckedUpdateManyInput>
    /**
     * Filter which AsignacionClientes to update
     */
    where?: AsignacionClienteWhereInput
    /**
     * Limit how many AsignacionClientes to update.
     */
    limit?: number
  }

  /**
   * AsignacionCliente updateManyAndReturn
   */
  export type AsignacionClienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsignacionCliente
     */
    select?: AsignacionClienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AsignacionCliente
     */
    omit?: AsignacionClienteOmit<ExtArgs> | null
    /**
     * The data used to update AsignacionClientes.
     */
    data: XOR<AsignacionClienteUpdateManyMutationInput, AsignacionClienteUncheckedUpdateManyInput>
    /**
     * Filter which AsignacionClientes to update
     */
    where?: AsignacionClienteWhereInput
    /**
     * Limit how many AsignacionClientes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignacionClienteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AsignacionCliente upsert
   */
  export type AsignacionClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsignacionCliente
     */
    select?: AsignacionClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsignacionCliente
     */
    omit?: AsignacionClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignacionClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the AsignacionCliente to update in case it exists.
     */
    where: AsignacionClienteWhereUniqueInput
    /**
     * In case the AsignacionCliente found by the `where` argument doesn't exist, create a new AsignacionCliente with this data.
     */
    create: XOR<AsignacionClienteCreateInput, AsignacionClienteUncheckedCreateInput>
    /**
     * In case the AsignacionCliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AsignacionClienteUpdateInput, AsignacionClienteUncheckedUpdateInput>
  }

  /**
   * AsignacionCliente delete
   */
  export type AsignacionClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsignacionCliente
     */
    select?: AsignacionClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsignacionCliente
     */
    omit?: AsignacionClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignacionClienteInclude<ExtArgs> | null
    /**
     * Filter which AsignacionCliente to delete.
     */
    where: AsignacionClienteWhereUniqueInput
  }

  /**
   * AsignacionCliente deleteMany
   */
  export type AsignacionClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AsignacionClientes to delete
     */
    where?: AsignacionClienteWhereInput
    /**
     * Limit how many AsignacionClientes to delete.
     */
    limit?: number
  }

  /**
   * AsignacionCliente without action
   */
  export type AsignacionClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsignacionCliente
     */
    select?: AsignacionClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsignacionCliente
     */
    omit?: AsignacionClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignacionClienteInclude<ExtArgs> | null
  }


  /**
   * Model Ruta
   */

  export type AggregateRuta = {
    _count: RutaCountAggregateOutputType | null
    _avg: RutaAvgAggregateOutputType | null
    _sum: RutaSumAggregateOutputType | null
    _min: RutaMinAggregateOutputType | null
    _max: RutaMaxAggregateOutputType | null
  }

  export type RutaAvgAggregateOutputType = {
    id_ruta: number | null
    id_asesor: number | null
  }

  export type RutaSumAggregateOutputType = {
    id_ruta: number | null
    id_asesor: number | null
  }

  export type RutaMinAggregateOutputType = {
    id_ruta: number | null
    id_asesor: number | null
    fecha_programada: Date | null
    fecha_inicio_real: Date | null
    fecha_fin_real: Date | null
    estado: string | null
    fecha_creacion: Date | null
    fecha_actualizar: Date | null
  }

  export type RutaMaxAggregateOutputType = {
    id_ruta: number | null
    id_asesor: number | null
    fecha_programada: Date | null
    fecha_inicio_real: Date | null
    fecha_fin_real: Date | null
    estado: string | null
    fecha_creacion: Date | null
    fecha_actualizar: Date | null
  }

  export type RutaCountAggregateOutputType = {
    id_ruta: number
    id_asesor: number
    fecha_programada: number
    fecha_inicio_real: number
    fecha_fin_real: number
    estado: number
    fecha_creacion: number
    fecha_actualizar: number
    _all: number
  }


  export type RutaAvgAggregateInputType = {
    id_ruta?: true
    id_asesor?: true
  }

  export type RutaSumAggregateInputType = {
    id_ruta?: true
    id_asesor?: true
  }

  export type RutaMinAggregateInputType = {
    id_ruta?: true
    id_asesor?: true
    fecha_programada?: true
    fecha_inicio_real?: true
    fecha_fin_real?: true
    estado?: true
    fecha_creacion?: true
    fecha_actualizar?: true
  }

  export type RutaMaxAggregateInputType = {
    id_ruta?: true
    id_asesor?: true
    fecha_programada?: true
    fecha_inicio_real?: true
    fecha_fin_real?: true
    estado?: true
    fecha_creacion?: true
    fecha_actualizar?: true
  }

  export type RutaCountAggregateInputType = {
    id_ruta?: true
    id_asesor?: true
    fecha_programada?: true
    fecha_inicio_real?: true
    fecha_fin_real?: true
    estado?: true
    fecha_creacion?: true
    fecha_actualizar?: true
    _all?: true
  }

  export type RutaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ruta to aggregate.
     */
    where?: RutaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rutas to fetch.
     */
    orderBy?: RutaOrderByWithRelationInput | RutaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RutaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rutas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rutas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rutas
    **/
    _count?: true | RutaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RutaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RutaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RutaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RutaMaxAggregateInputType
  }

  export type GetRutaAggregateType<T extends RutaAggregateArgs> = {
        [P in keyof T & keyof AggregateRuta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRuta[P]>
      : GetScalarType<T[P], AggregateRuta[P]>
  }




  export type RutaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RutaWhereInput
    orderBy?: RutaOrderByWithAggregationInput | RutaOrderByWithAggregationInput[]
    by: RutaScalarFieldEnum[] | RutaScalarFieldEnum
    having?: RutaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RutaCountAggregateInputType | true
    _avg?: RutaAvgAggregateInputType
    _sum?: RutaSumAggregateInputType
    _min?: RutaMinAggregateInputType
    _max?: RutaMaxAggregateInputType
  }

  export type RutaGroupByOutputType = {
    id_ruta: number
    id_asesor: number
    fecha_programada: Date
    fecha_inicio_real: Date | null
    fecha_fin_real: Date | null
    estado: string
    fecha_creacion: Date
    fecha_actualizar: Date
    _count: RutaCountAggregateOutputType | null
    _avg: RutaAvgAggregateOutputType | null
    _sum: RutaSumAggregateOutputType | null
    _min: RutaMinAggregateOutputType | null
    _max: RutaMaxAggregateOutputType | null
  }

  type GetRutaGroupByPayload<T extends RutaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RutaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RutaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RutaGroupByOutputType[P]>
            : GetScalarType<T[P], RutaGroupByOutputType[P]>
        }
      >
    >


  export type RutaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_ruta?: boolean
    id_asesor?: boolean
    fecha_programada?: boolean
    fecha_inicio_real?: boolean
    fecha_fin_real?: boolean
    estado?: boolean
    fecha_creacion?: boolean
    fecha_actualizar?: boolean
    asesor?: boolean | AsesorDefaultArgs<ExtArgs>
    rutas_clientes?: boolean | Ruta$rutas_clientesArgs<ExtArgs>
    _count?: boolean | RutaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ruta"]>

  export type RutaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_ruta?: boolean
    id_asesor?: boolean
    fecha_programada?: boolean
    fecha_inicio_real?: boolean
    fecha_fin_real?: boolean
    estado?: boolean
    fecha_creacion?: boolean
    fecha_actualizar?: boolean
    asesor?: boolean | AsesorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ruta"]>

  export type RutaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_ruta?: boolean
    id_asesor?: boolean
    fecha_programada?: boolean
    fecha_inicio_real?: boolean
    fecha_fin_real?: boolean
    estado?: boolean
    fecha_creacion?: boolean
    fecha_actualizar?: boolean
    asesor?: boolean | AsesorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ruta"]>

  export type RutaSelectScalar = {
    id_ruta?: boolean
    id_asesor?: boolean
    fecha_programada?: boolean
    fecha_inicio_real?: boolean
    fecha_fin_real?: boolean
    estado?: boolean
    fecha_creacion?: boolean
    fecha_actualizar?: boolean
  }

  export type RutaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_ruta" | "id_asesor" | "fecha_programada" | "fecha_inicio_real" | "fecha_fin_real" | "estado" | "fecha_creacion" | "fecha_actualizar", ExtArgs["result"]["ruta"]>
  export type RutaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asesor?: boolean | AsesorDefaultArgs<ExtArgs>
    rutas_clientes?: boolean | Ruta$rutas_clientesArgs<ExtArgs>
    _count?: boolean | RutaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RutaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asesor?: boolean | AsesorDefaultArgs<ExtArgs>
  }
  export type RutaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asesor?: boolean | AsesorDefaultArgs<ExtArgs>
  }

  export type $RutaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ruta"
    objects: {
      asesor: Prisma.$AsesorPayload<ExtArgs>
      rutas_clientes: Prisma.$RutaClientePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_ruta: number
      id_asesor: number
      fecha_programada: Date
      fecha_inicio_real: Date | null
      fecha_fin_real: Date | null
      estado: string
      fecha_creacion: Date
      fecha_actualizar: Date
    }, ExtArgs["result"]["ruta"]>
    composites: {}
  }

  type RutaGetPayload<S extends boolean | null | undefined | RutaDefaultArgs> = $Result.GetResult<Prisma.$RutaPayload, S>

  type RutaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RutaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RutaCountAggregateInputType | true
    }

  export interface RutaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ruta'], meta: { name: 'Ruta' } }
    /**
     * Find zero or one Ruta that matches the filter.
     * @param {RutaFindUniqueArgs} args - Arguments to find a Ruta
     * @example
     * // Get one Ruta
     * const ruta = await prisma.ruta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RutaFindUniqueArgs>(args: SelectSubset<T, RutaFindUniqueArgs<ExtArgs>>): Prisma__RutaClient<$Result.GetResult<Prisma.$RutaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ruta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RutaFindUniqueOrThrowArgs} args - Arguments to find a Ruta
     * @example
     * // Get one Ruta
     * const ruta = await prisma.ruta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RutaFindUniqueOrThrowArgs>(args: SelectSubset<T, RutaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RutaClient<$Result.GetResult<Prisma.$RutaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ruta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutaFindFirstArgs} args - Arguments to find a Ruta
     * @example
     * // Get one Ruta
     * const ruta = await prisma.ruta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RutaFindFirstArgs>(args?: SelectSubset<T, RutaFindFirstArgs<ExtArgs>>): Prisma__RutaClient<$Result.GetResult<Prisma.$RutaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ruta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutaFindFirstOrThrowArgs} args - Arguments to find a Ruta
     * @example
     * // Get one Ruta
     * const ruta = await prisma.ruta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RutaFindFirstOrThrowArgs>(args?: SelectSubset<T, RutaFindFirstOrThrowArgs<ExtArgs>>): Prisma__RutaClient<$Result.GetResult<Prisma.$RutaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rutas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rutas
     * const rutas = await prisma.ruta.findMany()
     * 
     * // Get first 10 Rutas
     * const rutas = await prisma.ruta.findMany({ take: 10 })
     * 
     * // Only select the `id_ruta`
     * const rutaWithId_rutaOnly = await prisma.ruta.findMany({ select: { id_ruta: true } })
     * 
     */
    findMany<T extends RutaFindManyArgs>(args?: SelectSubset<T, RutaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ruta.
     * @param {RutaCreateArgs} args - Arguments to create a Ruta.
     * @example
     * // Create one Ruta
     * const Ruta = await prisma.ruta.create({
     *   data: {
     *     // ... data to create a Ruta
     *   }
     * })
     * 
     */
    create<T extends RutaCreateArgs>(args: SelectSubset<T, RutaCreateArgs<ExtArgs>>): Prisma__RutaClient<$Result.GetResult<Prisma.$RutaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rutas.
     * @param {RutaCreateManyArgs} args - Arguments to create many Rutas.
     * @example
     * // Create many Rutas
     * const ruta = await prisma.ruta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RutaCreateManyArgs>(args?: SelectSubset<T, RutaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rutas and returns the data saved in the database.
     * @param {RutaCreateManyAndReturnArgs} args - Arguments to create many Rutas.
     * @example
     * // Create many Rutas
     * const ruta = await prisma.ruta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rutas and only return the `id_ruta`
     * const rutaWithId_rutaOnly = await prisma.ruta.createManyAndReturn({
     *   select: { id_ruta: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RutaCreateManyAndReturnArgs>(args?: SelectSubset<T, RutaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ruta.
     * @param {RutaDeleteArgs} args - Arguments to delete one Ruta.
     * @example
     * // Delete one Ruta
     * const Ruta = await prisma.ruta.delete({
     *   where: {
     *     // ... filter to delete one Ruta
     *   }
     * })
     * 
     */
    delete<T extends RutaDeleteArgs>(args: SelectSubset<T, RutaDeleteArgs<ExtArgs>>): Prisma__RutaClient<$Result.GetResult<Prisma.$RutaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ruta.
     * @param {RutaUpdateArgs} args - Arguments to update one Ruta.
     * @example
     * // Update one Ruta
     * const ruta = await prisma.ruta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RutaUpdateArgs>(args: SelectSubset<T, RutaUpdateArgs<ExtArgs>>): Prisma__RutaClient<$Result.GetResult<Prisma.$RutaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rutas.
     * @param {RutaDeleteManyArgs} args - Arguments to filter Rutas to delete.
     * @example
     * // Delete a few Rutas
     * const { count } = await prisma.ruta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RutaDeleteManyArgs>(args?: SelectSubset<T, RutaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rutas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rutas
     * const ruta = await prisma.ruta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RutaUpdateManyArgs>(args: SelectSubset<T, RutaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rutas and returns the data updated in the database.
     * @param {RutaUpdateManyAndReturnArgs} args - Arguments to update many Rutas.
     * @example
     * // Update many Rutas
     * const ruta = await prisma.ruta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rutas and only return the `id_ruta`
     * const rutaWithId_rutaOnly = await prisma.ruta.updateManyAndReturn({
     *   select: { id_ruta: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RutaUpdateManyAndReturnArgs>(args: SelectSubset<T, RutaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ruta.
     * @param {RutaUpsertArgs} args - Arguments to update or create a Ruta.
     * @example
     * // Update or create a Ruta
     * const ruta = await prisma.ruta.upsert({
     *   create: {
     *     // ... data to create a Ruta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ruta we want to update
     *   }
     * })
     */
    upsert<T extends RutaUpsertArgs>(args: SelectSubset<T, RutaUpsertArgs<ExtArgs>>): Prisma__RutaClient<$Result.GetResult<Prisma.$RutaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rutas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutaCountArgs} args - Arguments to filter Rutas to count.
     * @example
     * // Count the number of Rutas
     * const count = await prisma.ruta.count({
     *   where: {
     *     // ... the filter for the Rutas we want to count
     *   }
     * })
    **/
    count<T extends RutaCountArgs>(
      args?: Subset<T, RutaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RutaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ruta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RutaAggregateArgs>(args: Subset<T, RutaAggregateArgs>): Prisma.PrismaPromise<GetRutaAggregateType<T>>

    /**
     * Group by Ruta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RutaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RutaGroupByArgs['orderBy'] }
        : { orderBy?: RutaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RutaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRutaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ruta model
   */
  readonly fields: RutaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ruta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RutaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    asesor<T extends AsesorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AsesorDefaultArgs<ExtArgs>>): Prisma__AsesorClient<$Result.GetResult<Prisma.$AsesorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rutas_clientes<T extends Ruta$rutas_clientesArgs<ExtArgs> = {}>(args?: Subset<T, Ruta$rutas_clientesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutaClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ruta model
   */
  interface RutaFieldRefs {
    readonly id_ruta: FieldRef<"Ruta", 'Int'>
    readonly id_asesor: FieldRef<"Ruta", 'Int'>
    readonly fecha_programada: FieldRef<"Ruta", 'DateTime'>
    readonly fecha_inicio_real: FieldRef<"Ruta", 'DateTime'>
    readonly fecha_fin_real: FieldRef<"Ruta", 'DateTime'>
    readonly estado: FieldRef<"Ruta", 'String'>
    readonly fecha_creacion: FieldRef<"Ruta", 'DateTime'>
    readonly fecha_actualizar: FieldRef<"Ruta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ruta findUnique
   */
  export type RutaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruta
     */
    select?: RutaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruta
     */
    omit?: RutaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutaInclude<ExtArgs> | null
    /**
     * Filter, which Ruta to fetch.
     */
    where: RutaWhereUniqueInput
  }

  /**
   * Ruta findUniqueOrThrow
   */
  export type RutaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruta
     */
    select?: RutaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruta
     */
    omit?: RutaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutaInclude<ExtArgs> | null
    /**
     * Filter, which Ruta to fetch.
     */
    where: RutaWhereUniqueInput
  }

  /**
   * Ruta findFirst
   */
  export type RutaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruta
     */
    select?: RutaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruta
     */
    omit?: RutaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutaInclude<ExtArgs> | null
    /**
     * Filter, which Ruta to fetch.
     */
    where?: RutaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rutas to fetch.
     */
    orderBy?: RutaOrderByWithRelationInput | RutaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rutas.
     */
    cursor?: RutaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rutas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rutas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rutas.
     */
    distinct?: RutaScalarFieldEnum | RutaScalarFieldEnum[]
  }

  /**
   * Ruta findFirstOrThrow
   */
  export type RutaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruta
     */
    select?: RutaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruta
     */
    omit?: RutaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutaInclude<ExtArgs> | null
    /**
     * Filter, which Ruta to fetch.
     */
    where?: RutaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rutas to fetch.
     */
    orderBy?: RutaOrderByWithRelationInput | RutaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rutas.
     */
    cursor?: RutaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rutas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rutas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rutas.
     */
    distinct?: RutaScalarFieldEnum | RutaScalarFieldEnum[]
  }

  /**
   * Ruta findMany
   */
  export type RutaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruta
     */
    select?: RutaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruta
     */
    omit?: RutaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutaInclude<ExtArgs> | null
    /**
     * Filter, which Rutas to fetch.
     */
    where?: RutaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rutas to fetch.
     */
    orderBy?: RutaOrderByWithRelationInput | RutaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rutas.
     */
    cursor?: RutaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rutas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rutas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rutas.
     */
    distinct?: RutaScalarFieldEnum | RutaScalarFieldEnum[]
  }

  /**
   * Ruta create
   */
  export type RutaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruta
     */
    select?: RutaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruta
     */
    omit?: RutaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutaInclude<ExtArgs> | null
    /**
     * The data needed to create a Ruta.
     */
    data: XOR<RutaCreateInput, RutaUncheckedCreateInput>
  }

  /**
   * Ruta createMany
   */
  export type RutaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rutas.
     */
    data: RutaCreateManyInput | RutaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ruta createManyAndReturn
   */
  export type RutaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruta
     */
    select?: RutaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ruta
     */
    omit?: RutaOmit<ExtArgs> | null
    /**
     * The data used to create many Rutas.
     */
    data: RutaCreateManyInput | RutaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ruta update
   */
  export type RutaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruta
     */
    select?: RutaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruta
     */
    omit?: RutaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutaInclude<ExtArgs> | null
    /**
     * The data needed to update a Ruta.
     */
    data: XOR<RutaUpdateInput, RutaUncheckedUpdateInput>
    /**
     * Choose, which Ruta to update.
     */
    where: RutaWhereUniqueInput
  }

  /**
   * Ruta updateMany
   */
  export type RutaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rutas.
     */
    data: XOR<RutaUpdateManyMutationInput, RutaUncheckedUpdateManyInput>
    /**
     * Filter which Rutas to update
     */
    where?: RutaWhereInput
    /**
     * Limit how many Rutas to update.
     */
    limit?: number
  }

  /**
   * Ruta updateManyAndReturn
   */
  export type RutaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruta
     */
    select?: RutaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ruta
     */
    omit?: RutaOmit<ExtArgs> | null
    /**
     * The data used to update Rutas.
     */
    data: XOR<RutaUpdateManyMutationInput, RutaUncheckedUpdateManyInput>
    /**
     * Filter which Rutas to update
     */
    where?: RutaWhereInput
    /**
     * Limit how many Rutas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ruta upsert
   */
  export type RutaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruta
     */
    select?: RutaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruta
     */
    omit?: RutaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutaInclude<ExtArgs> | null
    /**
     * The filter to search for the Ruta to update in case it exists.
     */
    where: RutaWhereUniqueInput
    /**
     * In case the Ruta found by the `where` argument doesn't exist, create a new Ruta with this data.
     */
    create: XOR<RutaCreateInput, RutaUncheckedCreateInput>
    /**
     * In case the Ruta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RutaUpdateInput, RutaUncheckedUpdateInput>
  }

  /**
   * Ruta delete
   */
  export type RutaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruta
     */
    select?: RutaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruta
     */
    omit?: RutaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutaInclude<ExtArgs> | null
    /**
     * Filter which Ruta to delete.
     */
    where: RutaWhereUniqueInput
  }

  /**
   * Ruta deleteMany
   */
  export type RutaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rutas to delete
     */
    where?: RutaWhereInput
    /**
     * Limit how many Rutas to delete.
     */
    limit?: number
  }

  /**
   * Ruta.rutas_clientes
   */
  export type Ruta$rutas_clientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutaCliente
     */
    select?: RutaClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutaCliente
     */
    omit?: RutaClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutaClienteInclude<ExtArgs> | null
    where?: RutaClienteWhereInput
    orderBy?: RutaClienteOrderByWithRelationInput | RutaClienteOrderByWithRelationInput[]
    cursor?: RutaClienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RutaClienteScalarFieldEnum | RutaClienteScalarFieldEnum[]
  }

  /**
   * Ruta without action
   */
  export type RutaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruta
     */
    select?: RutaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruta
     */
    omit?: RutaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutaInclude<ExtArgs> | null
  }


  /**
   * Model RutaCliente
   */

  export type AggregateRutaCliente = {
    _count: RutaClienteCountAggregateOutputType | null
    _avg: RutaClienteAvgAggregateOutputType | null
    _sum: RutaClienteSumAggregateOutputType | null
    _min: RutaClienteMinAggregateOutputType | null
    _max: RutaClienteMaxAggregateOutputType | null
  }

  export type RutaClienteAvgAggregateOutputType = {
    id_ruta_cliente: number | null
    id_ruta: number | null
    id_cliente: number | null
    secuencia: number | null
  }

  export type RutaClienteSumAggregateOutputType = {
    id_ruta_cliente: number | null
    id_ruta: number | null
    id_cliente: number | null
    secuencia: number | null
  }

  export type RutaClienteMinAggregateOutputType = {
    id_ruta_cliente: number | null
    id_ruta: number | null
    id_cliente: number | null
    secuencia: number | null
    estado_visita: string | null
    prioridad: string | null
    fecha_creacion: Date | null
    fecha_actualizar: Date | null
  }

  export type RutaClienteMaxAggregateOutputType = {
    id_ruta_cliente: number | null
    id_ruta: number | null
    id_cliente: number | null
    secuencia: number | null
    estado_visita: string | null
    prioridad: string | null
    fecha_creacion: Date | null
    fecha_actualizar: Date | null
  }

  export type RutaClienteCountAggregateOutputType = {
    id_ruta_cliente: number
    id_ruta: number
    id_cliente: number
    secuencia: number
    estado_visita: number
    prioridad: number
    fecha_creacion: number
    fecha_actualizar: number
    _all: number
  }


  export type RutaClienteAvgAggregateInputType = {
    id_ruta_cliente?: true
    id_ruta?: true
    id_cliente?: true
    secuencia?: true
  }

  export type RutaClienteSumAggregateInputType = {
    id_ruta_cliente?: true
    id_ruta?: true
    id_cliente?: true
    secuencia?: true
  }

  export type RutaClienteMinAggregateInputType = {
    id_ruta_cliente?: true
    id_ruta?: true
    id_cliente?: true
    secuencia?: true
    estado_visita?: true
    prioridad?: true
    fecha_creacion?: true
    fecha_actualizar?: true
  }

  export type RutaClienteMaxAggregateInputType = {
    id_ruta_cliente?: true
    id_ruta?: true
    id_cliente?: true
    secuencia?: true
    estado_visita?: true
    prioridad?: true
    fecha_creacion?: true
    fecha_actualizar?: true
  }

  export type RutaClienteCountAggregateInputType = {
    id_ruta_cliente?: true
    id_ruta?: true
    id_cliente?: true
    secuencia?: true
    estado_visita?: true
    prioridad?: true
    fecha_creacion?: true
    fecha_actualizar?: true
    _all?: true
  }

  export type RutaClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RutaCliente to aggregate.
     */
    where?: RutaClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RutaClientes to fetch.
     */
    orderBy?: RutaClienteOrderByWithRelationInput | RutaClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RutaClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RutaClientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RutaClientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RutaClientes
    **/
    _count?: true | RutaClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RutaClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RutaClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RutaClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RutaClienteMaxAggregateInputType
  }

  export type GetRutaClienteAggregateType<T extends RutaClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateRutaCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRutaCliente[P]>
      : GetScalarType<T[P], AggregateRutaCliente[P]>
  }




  export type RutaClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RutaClienteWhereInput
    orderBy?: RutaClienteOrderByWithAggregationInput | RutaClienteOrderByWithAggregationInput[]
    by: RutaClienteScalarFieldEnum[] | RutaClienteScalarFieldEnum
    having?: RutaClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RutaClienteCountAggregateInputType | true
    _avg?: RutaClienteAvgAggregateInputType
    _sum?: RutaClienteSumAggregateInputType
    _min?: RutaClienteMinAggregateInputType
    _max?: RutaClienteMaxAggregateInputType
  }

  export type RutaClienteGroupByOutputType = {
    id_ruta_cliente: number
    id_ruta: number
    id_cliente: number
    secuencia: number
    estado_visita: string
    prioridad: string
    fecha_creacion: Date
    fecha_actualizar: Date
    _count: RutaClienteCountAggregateOutputType | null
    _avg: RutaClienteAvgAggregateOutputType | null
    _sum: RutaClienteSumAggregateOutputType | null
    _min: RutaClienteMinAggregateOutputType | null
    _max: RutaClienteMaxAggregateOutputType | null
  }

  type GetRutaClienteGroupByPayload<T extends RutaClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RutaClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RutaClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RutaClienteGroupByOutputType[P]>
            : GetScalarType<T[P], RutaClienteGroupByOutputType[P]>
        }
      >
    >


  export type RutaClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_ruta_cliente?: boolean
    id_ruta?: boolean
    id_cliente?: boolean
    secuencia?: boolean
    estado_visita?: boolean
    prioridad?: boolean
    fecha_creacion?: boolean
    fecha_actualizar?: boolean
    ruta?: boolean | RutaDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    visitas?: boolean | RutaCliente$visitasArgs<ExtArgs>
    _count?: boolean | RutaClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rutaCliente"]>

  export type RutaClienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_ruta_cliente?: boolean
    id_ruta?: boolean
    id_cliente?: boolean
    secuencia?: boolean
    estado_visita?: boolean
    prioridad?: boolean
    fecha_creacion?: boolean
    fecha_actualizar?: boolean
    ruta?: boolean | RutaDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rutaCliente"]>

  export type RutaClienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_ruta_cliente?: boolean
    id_ruta?: boolean
    id_cliente?: boolean
    secuencia?: boolean
    estado_visita?: boolean
    prioridad?: boolean
    fecha_creacion?: boolean
    fecha_actualizar?: boolean
    ruta?: boolean | RutaDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rutaCliente"]>

  export type RutaClienteSelectScalar = {
    id_ruta_cliente?: boolean
    id_ruta?: boolean
    id_cliente?: boolean
    secuencia?: boolean
    estado_visita?: boolean
    prioridad?: boolean
    fecha_creacion?: boolean
    fecha_actualizar?: boolean
  }

  export type RutaClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_ruta_cliente" | "id_ruta" | "id_cliente" | "secuencia" | "estado_visita" | "prioridad" | "fecha_creacion" | "fecha_actualizar", ExtArgs["result"]["rutaCliente"]>
  export type RutaClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ruta?: boolean | RutaDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    visitas?: boolean | RutaCliente$visitasArgs<ExtArgs>
    _count?: boolean | RutaClienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RutaClienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ruta?: boolean | RutaDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }
  export type RutaClienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ruta?: boolean | RutaDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }

  export type $RutaClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RutaCliente"
    objects: {
      ruta: Prisma.$RutaPayload<ExtArgs>
      cliente: Prisma.$ClientePayload<ExtArgs>
      visitas: Prisma.$VisitaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_ruta_cliente: number
      id_ruta: number
      id_cliente: number
      secuencia: number
      estado_visita: string
      prioridad: string
      fecha_creacion: Date
      fecha_actualizar: Date
    }, ExtArgs["result"]["rutaCliente"]>
    composites: {}
  }

  type RutaClienteGetPayload<S extends boolean | null | undefined | RutaClienteDefaultArgs> = $Result.GetResult<Prisma.$RutaClientePayload, S>

  type RutaClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RutaClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RutaClienteCountAggregateInputType | true
    }

  export interface RutaClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RutaCliente'], meta: { name: 'RutaCliente' } }
    /**
     * Find zero or one RutaCliente that matches the filter.
     * @param {RutaClienteFindUniqueArgs} args - Arguments to find a RutaCliente
     * @example
     * // Get one RutaCliente
     * const rutaCliente = await prisma.rutaCliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RutaClienteFindUniqueArgs>(args: SelectSubset<T, RutaClienteFindUniqueArgs<ExtArgs>>): Prisma__RutaClienteClient<$Result.GetResult<Prisma.$RutaClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RutaCliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RutaClienteFindUniqueOrThrowArgs} args - Arguments to find a RutaCliente
     * @example
     * // Get one RutaCliente
     * const rutaCliente = await prisma.rutaCliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RutaClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, RutaClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RutaClienteClient<$Result.GetResult<Prisma.$RutaClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RutaCliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutaClienteFindFirstArgs} args - Arguments to find a RutaCliente
     * @example
     * // Get one RutaCliente
     * const rutaCliente = await prisma.rutaCliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RutaClienteFindFirstArgs>(args?: SelectSubset<T, RutaClienteFindFirstArgs<ExtArgs>>): Prisma__RutaClienteClient<$Result.GetResult<Prisma.$RutaClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RutaCliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutaClienteFindFirstOrThrowArgs} args - Arguments to find a RutaCliente
     * @example
     * // Get one RutaCliente
     * const rutaCliente = await prisma.rutaCliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RutaClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, RutaClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__RutaClienteClient<$Result.GetResult<Prisma.$RutaClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RutaClientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutaClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RutaClientes
     * const rutaClientes = await prisma.rutaCliente.findMany()
     * 
     * // Get first 10 RutaClientes
     * const rutaClientes = await prisma.rutaCliente.findMany({ take: 10 })
     * 
     * // Only select the `id_ruta_cliente`
     * const rutaClienteWithId_ruta_clienteOnly = await prisma.rutaCliente.findMany({ select: { id_ruta_cliente: true } })
     * 
     */
    findMany<T extends RutaClienteFindManyArgs>(args?: SelectSubset<T, RutaClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutaClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RutaCliente.
     * @param {RutaClienteCreateArgs} args - Arguments to create a RutaCliente.
     * @example
     * // Create one RutaCliente
     * const RutaCliente = await prisma.rutaCliente.create({
     *   data: {
     *     // ... data to create a RutaCliente
     *   }
     * })
     * 
     */
    create<T extends RutaClienteCreateArgs>(args: SelectSubset<T, RutaClienteCreateArgs<ExtArgs>>): Prisma__RutaClienteClient<$Result.GetResult<Prisma.$RutaClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RutaClientes.
     * @param {RutaClienteCreateManyArgs} args - Arguments to create many RutaClientes.
     * @example
     * // Create many RutaClientes
     * const rutaCliente = await prisma.rutaCliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RutaClienteCreateManyArgs>(args?: SelectSubset<T, RutaClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RutaClientes and returns the data saved in the database.
     * @param {RutaClienteCreateManyAndReturnArgs} args - Arguments to create many RutaClientes.
     * @example
     * // Create many RutaClientes
     * const rutaCliente = await prisma.rutaCliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RutaClientes and only return the `id_ruta_cliente`
     * const rutaClienteWithId_ruta_clienteOnly = await prisma.rutaCliente.createManyAndReturn({
     *   select: { id_ruta_cliente: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RutaClienteCreateManyAndReturnArgs>(args?: SelectSubset<T, RutaClienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutaClientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RutaCliente.
     * @param {RutaClienteDeleteArgs} args - Arguments to delete one RutaCliente.
     * @example
     * // Delete one RutaCliente
     * const RutaCliente = await prisma.rutaCliente.delete({
     *   where: {
     *     // ... filter to delete one RutaCliente
     *   }
     * })
     * 
     */
    delete<T extends RutaClienteDeleteArgs>(args: SelectSubset<T, RutaClienteDeleteArgs<ExtArgs>>): Prisma__RutaClienteClient<$Result.GetResult<Prisma.$RutaClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RutaCliente.
     * @param {RutaClienteUpdateArgs} args - Arguments to update one RutaCliente.
     * @example
     * // Update one RutaCliente
     * const rutaCliente = await prisma.rutaCliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RutaClienteUpdateArgs>(args: SelectSubset<T, RutaClienteUpdateArgs<ExtArgs>>): Prisma__RutaClienteClient<$Result.GetResult<Prisma.$RutaClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RutaClientes.
     * @param {RutaClienteDeleteManyArgs} args - Arguments to filter RutaClientes to delete.
     * @example
     * // Delete a few RutaClientes
     * const { count } = await prisma.rutaCliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RutaClienteDeleteManyArgs>(args?: SelectSubset<T, RutaClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RutaClientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutaClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RutaClientes
     * const rutaCliente = await prisma.rutaCliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RutaClienteUpdateManyArgs>(args: SelectSubset<T, RutaClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RutaClientes and returns the data updated in the database.
     * @param {RutaClienteUpdateManyAndReturnArgs} args - Arguments to update many RutaClientes.
     * @example
     * // Update many RutaClientes
     * const rutaCliente = await prisma.rutaCliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RutaClientes and only return the `id_ruta_cliente`
     * const rutaClienteWithId_ruta_clienteOnly = await prisma.rutaCliente.updateManyAndReturn({
     *   select: { id_ruta_cliente: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RutaClienteUpdateManyAndReturnArgs>(args: SelectSubset<T, RutaClienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutaClientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RutaCliente.
     * @param {RutaClienteUpsertArgs} args - Arguments to update or create a RutaCliente.
     * @example
     * // Update or create a RutaCliente
     * const rutaCliente = await prisma.rutaCliente.upsert({
     *   create: {
     *     // ... data to create a RutaCliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RutaCliente we want to update
     *   }
     * })
     */
    upsert<T extends RutaClienteUpsertArgs>(args: SelectSubset<T, RutaClienteUpsertArgs<ExtArgs>>): Prisma__RutaClienteClient<$Result.GetResult<Prisma.$RutaClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RutaClientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutaClienteCountArgs} args - Arguments to filter RutaClientes to count.
     * @example
     * // Count the number of RutaClientes
     * const count = await prisma.rutaCliente.count({
     *   where: {
     *     // ... the filter for the RutaClientes we want to count
     *   }
     * })
    **/
    count<T extends RutaClienteCountArgs>(
      args?: Subset<T, RutaClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RutaClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RutaCliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutaClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RutaClienteAggregateArgs>(args: Subset<T, RutaClienteAggregateArgs>): Prisma.PrismaPromise<GetRutaClienteAggregateType<T>>

    /**
     * Group by RutaCliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutaClienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RutaClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RutaClienteGroupByArgs['orderBy'] }
        : { orderBy?: RutaClienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RutaClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRutaClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RutaCliente model
   */
  readonly fields: RutaClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RutaCliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RutaClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ruta<T extends RutaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RutaDefaultArgs<ExtArgs>>): Prisma__RutaClient<$Result.GetResult<Prisma.$RutaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    visitas<T extends RutaCliente$visitasArgs<ExtArgs> = {}>(args?: Subset<T, RutaCliente$visitasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RutaCliente model
   */
  interface RutaClienteFieldRefs {
    readonly id_ruta_cliente: FieldRef<"RutaCliente", 'Int'>
    readonly id_ruta: FieldRef<"RutaCliente", 'Int'>
    readonly id_cliente: FieldRef<"RutaCliente", 'Int'>
    readonly secuencia: FieldRef<"RutaCliente", 'Int'>
    readonly estado_visita: FieldRef<"RutaCliente", 'String'>
    readonly prioridad: FieldRef<"RutaCliente", 'String'>
    readonly fecha_creacion: FieldRef<"RutaCliente", 'DateTime'>
    readonly fecha_actualizar: FieldRef<"RutaCliente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RutaCliente findUnique
   */
  export type RutaClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutaCliente
     */
    select?: RutaClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutaCliente
     */
    omit?: RutaClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutaClienteInclude<ExtArgs> | null
    /**
     * Filter, which RutaCliente to fetch.
     */
    where: RutaClienteWhereUniqueInput
  }

  /**
   * RutaCliente findUniqueOrThrow
   */
  export type RutaClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutaCliente
     */
    select?: RutaClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutaCliente
     */
    omit?: RutaClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutaClienteInclude<ExtArgs> | null
    /**
     * Filter, which RutaCliente to fetch.
     */
    where: RutaClienteWhereUniqueInput
  }

  /**
   * RutaCliente findFirst
   */
  export type RutaClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutaCliente
     */
    select?: RutaClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutaCliente
     */
    omit?: RutaClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutaClienteInclude<ExtArgs> | null
    /**
     * Filter, which RutaCliente to fetch.
     */
    where?: RutaClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RutaClientes to fetch.
     */
    orderBy?: RutaClienteOrderByWithRelationInput | RutaClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RutaClientes.
     */
    cursor?: RutaClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RutaClientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RutaClientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RutaClientes.
     */
    distinct?: RutaClienteScalarFieldEnum | RutaClienteScalarFieldEnum[]
  }

  /**
   * RutaCliente findFirstOrThrow
   */
  export type RutaClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutaCliente
     */
    select?: RutaClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutaCliente
     */
    omit?: RutaClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutaClienteInclude<ExtArgs> | null
    /**
     * Filter, which RutaCliente to fetch.
     */
    where?: RutaClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RutaClientes to fetch.
     */
    orderBy?: RutaClienteOrderByWithRelationInput | RutaClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RutaClientes.
     */
    cursor?: RutaClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RutaClientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RutaClientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RutaClientes.
     */
    distinct?: RutaClienteScalarFieldEnum | RutaClienteScalarFieldEnum[]
  }

  /**
   * RutaCliente findMany
   */
  export type RutaClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutaCliente
     */
    select?: RutaClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutaCliente
     */
    omit?: RutaClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutaClienteInclude<ExtArgs> | null
    /**
     * Filter, which RutaClientes to fetch.
     */
    where?: RutaClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RutaClientes to fetch.
     */
    orderBy?: RutaClienteOrderByWithRelationInput | RutaClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RutaClientes.
     */
    cursor?: RutaClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RutaClientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RutaClientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RutaClientes.
     */
    distinct?: RutaClienteScalarFieldEnum | RutaClienteScalarFieldEnum[]
  }

  /**
   * RutaCliente create
   */
  export type RutaClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutaCliente
     */
    select?: RutaClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutaCliente
     */
    omit?: RutaClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutaClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a RutaCliente.
     */
    data: XOR<RutaClienteCreateInput, RutaClienteUncheckedCreateInput>
  }

  /**
   * RutaCliente createMany
   */
  export type RutaClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RutaClientes.
     */
    data: RutaClienteCreateManyInput | RutaClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RutaCliente createManyAndReturn
   */
  export type RutaClienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutaCliente
     */
    select?: RutaClienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RutaCliente
     */
    omit?: RutaClienteOmit<ExtArgs> | null
    /**
     * The data used to create many RutaClientes.
     */
    data: RutaClienteCreateManyInput | RutaClienteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutaClienteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RutaCliente update
   */
  export type RutaClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutaCliente
     */
    select?: RutaClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutaCliente
     */
    omit?: RutaClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutaClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a RutaCliente.
     */
    data: XOR<RutaClienteUpdateInput, RutaClienteUncheckedUpdateInput>
    /**
     * Choose, which RutaCliente to update.
     */
    where: RutaClienteWhereUniqueInput
  }

  /**
   * RutaCliente updateMany
   */
  export type RutaClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RutaClientes.
     */
    data: XOR<RutaClienteUpdateManyMutationInput, RutaClienteUncheckedUpdateManyInput>
    /**
     * Filter which RutaClientes to update
     */
    where?: RutaClienteWhereInput
    /**
     * Limit how many RutaClientes to update.
     */
    limit?: number
  }

  /**
   * RutaCliente updateManyAndReturn
   */
  export type RutaClienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutaCliente
     */
    select?: RutaClienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RutaCliente
     */
    omit?: RutaClienteOmit<ExtArgs> | null
    /**
     * The data used to update RutaClientes.
     */
    data: XOR<RutaClienteUpdateManyMutationInput, RutaClienteUncheckedUpdateManyInput>
    /**
     * Filter which RutaClientes to update
     */
    where?: RutaClienteWhereInput
    /**
     * Limit how many RutaClientes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutaClienteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RutaCliente upsert
   */
  export type RutaClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutaCliente
     */
    select?: RutaClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutaCliente
     */
    omit?: RutaClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutaClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the RutaCliente to update in case it exists.
     */
    where: RutaClienteWhereUniqueInput
    /**
     * In case the RutaCliente found by the `where` argument doesn't exist, create a new RutaCliente with this data.
     */
    create: XOR<RutaClienteCreateInput, RutaClienteUncheckedCreateInput>
    /**
     * In case the RutaCliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RutaClienteUpdateInput, RutaClienteUncheckedUpdateInput>
  }

  /**
   * RutaCliente delete
   */
  export type RutaClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutaCliente
     */
    select?: RutaClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutaCliente
     */
    omit?: RutaClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutaClienteInclude<ExtArgs> | null
    /**
     * Filter which RutaCliente to delete.
     */
    where: RutaClienteWhereUniqueInput
  }

  /**
   * RutaCliente deleteMany
   */
  export type RutaClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RutaClientes to delete
     */
    where?: RutaClienteWhereInput
    /**
     * Limit how many RutaClientes to delete.
     */
    limit?: number
  }

  /**
   * RutaCliente.visitas
   */
  export type RutaCliente$visitasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visita
     */
    select?: VisitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visita
     */
    omit?: VisitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitaInclude<ExtArgs> | null
    where?: VisitaWhereInput
    orderBy?: VisitaOrderByWithRelationInput | VisitaOrderByWithRelationInput[]
    cursor?: VisitaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VisitaScalarFieldEnum | VisitaScalarFieldEnum[]
  }

  /**
   * RutaCliente without action
   */
  export type RutaClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutaCliente
     */
    select?: RutaClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutaCliente
     */
    omit?: RutaClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutaClienteInclude<ExtArgs> | null
  }


  /**
   * Model Visita
   */

  export type AggregateVisita = {
    _count: VisitaCountAggregateOutputType | null
    _avg: VisitaAvgAggregateOutputType | null
    _sum: VisitaSumAggregateOutputType | null
    _min: VisitaMinAggregateOutputType | null
    _max: VisitaMaxAggregateOutputType | null
  }

  export type VisitaAvgAggregateOutputType = {
    id_visita: number | null
    id_ruta_cliente: number | null
    id_cliente: number | null
    id_asesor: number | null
    latitud: Decimal | null
    longitud: Decimal | null
    monto_recaudado: Decimal | null
  }

  export type VisitaSumAggregateOutputType = {
    id_visita: number | null
    id_ruta_cliente: number | null
    id_cliente: number | null
    id_asesor: number | null
    latitud: Decimal | null
    longitud: Decimal | null
    monto_recaudado: Decimal | null
  }

  export type VisitaMinAggregateOutputType = {
    id_visita: number | null
    client_sync_id: string | null
    id_ruta_cliente: number | null
    id_cliente: number | null
    id_asesor: number | null
    tipo_visita: string | null
    fecha_hora_checkin: Date | null
    fecha_hora_checkout: Date | null
    latitud: Decimal | null
    longitud: Decimal | null
    resultado: string | null
    es_efectiva: boolean | null
    monto_recaudado: Decimal | null
    fecha_promesa: Date | null
    observaciones: string | null
    foto_url: string | null
    foto_adicional_url: string | null
    video_url: string | null
    foto_evidencia: string | null
    firma_evidencia: string | null
    fecha_creacion: Date | null
    fecha_actualizar: Date | null
  }

  export type VisitaMaxAggregateOutputType = {
    id_visita: number | null
    client_sync_id: string | null
    id_ruta_cliente: number | null
    id_cliente: number | null
    id_asesor: number | null
    tipo_visita: string | null
    fecha_hora_checkin: Date | null
    fecha_hora_checkout: Date | null
    latitud: Decimal | null
    longitud: Decimal | null
    resultado: string | null
    es_efectiva: boolean | null
    monto_recaudado: Decimal | null
    fecha_promesa: Date | null
    observaciones: string | null
    foto_url: string | null
    foto_adicional_url: string | null
    video_url: string | null
    foto_evidencia: string | null
    firma_evidencia: string | null
    fecha_creacion: Date | null
    fecha_actualizar: Date | null
  }

  export type VisitaCountAggregateOutputType = {
    id_visita: number
    client_sync_id: number
    id_ruta_cliente: number
    id_cliente: number
    id_asesor: number
    tipo_visita: number
    fecha_hora_checkin: number
    fecha_hora_checkout: number
    latitud: number
    longitud: number
    resultado: number
    es_efectiva: number
    monto_recaudado: number
    fecha_promesa: number
    observaciones: number
    foto_url: number
    foto_adicional_url: number
    video_url: number
    foto_evidencia: number
    firma_evidencia: number
    fecha_creacion: number
    fecha_actualizar: number
    _all: number
  }


  export type VisitaAvgAggregateInputType = {
    id_visita?: true
    id_ruta_cliente?: true
    id_cliente?: true
    id_asesor?: true
    latitud?: true
    longitud?: true
    monto_recaudado?: true
  }

  export type VisitaSumAggregateInputType = {
    id_visita?: true
    id_ruta_cliente?: true
    id_cliente?: true
    id_asesor?: true
    latitud?: true
    longitud?: true
    monto_recaudado?: true
  }

  export type VisitaMinAggregateInputType = {
    id_visita?: true
    client_sync_id?: true
    id_ruta_cliente?: true
    id_cliente?: true
    id_asesor?: true
    tipo_visita?: true
    fecha_hora_checkin?: true
    fecha_hora_checkout?: true
    latitud?: true
    longitud?: true
    resultado?: true
    es_efectiva?: true
    monto_recaudado?: true
    fecha_promesa?: true
    observaciones?: true
    foto_url?: true
    foto_adicional_url?: true
    video_url?: true
    foto_evidencia?: true
    firma_evidencia?: true
    fecha_creacion?: true
    fecha_actualizar?: true
  }

  export type VisitaMaxAggregateInputType = {
    id_visita?: true
    client_sync_id?: true
    id_ruta_cliente?: true
    id_cliente?: true
    id_asesor?: true
    tipo_visita?: true
    fecha_hora_checkin?: true
    fecha_hora_checkout?: true
    latitud?: true
    longitud?: true
    resultado?: true
    es_efectiva?: true
    monto_recaudado?: true
    fecha_promesa?: true
    observaciones?: true
    foto_url?: true
    foto_adicional_url?: true
    video_url?: true
    foto_evidencia?: true
    firma_evidencia?: true
    fecha_creacion?: true
    fecha_actualizar?: true
  }

  export type VisitaCountAggregateInputType = {
    id_visita?: true
    client_sync_id?: true
    id_ruta_cliente?: true
    id_cliente?: true
    id_asesor?: true
    tipo_visita?: true
    fecha_hora_checkin?: true
    fecha_hora_checkout?: true
    latitud?: true
    longitud?: true
    resultado?: true
    es_efectiva?: true
    monto_recaudado?: true
    fecha_promesa?: true
    observaciones?: true
    foto_url?: true
    foto_adicional_url?: true
    video_url?: true
    foto_evidencia?: true
    firma_evidencia?: true
    fecha_creacion?: true
    fecha_actualizar?: true
    _all?: true
  }

  export type VisitaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Visita to aggregate.
     */
    where?: VisitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visitas to fetch.
     */
    orderBy?: VisitaOrderByWithRelationInput | VisitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VisitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visitas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Visitas
    **/
    _count?: true | VisitaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VisitaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VisitaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VisitaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VisitaMaxAggregateInputType
  }

  export type GetVisitaAggregateType<T extends VisitaAggregateArgs> = {
        [P in keyof T & keyof AggregateVisita]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVisita[P]>
      : GetScalarType<T[P], AggregateVisita[P]>
  }




  export type VisitaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitaWhereInput
    orderBy?: VisitaOrderByWithAggregationInput | VisitaOrderByWithAggregationInput[]
    by: VisitaScalarFieldEnum[] | VisitaScalarFieldEnum
    having?: VisitaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VisitaCountAggregateInputType | true
    _avg?: VisitaAvgAggregateInputType
    _sum?: VisitaSumAggregateInputType
    _min?: VisitaMinAggregateInputType
    _max?: VisitaMaxAggregateInputType
  }

  export type VisitaGroupByOutputType = {
    id_visita: number
    client_sync_id: string | null
    id_ruta_cliente: number | null
    id_cliente: number
    id_asesor: number
    tipo_visita: string
    fecha_hora_checkin: Date
    fecha_hora_checkout: Date | null
    latitud: Decimal
    longitud: Decimal
    resultado: string
    es_efectiva: boolean
    monto_recaudado: Decimal | null
    fecha_promesa: Date | null
    observaciones: string | null
    foto_url: string | null
    foto_adicional_url: string | null
    video_url: string | null
    foto_evidencia: string | null
    firma_evidencia: string | null
    fecha_creacion: Date
    fecha_actualizar: Date
    _count: VisitaCountAggregateOutputType | null
    _avg: VisitaAvgAggregateOutputType | null
    _sum: VisitaSumAggregateOutputType | null
    _min: VisitaMinAggregateOutputType | null
    _max: VisitaMaxAggregateOutputType | null
  }

  type GetVisitaGroupByPayload<T extends VisitaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VisitaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VisitaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VisitaGroupByOutputType[P]>
            : GetScalarType<T[P], VisitaGroupByOutputType[P]>
        }
      >
    >


  export type VisitaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_visita?: boolean
    client_sync_id?: boolean
    id_ruta_cliente?: boolean
    id_cliente?: boolean
    id_asesor?: boolean
    tipo_visita?: boolean
    fecha_hora_checkin?: boolean
    fecha_hora_checkout?: boolean
    latitud?: boolean
    longitud?: boolean
    resultado?: boolean
    es_efectiva?: boolean
    monto_recaudado?: boolean
    fecha_promesa?: boolean
    observaciones?: boolean
    foto_url?: boolean
    foto_adicional_url?: boolean
    video_url?: boolean
    foto_evidencia?: boolean
    firma_evidencia?: boolean
    fecha_creacion?: boolean
    fecha_actualizar?: boolean
    ruta_cliente?: boolean | Visita$ruta_clienteArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    asesor?: boolean | AsesorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visita"]>

  export type VisitaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_visita?: boolean
    client_sync_id?: boolean
    id_ruta_cliente?: boolean
    id_cliente?: boolean
    id_asesor?: boolean
    tipo_visita?: boolean
    fecha_hora_checkin?: boolean
    fecha_hora_checkout?: boolean
    latitud?: boolean
    longitud?: boolean
    resultado?: boolean
    es_efectiva?: boolean
    monto_recaudado?: boolean
    fecha_promesa?: boolean
    observaciones?: boolean
    foto_url?: boolean
    foto_adicional_url?: boolean
    video_url?: boolean
    foto_evidencia?: boolean
    firma_evidencia?: boolean
    fecha_creacion?: boolean
    fecha_actualizar?: boolean
    ruta_cliente?: boolean | Visita$ruta_clienteArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    asesor?: boolean | AsesorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visita"]>

  export type VisitaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_visita?: boolean
    client_sync_id?: boolean
    id_ruta_cliente?: boolean
    id_cliente?: boolean
    id_asesor?: boolean
    tipo_visita?: boolean
    fecha_hora_checkin?: boolean
    fecha_hora_checkout?: boolean
    latitud?: boolean
    longitud?: boolean
    resultado?: boolean
    es_efectiva?: boolean
    monto_recaudado?: boolean
    fecha_promesa?: boolean
    observaciones?: boolean
    foto_url?: boolean
    foto_adicional_url?: boolean
    video_url?: boolean
    foto_evidencia?: boolean
    firma_evidencia?: boolean
    fecha_creacion?: boolean
    fecha_actualizar?: boolean
    ruta_cliente?: boolean | Visita$ruta_clienteArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    asesor?: boolean | AsesorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visita"]>

  export type VisitaSelectScalar = {
    id_visita?: boolean
    client_sync_id?: boolean
    id_ruta_cliente?: boolean
    id_cliente?: boolean
    id_asesor?: boolean
    tipo_visita?: boolean
    fecha_hora_checkin?: boolean
    fecha_hora_checkout?: boolean
    latitud?: boolean
    longitud?: boolean
    resultado?: boolean
    es_efectiva?: boolean
    monto_recaudado?: boolean
    fecha_promesa?: boolean
    observaciones?: boolean
    foto_url?: boolean
    foto_adicional_url?: boolean
    video_url?: boolean
    foto_evidencia?: boolean
    firma_evidencia?: boolean
    fecha_creacion?: boolean
    fecha_actualizar?: boolean
  }

  export type VisitaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_visita" | "client_sync_id" | "id_ruta_cliente" | "id_cliente" | "id_asesor" | "tipo_visita" | "fecha_hora_checkin" | "fecha_hora_checkout" | "latitud" | "longitud" | "resultado" | "es_efectiva" | "monto_recaudado" | "fecha_promesa" | "observaciones" | "foto_url" | "foto_adicional_url" | "video_url" | "foto_evidencia" | "firma_evidencia" | "fecha_creacion" | "fecha_actualizar", ExtArgs["result"]["visita"]>
  export type VisitaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ruta_cliente?: boolean | Visita$ruta_clienteArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    asesor?: boolean | AsesorDefaultArgs<ExtArgs>
  }
  export type VisitaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ruta_cliente?: boolean | Visita$ruta_clienteArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    asesor?: boolean | AsesorDefaultArgs<ExtArgs>
  }
  export type VisitaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ruta_cliente?: boolean | Visita$ruta_clienteArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    asesor?: boolean | AsesorDefaultArgs<ExtArgs>
  }

  export type $VisitaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Visita"
    objects: {
      ruta_cliente: Prisma.$RutaClientePayload<ExtArgs> | null
      cliente: Prisma.$ClientePayload<ExtArgs>
      asesor: Prisma.$AsesorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_visita: number
      client_sync_id: string | null
      id_ruta_cliente: number | null
      id_cliente: number
      id_asesor: number
      tipo_visita: string
      fecha_hora_checkin: Date
      fecha_hora_checkout: Date | null
      latitud: Prisma.Decimal
      longitud: Prisma.Decimal
      resultado: string
      es_efectiva: boolean
      monto_recaudado: Prisma.Decimal | null
      fecha_promesa: Date | null
      observaciones: string | null
      foto_url: string | null
      foto_adicional_url: string | null
      video_url: string | null
      foto_evidencia: string | null
      firma_evidencia: string | null
      fecha_creacion: Date
      fecha_actualizar: Date
    }, ExtArgs["result"]["visita"]>
    composites: {}
  }

  type VisitaGetPayload<S extends boolean | null | undefined | VisitaDefaultArgs> = $Result.GetResult<Prisma.$VisitaPayload, S>

  type VisitaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VisitaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VisitaCountAggregateInputType | true
    }

  export interface VisitaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Visita'], meta: { name: 'Visita' } }
    /**
     * Find zero or one Visita that matches the filter.
     * @param {VisitaFindUniqueArgs} args - Arguments to find a Visita
     * @example
     * // Get one Visita
     * const visita = await prisma.visita.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VisitaFindUniqueArgs>(args: SelectSubset<T, VisitaFindUniqueArgs<ExtArgs>>): Prisma__VisitaClient<$Result.GetResult<Prisma.$VisitaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Visita that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VisitaFindUniqueOrThrowArgs} args - Arguments to find a Visita
     * @example
     * // Get one Visita
     * const visita = await prisma.visita.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VisitaFindUniqueOrThrowArgs>(args: SelectSubset<T, VisitaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VisitaClient<$Result.GetResult<Prisma.$VisitaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Visita that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitaFindFirstArgs} args - Arguments to find a Visita
     * @example
     * // Get one Visita
     * const visita = await prisma.visita.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VisitaFindFirstArgs>(args?: SelectSubset<T, VisitaFindFirstArgs<ExtArgs>>): Prisma__VisitaClient<$Result.GetResult<Prisma.$VisitaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Visita that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitaFindFirstOrThrowArgs} args - Arguments to find a Visita
     * @example
     * // Get one Visita
     * const visita = await prisma.visita.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VisitaFindFirstOrThrowArgs>(args?: SelectSubset<T, VisitaFindFirstOrThrowArgs<ExtArgs>>): Prisma__VisitaClient<$Result.GetResult<Prisma.$VisitaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Visitas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Visitas
     * const visitas = await prisma.visita.findMany()
     * 
     * // Get first 10 Visitas
     * const visitas = await prisma.visita.findMany({ take: 10 })
     * 
     * // Only select the `id_visita`
     * const visitaWithId_visitaOnly = await prisma.visita.findMany({ select: { id_visita: true } })
     * 
     */
    findMany<T extends VisitaFindManyArgs>(args?: SelectSubset<T, VisitaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Visita.
     * @param {VisitaCreateArgs} args - Arguments to create a Visita.
     * @example
     * // Create one Visita
     * const Visita = await prisma.visita.create({
     *   data: {
     *     // ... data to create a Visita
     *   }
     * })
     * 
     */
    create<T extends VisitaCreateArgs>(args: SelectSubset<T, VisitaCreateArgs<ExtArgs>>): Prisma__VisitaClient<$Result.GetResult<Prisma.$VisitaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Visitas.
     * @param {VisitaCreateManyArgs} args - Arguments to create many Visitas.
     * @example
     * // Create many Visitas
     * const visita = await prisma.visita.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VisitaCreateManyArgs>(args?: SelectSubset<T, VisitaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Visitas and returns the data saved in the database.
     * @param {VisitaCreateManyAndReturnArgs} args - Arguments to create many Visitas.
     * @example
     * // Create many Visitas
     * const visita = await prisma.visita.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Visitas and only return the `id_visita`
     * const visitaWithId_visitaOnly = await prisma.visita.createManyAndReturn({
     *   select: { id_visita: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VisitaCreateManyAndReturnArgs>(args?: SelectSubset<T, VisitaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Visita.
     * @param {VisitaDeleteArgs} args - Arguments to delete one Visita.
     * @example
     * // Delete one Visita
     * const Visita = await prisma.visita.delete({
     *   where: {
     *     // ... filter to delete one Visita
     *   }
     * })
     * 
     */
    delete<T extends VisitaDeleteArgs>(args: SelectSubset<T, VisitaDeleteArgs<ExtArgs>>): Prisma__VisitaClient<$Result.GetResult<Prisma.$VisitaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Visita.
     * @param {VisitaUpdateArgs} args - Arguments to update one Visita.
     * @example
     * // Update one Visita
     * const visita = await prisma.visita.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VisitaUpdateArgs>(args: SelectSubset<T, VisitaUpdateArgs<ExtArgs>>): Prisma__VisitaClient<$Result.GetResult<Prisma.$VisitaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Visitas.
     * @param {VisitaDeleteManyArgs} args - Arguments to filter Visitas to delete.
     * @example
     * // Delete a few Visitas
     * const { count } = await prisma.visita.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VisitaDeleteManyArgs>(args?: SelectSubset<T, VisitaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Visitas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Visitas
     * const visita = await prisma.visita.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VisitaUpdateManyArgs>(args: SelectSubset<T, VisitaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Visitas and returns the data updated in the database.
     * @param {VisitaUpdateManyAndReturnArgs} args - Arguments to update many Visitas.
     * @example
     * // Update many Visitas
     * const visita = await prisma.visita.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Visitas and only return the `id_visita`
     * const visitaWithId_visitaOnly = await prisma.visita.updateManyAndReturn({
     *   select: { id_visita: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VisitaUpdateManyAndReturnArgs>(args: SelectSubset<T, VisitaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Visita.
     * @param {VisitaUpsertArgs} args - Arguments to update or create a Visita.
     * @example
     * // Update or create a Visita
     * const visita = await prisma.visita.upsert({
     *   create: {
     *     // ... data to create a Visita
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Visita we want to update
     *   }
     * })
     */
    upsert<T extends VisitaUpsertArgs>(args: SelectSubset<T, VisitaUpsertArgs<ExtArgs>>): Prisma__VisitaClient<$Result.GetResult<Prisma.$VisitaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Visitas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitaCountArgs} args - Arguments to filter Visitas to count.
     * @example
     * // Count the number of Visitas
     * const count = await prisma.visita.count({
     *   where: {
     *     // ... the filter for the Visitas we want to count
     *   }
     * })
    **/
    count<T extends VisitaCountArgs>(
      args?: Subset<T, VisitaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VisitaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Visita.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VisitaAggregateArgs>(args: Subset<T, VisitaAggregateArgs>): Prisma.PrismaPromise<GetVisitaAggregateType<T>>

    /**
     * Group by Visita.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VisitaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VisitaGroupByArgs['orderBy'] }
        : { orderBy?: VisitaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VisitaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisitaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Visita model
   */
  readonly fields: VisitaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Visita.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VisitaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ruta_cliente<T extends Visita$ruta_clienteArgs<ExtArgs> = {}>(args?: Subset<T, Visita$ruta_clienteArgs<ExtArgs>>): Prisma__RutaClienteClient<$Result.GetResult<Prisma.$RutaClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    asesor<T extends AsesorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AsesorDefaultArgs<ExtArgs>>): Prisma__AsesorClient<$Result.GetResult<Prisma.$AsesorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Visita model
   */
  interface VisitaFieldRefs {
    readonly id_visita: FieldRef<"Visita", 'Int'>
    readonly client_sync_id: FieldRef<"Visita", 'String'>
    readonly id_ruta_cliente: FieldRef<"Visita", 'Int'>
    readonly id_cliente: FieldRef<"Visita", 'Int'>
    readonly id_asesor: FieldRef<"Visita", 'Int'>
    readonly tipo_visita: FieldRef<"Visita", 'String'>
    readonly fecha_hora_checkin: FieldRef<"Visita", 'DateTime'>
    readonly fecha_hora_checkout: FieldRef<"Visita", 'DateTime'>
    readonly latitud: FieldRef<"Visita", 'Decimal'>
    readonly longitud: FieldRef<"Visita", 'Decimal'>
    readonly resultado: FieldRef<"Visita", 'String'>
    readonly es_efectiva: FieldRef<"Visita", 'Boolean'>
    readonly monto_recaudado: FieldRef<"Visita", 'Decimal'>
    readonly fecha_promesa: FieldRef<"Visita", 'DateTime'>
    readonly observaciones: FieldRef<"Visita", 'String'>
    readonly foto_url: FieldRef<"Visita", 'String'>
    readonly foto_adicional_url: FieldRef<"Visita", 'String'>
    readonly video_url: FieldRef<"Visita", 'String'>
    readonly foto_evidencia: FieldRef<"Visita", 'String'>
    readonly firma_evidencia: FieldRef<"Visita", 'String'>
    readonly fecha_creacion: FieldRef<"Visita", 'DateTime'>
    readonly fecha_actualizar: FieldRef<"Visita", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Visita findUnique
   */
  export type VisitaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visita
     */
    select?: VisitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visita
     */
    omit?: VisitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitaInclude<ExtArgs> | null
    /**
     * Filter, which Visita to fetch.
     */
    where: VisitaWhereUniqueInput
  }

  /**
   * Visita findUniqueOrThrow
   */
  export type VisitaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visita
     */
    select?: VisitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visita
     */
    omit?: VisitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitaInclude<ExtArgs> | null
    /**
     * Filter, which Visita to fetch.
     */
    where: VisitaWhereUniqueInput
  }

  /**
   * Visita findFirst
   */
  export type VisitaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visita
     */
    select?: VisitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visita
     */
    omit?: VisitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitaInclude<ExtArgs> | null
    /**
     * Filter, which Visita to fetch.
     */
    where?: VisitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visitas to fetch.
     */
    orderBy?: VisitaOrderByWithRelationInput | VisitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Visitas.
     */
    cursor?: VisitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visitas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Visitas.
     */
    distinct?: VisitaScalarFieldEnum | VisitaScalarFieldEnum[]
  }

  /**
   * Visita findFirstOrThrow
   */
  export type VisitaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visita
     */
    select?: VisitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visita
     */
    omit?: VisitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitaInclude<ExtArgs> | null
    /**
     * Filter, which Visita to fetch.
     */
    where?: VisitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visitas to fetch.
     */
    orderBy?: VisitaOrderByWithRelationInput | VisitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Visitas.
     */
    cursor?: VisitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visitas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Visitas.
     */
    distinct?: VisitaScalarFieldEnum | VisitaScalarFieldEnum[]
  }

  /**
   * Visita findMany
   */
  export type VisitaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visita
     */
    select?: VisitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visita
     */
    omit?: VisitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitaInclude<ExtArgs> | null
    /**
     * Filter, which Visitas to fetch.
     */
    where?: VisitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visitas to fetch.
     */
    orderBy?: VisitaOrderByWithRelationInput | VisitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Visitas.
     */
    cursor?: VisitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visitas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Visitas.
     */
    distinct?: VisitaScalarFieldEnum | VisitaScalarFieldEnum[]
  }

  /**
   * Visita create
   */
  export type VisitaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visita
     */
    select?: VisitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visita
     */
    omit?: VisitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitaInclude<ExtArgs> | null
    /**
     * The data needed to create a Visita.
     */
    data: XOR<VisitaCreateInput, VisitaUncheckedCreateInput>
  }

  /**
   * Visita createMany
   */
  export type VisitaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Visitas.
     */
    data: VisitaCreateManyInput | VisitaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Visita createManyAndReturn
   */
  export type VisitaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visita
     */
    select?: VisitaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Visita
     */
    omit?: VisitaOmit<ExtArgs> | null
    /**
     * The data used to create many Visitas.
     */
    data: VisitaCreateManyInput | VisitaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Visita update
   */
  export type VisitaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visita
     */
    select?: VisitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visita
     */
    omit?: VisitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitaInclude<ExtArgs> | null
    /**
     * The data needed to update a Visita.
     */
    data: XOR<VisitaUpdateInput, VisitaUncheckedUpdateInput>
    /**
     * Choose, which Visita to update.
     */
    where: VisitaWhereUniqueInput
  }

  /**
   * Visita updateMany
   */
  export type VisitaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Visitas.
     */
    data: XOR<VisitaUpdateManyMutationInput, VisitaUncheckedUpdateManyInput>
    /**
     * Filter which Visitas to update
     */
    where?: VisitaWhereInput
    /**
     * Limit how many Visitas to update.
     */
    limit?: number
  }

  /**
   * Visita updateManyAndReturn
   */
  export type VisitaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visita
     */
    select?: VisitaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Visita
     */
    omit?: VisitaOmit<ExtArgs> | null
    /**
     * The data used to update Visitas.
     */
    data: XOR<VisitaUpdateManyMutationInput, VisitaUncheckedUpdateManyInput>
    /**
     * Filter which Visitas to update
     */
    where?: VisitaWhereInput
    /**
     * Limit how many Visitas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Visita upsert
   */
  export type VisitaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visita
     */
    select?: VisitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visita
     */
    omit?: VisitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitaInclude<ExtArgs> | null
    /**
     * The filter to search for the Visita to update in case it exists.
     */
    where: VisitaWhereUniqueInput
    /**
     * In case the Visita found by the `where` argument doesn't exist, create a new Visita with this data.
     */
    create: XOR<VisitaCreateInput, VisitaUncheckedCreateInput>
    /**
     * In case the Visita was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VisitaUpdateInput, VisitaUncheckedUpdateInput>
  }

  /**
   * Visita delete
   */
  export type VisitaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visita
     */
    select?: VisitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visita
     */
    omit?: VisitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitaInclude<ExtArgs> | null
    /**
     * Filter which Visita to delete.
     */
    where: VisitaWhereUniqueInput
  }

  /**
   * Visita deleteMany
   */
  export type VisitaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Visitas to delete
     */
    where?: VisitaWhereInput
    /**
     * Limit how many Visitas to delete.
     */
    limit?: number
  }

  /**
   * Visita.ruta_cliente
   */
  export type Visita$ruta_clienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutaCliente
     */
    select?: RutaClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutaCliente
     */
    omit?: RutaClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutaClienteInclude<ExtArgs> | null
    where?: RutaClienteWhereInput
  }

  /**
   * Visita without action
   */
  export type VisitaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visita
     */
    select?: VisitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visita
     */
    omit?: VisitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitaInclude<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id_asesor: number | null
    token_version: number | null
    intentos_fallidos: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id_asesor: number | null
    token_version: number | null
    intentos_fallidos: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id_usuario: string | null
    username: string | null
    nombres: string | null
    apellidos: string | null
    email: string | null
    sede: string | null
    password_hash: string | null
    rol: string | null
    estado: string | null
    id_asesor: number | null
    fecha_creacion: Date | null
    mfa_habilitado: boolean | null
    mfa_requerido: boolean | null
    mfa_exento: boolean | null
    mfa_secreto: string | null
    mfa_ultimo_uso: Date | null
    token_version: number | null
    intentos_fallidos: number | null
    bloqueado_hasta: Date | null
    ultimo_acceso: Date | null
    password_cambio: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id_usuario: string | null
    username: string | null
    nombres: string | null
    apellidos: string | null
    email: string | null
    sede: string | null
    password_hash: string | null
    rol: string | null
    estado: string | null
    id_asesor: number | null
    fecha_creacion: Date | null
    mfa_habilitado: boolean | null
    mfa_requerido: boolean | null
    mfa_exento: boolean | null
    mfa_secreto: string | null
    mfa_ultimo_uso: Date | null
    token_version: number | null
    intentos_fallidos: number | null
    bloqueado_hasta: Date | null
    ultimo_acceso: Date | null
    password_cambio: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id_usuario: number
    username: number
    nombres: number
    apellidos: number
    email: number
    sede: number
    password_hash: number
    rol: number
    estado: number
    id_asesor: number
    fecha_creacion: number
    mfa_habilitado: number
    mfa_requerido: number
    mfa_exento: number
    mfa_secreto: number
    mfa_ultimo_uso: number
    token_version: number
    intentos_fallidos: number
    bloqueado_hasta: number
    ultimo_acceso: number
    password_cambio: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id_asesor?: true
    token_version?: true
    intentos_fallidos?: true
  }

  export type UsuarioSumAggregateInputType = {
    id_asesor?: true
    token_version?: true
    intentos_fallidos?: true
  }

  export type UsuarioMinAggregateInputType = {
    id_usuario?: true
    username?: true
    nombres?: true
    apellidos?: true
    email?: true
    sede?: true
    password_hash?: true
    rol?: true
    estado?: true
    id_asesor?: true
    fecha_creacion?: true
    mfa_habilitado?: true
    mfa_requerido?: true
    mfa_exento?: true
    mfa_secreto?: true
    mfa_ultimo_uso?: true
    token_version?: true
    intentos_fallidos?: true
    bloqueado_hasta?: true
    ultimo_acceso?: true
    password_cambio?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id_usuario?: true
    username?: true
    nombres?: true
    apellidos?: true
    email?: true
    sede?: true
    password_hash?: true
    rol?: true
    estado?: true
    id_asesor?: true
    fecha_creacion?: true
    mfa_habilitado?: true
    mfa_requerido?: true
    mfa_exento?: true
    mfa_secreto?: true
    mfa_ultimo_uso?: true
    token_version?: true
    intentos_fallidos?: true
    bloqueado_hasta?: true
    ultimo_acceso?: true
    password_cambio?: true
  }

  export type UsuarioCountAggregateInputType = {
    id_usuario?: true
    username?: true
    nombres?: true
    apellidos?: true
    email?: true
    sede?: true
    password_hash?: true
    rol?: true
    estado?: true
    id_asesor?: true
    fecha_creacion?: true
    mfa_habilitado?: true
    mfa_requerido?: true
    mfa_exento?: true
    mfa_secreto?: true
    mfa_ultimo_uso?: true
    token_version?: true
    intentos_fallidos?: true
    bloqueado_hasta?: true
    ultimo_acceso?: true
    password_cambio?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id_usuario: string
    username: string
    nombres: string | null
    apellidos: string | null
    email: string | null
    sede: string | null
    password_hash: string
    rol: string
    estado: string
    id_asesor: number | null
    fecha_creacion: Date
    mfa_habilitado: boolean
    mfa_requerido: boolean
    mfa_exento: boolean
    mfa_secreto: string | null
    mfa_ultimo_uso: Date | null
    token_version: number
    intentos_fallidos: number
    bloqueado_hasta: Date | null
    ultimo_acceso: Date | null
    password_cambio: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    username?: boolean
    nombres?: boolean
    apellidos?: boolean
    email?: boolean
    sede?: boolean
    password_hash?: boolean
    rol?: boolean
    estado?: boolean
    id_asesor?: boolean
    fecha_creacion?: boolean
    mfa_habilitado?: boolean
    mfa_requerido?: boolean
    mfa_exento?: boolean
    mfa_secreto?: boolean
    mfa_ultimo_uso?: boolean
    token_version?: boolean
    intentos_fallidos?: boolean
    bloqueado_hasta?: boolean
    ultimo_acceso?: boolean
    password_cambio?: boolean
    asesor?: boolean | Usuario$asesorArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    username?: boolean
    nombres?: boolean
    apellidos?: boolean
    email?: boolean
    sede?: boolean
    password_hash?: boolean
    rol?: boolean
    estado?: boolean
    id_asesor?: boolean
    fecha_creacion?: boolean
    mfa_habilitado?: boolean
    mfa_requerido?: boolean
    mfa_exento?: boolean
    mfa_secreto?: boolean
    mfa_ultimo_uso?: boolean
    token_version?: boolean
    intentos_fallidos?: boolean
    bloqueado_hasta?: boolean
    ultimo_acceso?: boolean
    password_cambio?: boolean
    asesor?: boolean | Usuario$asesorArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    username?: boolean
    nombres?: boolean
    apellidos?: boolean
    email?: boolean
    sede?: boolean
    password_hash?: boolean
    rol?: boolean
    estado?: boolean
    id_asesor?: boolean
    fecha_creacion?: boolean
    mfa_habilitado?: boolean
    mfa_requerido?: boolean
    mfa_exento?: boolean
    mfa_secreto?: boolean
    mfa_ultimo_uso?: boolean
    token_version?: boolean
    intentos_fallidos?: boolean
    bloqueado_hasta?: boolean
    ultimo_acceso?: boolean
    password_cambio?: boolean
    asesor?: boolean | Usuario$asesorArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id_usuario?: boolean
    username?: boolean
    nombres?: boolean
    apellidos?: boolean
    email?: boolean
    sede?: boolean
    password_hash?: boolean
    rol?: boolean
    estado?: boolean
    id_asesor?: boolean
    fecha_creacion?: boolean
    mfa_habilitado?: boolean
    mfa_requerido?: boolean
    mfa_exento?: boolean
    mfa_secreto?: boolean
    mfa_ultimo_uso?: boolean
    token_version?: boolean
    intentos_fallidos?: boolean
    bloqueado_hasta?: boolean
    ultimo_acceso?: boolean
    password_cambio?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_usuario" | "username" | "nombres" | "apellidos" | "email" | "sede" | "password_hash" | "rol" | "estado" | "id_asesor" | "fecha_creacion" | "mfa_habilitado" | "mfa_requerido" | "mfa_exento" | "mfa_secreto" | "mfa_ultimo_uso" | "token_version" | "intentos_fallidos" | "bloqueado_hasta" | "ultimo_acceso" | "password_cambio", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asesor?: boolean | Usuario$asesorArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asesor?: boolean | Usuario$asesorArgs<ExtArgs>
  }
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asesor?: boolean | Usuario$asesorArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      asesor: Prisma.$AsesorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: string
      username: string
      nombres: string | null
      apellidos: string | null
      email: string | null
      sede: string | null
      password_hash: string
      rol: string
      estado: string
      id_asesor: number | null
      fecha_creacion: Date
      mfa_habilitado: boolean
      mfa_requerido: boolean
      mfa_exento: boolean
      mfa_secreto: string | null
      mfa_ultimo_uso: Date | null
      token_version: number
      intentos_fallidos: number
      bloqueado_hasta: Date | null
      ultimo_acceso: Date | null
      password_cambio: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id_usuario: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id_usuario: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    asesor<T extends Usuario$asesorArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$asesorArgs<ExtArgs>>): Prisma__AsesorClient<$Result.GetResult<Prisma.$AsesorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id_usuario: FieldRef<"Usuario", 'String'>
    readonly username: FieldRef<"Usuario", 'String'>
    readonly nombres: FieldRef<"Usuario", 'String'>
    readonly apellidos: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly sede: FieldRef<"Usuario", 'String'>
    readonly password_hash: FieldRef<"Usuario", 'String'>
    readonly rol: FieldRef<"Usuario", 'String'>
    readonly estado: FieldRef<"Usuario", 'String'>
    readonly id_asesor: FieldRef<"Usuario", 'Int'>
    readonly fecha_creacion: FieldRef<"Usuario", 'DateTime'>
    readonly mfa_habilitado: FieldRef<"Usuario", 'Boolean'>
    readonly mfa_requerido: FieldRef<"Usuario", 'Boolean'>
    readonly mfa_exento: FieldRef<"Usuario", 'Boolean'>
    readonly mfa_secreto: FieldRef<"Usuario", 'String'>
    readonly mfa_ultimo_uso: FieldRef<"Usuario", 'DateTime'>
    readonly token_version: FieldRef<"Usuario", 'Int'>
    readonly intentos_fallidos: FieldRef<"Usuario", 'Int'>
    readonly bloqueado_hasta: FieldRef<"Usuario", 'DateTime'>
    readonly ultimo_acceso: FieldRef<"Usuario", 'DateTime'>
    readonly password_cambio: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.asesor
   */
  export type Usuario$asesorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asesor
     */
    select?: AsesorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asesor
     */
    omit?: AsesorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsesorInclude<ExtArgs> | null
    where?: AsesorWhereInput
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model AuditoriaSeguridad
   */

  export type AggregateAuditoriaSeguridad = {
    _count: AuditoriaSeguridadCountAggregateOutputType | null
    _avg: AuditoriaSeguridadAvgAggregateOutputType | null
    _sum: AuditoriaSeguridadSumAggregateOutputType | null
    _min: AuditoriaSeguridadMinAggregateOutputType | null
    _max: AuditoriaSeguridadMaxAggregateOutputType | null
  }

  export type AuditoriaSeguridadAvgAggregateOutputType = {
    estado_http: number | null
  }

  export type AuditoriaSeguridadSumAggregateOutputType = {
    estado_http: number | null
  }

  export type AuditoriaSeguridadMinAggregateOutputType = {
    id_auditoria: string | null
    fecha: Date | null
    request_id: string | null
    actor_id: string | null
    actor: string | null
    rol: string | null
    metodo: string | null
    ruta: string | null
    estado_http: number | null
    ip_address: string | null
    ip_hash: string | null
    user_agent: string | null
  }

  export type AuditoriaSeguridadMaxAggregateOutputType = {
    id_auditoria: string | null
    fecha: Date | null
    request_id: string | null
    actor_id: string | null
    actor: string | null
    rol: string | null
    metodo: string | null
    ruta: string | null
    estado_http: number | null
    ip_address: string | null
    ip_hash: string | null
    user_agent: string | null
  }

  export type AuditoriaSeguridadCountAggregateOutputType = {
    id_auditoria: number
    fecha: number
    request_id: number
    actor_id: number
    actor: number
    rol: number
    metodo: number
    ruta: number
    estado_http: number
    ip_address: number
    ip_hash: number
    user_agent: number
    _all: number
  }


  export type AuditoriaSeguridadAvgAggregateInputType = {
    estado_http?: true
  }

  export type AuditoriaSeguridadSumAggregateInputType = {
    estado_http?: true
  }

  export type AuditoriaSeguridadMinAggregateInputType = {
    id_auditoria?: true
    fecha?: true
    request_id?: true
    actor_id?: true
    actor?: true
    rol?: true
    metodo?: true
    ruta?: true
    estado_http?: true
    ip_address?: true
    ip_hash?: true
    user_agent?: true
  }

  export type AuditoriaSeguridadMaxAggregateInputType = {
    id_auditoria?: true
    fecha?: true
    request_id?: true
    actor_id?: true
    actor?: true
    rol?: true
    metodo?: true
    ruta?: true
    estado_http?: true
    ip_address?: true
    ip_hash?: true
    user_agent?: true
  }

  export type AuditoriaSeguridadCountAggregateInputType = {
    id_auditoria?: true
    fecha?: true
    request_id?: true
    actor_id?: true
    actor?: true
    rol?: true
    metodo?: true
    ruta?: true
    estado_http?: true
    ip_address?: true
    ip_hash?: true
    user_agent?: true
    _all?: true
  }

  export type AuditoriaSeguridadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditoriaSeguridad to aggregate.
     */
    where?: AuditoriaSeguridadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditoriaSeguridads to fetch.
     */
    orderBy?: AuditoriaSeguridadOrderByWithRelationInput | AuditoriaSeguridadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditoriaSeguridadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditoriaSeguridads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditoriaSeguridads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditoriaSeguridads
    **/
    _count?: true | AuditoriaSeguridadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuditoriaSeguridadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuditoriaSeguridadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditoriaSeguridadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditoriaSeguridadMaxAggregateInputType
  }

  export type GetAuditoriaSeguridadAggregateType<T extends AuditoriaSeguridadAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditoriaSeguridad]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditoriaSeguridad[P]>
      : GetScalarType<T[P], AggregateAuditoriaSeguridad[P]>
  }




  export type AuditoriaSeguridadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditoriaSeguridadWhereInput
    orderBy?: AuditoriaSeguridadOrderByWithAggregationInput | AuditoriaSeguridadOrderByWithAggregationInput[]
    by: AuditoriaSeguridadScalarFieldEnum[] | AuditoriaSeguridadScalarFieldEnum
    having?: AuditoriaSeguridadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditoriaSeguridadCountAggregateInputType | true
    _avg?: AuditoriaSeguridadAvgAggregateInputType
    _sum?: AuditoriaSeguridadSumAggregateInputType
    _min?: AuditoriaSeguridadMinAggregateInputType
    _max?: AuditoriaSeguridadMaxAggregateInputType
  }

  export type AuditoriaSeguridadGroupByOutputType = {
    id_auditoria: string
    fecha: Date
    request_id: string | null
    actor_id: string | null
    actor: string | null
    rol: string | null
    metodo: string
    ruta: string
    estado_http: number
    ip_address: string | null
    ip_hash: string | null
    user_agent: string | null
    _count: AuditoriaSeguridadCountAggregateOutputType | null
    _avg: AuditoriaSeguridadAvgAggregateOutputType | null
    _sum: AuditoriaSeguridadSumAggregateOutputType | null
    _min: AuditoriaSeguridadMinAggregateOutputType | null
    _max: AuditoriaSeguridadMaxAggregateOutputType | null
  }

  type GetAuditoriaSeguridadGroupByPayload<T extends AuditoriaSeguridadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditoriaSeguridadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditoriaSeguridadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditoriaSeguridadGroupByOutputType[P]>
            : GetScalarType<T[P], AuditoriaSeguridadGroupByOutputType[P]>
        }
      >
    >


  export type AuditoriaSeguridadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_auditoria?: boolean
    fecha?: boolean
    request_id?: boolean
    actor_id?: boolean
    actor?: boolean
    rol?: boolean
    metodo?: boolean
    ruta?: boolean
    estado_http?: boolean
    ip_address?: boolean
    ip_hash?: boolean
    user_agent?: boolean
  }, ExtArgs["result"]["auditoriaSeguridad"]>

  export type AuditoriaSeguridadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_auditoria?: boolean
    fecha?: boolean
    request_id?: boolean
    actor_id?: boolean
    actor?: boolean
    rol?: boolean
    metodo?: boolean
    ruta?: boolean
    estado_http?: boolean
    ip_address?: boolean
    ip_hash?: boolean
    user_agent?: boolean
  }, ExtArgs["result"]["auditoriaSeguridad"]>

  export type AuditoriaSeguridadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_auditoria?: boolean
    fecha?: boolean
    request_id?: boolean
    actor_id?: boolean
    actor?: boolean
    rol?: boolean
    metodo?: boolean
    ruta?: boolean
    estado_http?: boolean
    ip_address?: boolean
    ip_hash?: boolean
    user_agent?: boolean
  }, ExtArgs["result"]["auditoriaSeguridad"]>

  export type AuditoriaSeguridadSelectScalar = {
    id_auditoria?: boolean
    fecha?: boolean
    request_id?: boolean
    actor_id?: boolean
    actor?: boolean
    rol?: boolean
    metodo?: boolean
    ruta?: boolean
    estado_http?: boolean
    ip_address?: boolean
    ip_hash?: boolean
    user_agent?: boolean
  }

  export type AuditoriaSeguridadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_auditoria" | "fecha" | "request_id" | "actor_id" | "actor" | "rol" | "metodo" | "ruta" | "estado_http" | "ip_address" | "ip_hash" | "user_agent", ExtArgs["result"]["auditoriaSeguridad"]>

  export type $AuditoriaSeguridadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditoriaSeguridad"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_auditoria: string
      fecha: Date
      request_id: string | null
      actor_id: string | null
      actor: string | null
      rol: string | null
      metodo: string
      ruta: string
      estado_http: number
      ip_address: string | null
      ip_hash: string | null
      user_agent: string | null
    }, ExtArgs["result"]["auditoriaSeguridad"]>
    composites: {}
  }

  type AuditoriaSeguridadGetPayload<S extends boolean | null | undefined | AuditoriaSeguridadDefaultArgs> = $Result.GetResult<Prisma.$AuditoriaSeguridadPayload, S>

  type AuditoriaSeguridadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditoriaSeguridadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditoriaSeguridadCountAggregateInputType | true
    }

  export interface AuditoriaSeguridadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditoriaSeguridad'], meta: { name: 'AuditoriaSeguridad' } }
    /**
     * Find zero or one AuditoriaSeguridad that matches the filter.
     * @param {AuditoriaSeguridadFindUniqueArgs} args - Arguments to find a AuditoriaSeguridad
     * @example
     * // Get one AuditoriaSeguridad
     * const auditoriaSeguridad = await prisma.auditoriaSeguridad.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditoriaSeguridadFindUniqueArgs>(args: SelectSubset<T, AuditoriaSeguridadFindUniqueArgs<ExtArgs>>): Prisma__AuditoriaSeguridadClient<$Result.GetResult<Prisma.$AuditoriaSeguridadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditoriaSeguridad that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditoriaSeguridadFindUniqueOrThrowArgs} args - Arguments to find a AuditoriaSeguridad
     * @example
     * // Get one AuditoriaSeguridad
     * const auditoriaSeguridad = await prisma.auditoriaSeguridad.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditoriaSeguridadFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditoriaSeguridadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditoriaSeguridadClient<$Result.GetResult<Prisma.$AuditoriaSeguridadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditoriaSeguridad that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditoriaSeguridadFindFirstArgs} args - Arguments to find a AuditoriaSeguridad
     * @example
     * // Get one AuditoriaSeguridad
     * const auditoriaSeguridad = await prisma.auditoriaSeguridad.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditoriaSeguridadFindFirstArgs>(args?: SelectSubset<T, AuditoriaSeguridadFindFirstArgs<ExtArgs>>): Prisma__AuditoriaSeguridadClient<$Result.GetResult<Prisma.$AuditoriaSeguridadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditoriaSeguridad that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditoriaSeguridadFindFirstOrThrowArgs} args - Arguments to find a AuditoriaSeguridad
     * @example
     * // Get one AuditoriaSeguridad
     * const auditoriaSeguridad = await prisma.auditoriaSeguridad.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditoriaSeguridadFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditoriaSeguridadFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditoriaSeguridadClient<$Result.GetResult<Prisma.$AuditoriaSeguridadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditoriaSeguridads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditoriaSeguridadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditoriaSeguridads
     * const auditoriaSeguridads = await prisma.auditoriaSeguridad.findMany()
     * 
     * // Get first 10 AuditoriaSeguridads
     * const auditoriaSeguridads = await prisma.auditoriaSeguridad.findMany({ take: 10 })
     * 
     * // Only select the `id_auditoria`
     * const auditoriaSeguridadWithId_auditoriaOnly = await prisma.auditoriaSeguridad.findMany({ select: { id_auditoria: true } })
     * 
     */
    findMany<T extends AuditoriaSeguridadFindManyArgs>(args?: SelectSubset<T, AuditoriaSeguridadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditoriaSeguridadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditoriaSeguridad.
     * @param {AuditoriaSeguridadCreateArgs} args - Arguments to create a AuditoriaSeguridad.
     * @example
     * // Create one AuditoriaSeguridad
     * const AuditoriaSeguridad = await prisma.auditoriaSeguridad.create({
     *   data: {
     *     // ... data to create a AuditoriaSeguridad
     *   }
     * })
     * 
     */
    create<T extends AuditoriaSeguridadCreateArgs>(args: SelectSubset<T, AuditoriaSeguridadCreateArgs<ExtArgs>>): Prisma__AuditoriaSeguridadClient<$Result.GetResult<Prisma.$AuditoriaSeguridadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditoriaSeguridads.
     * @param {AuditoriaSeguridadCreateManyArgs} args - Arguments to create many AuditoriaSeguridads.
     * @example
     * // Create many AuditoriaSeguridads
     * const auditoriaSeguridad = await prisma.auditoriaSeguridad.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditoriaSeguridadCreateManyArgs>(args?: SelectSubset<T, AuditoriaSeguridadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditoriaSeguridads and returns the data saved in the database.
     * @param {AuditoriaSeguridadCreateManyAndReturnArgs} args - Arguments to create many AuditoriaSeguridads.
     * @example
     * // Create many AuditoriaSeguridads
     * const auditoriaSeguridad = await prisma.auditoriaSeguridad.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditoriaSeguridads and only return the `id_auditoria`
     * const auditoriaSeguridadWithId_auditoriaOnly = await prisma.auditoriaSeguridad.createManyAndReturn({
     *   select: { id_auditoria: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditoriaSeguridadCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditoriaSeguridadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditoriaSeguridadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditoriaSeguridad.
     * @param {AuditoriaSeguridadDeleteArgs} args - Arguments to delete one AuditoriaSeguridad.
     * @example
     * // Delete one AuditoriaSeguridad
     * const AuditoriaSeguridad = await prisma.auditoriaSeguridad.delete({
     *   where: {
     *     // ... filter to delete one AuditoriaSeguridad
     *   }
     * })
     * 
     */
    delete<T extends AuditoriaSeguridadDeleteArgs>(args: SelectSubset<T, AuditoriaSeguridadDeleteArgs<ExtArgs>>): Prisma__AuditoriaSeguridadClient<$Result.GetResult<Prisma.$AuditoriaSeguridadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditoriaSeguridad.
     * @param {AuditoriaSeguridadUpdateArgs} args - Arguments to update one AuditoriaSeguridad.
     * @example
     * // Update one AuditoriaSeguridad
     * const auditoriaSeguridad = await prisma.auditoriaSeguridad.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditoriaSeguridadUpdateArgs>(args: SelectSubset<T, AuditoriaSeguridadUpdateArgs<ExtArgs>>): Prisma__AuditoriaSeguridadClient<$Result.GetResult<Prisma.$AuditoriaSeguridadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditoriaSeguridads.
     * @param {AuditoriaSeguridadDeleteManyArgs} args - Arguments to filter AuditoriaSeguridads to delete.
     * @example
     * // Delete a few AuditoriaSeguridads
     * const { count } = await prisma.auditoriaSeguridad.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditoriaSeguridadDeleteManyArgs>(args?: SelectSubset<T, AuditoriaSeguridadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditoriaSeguridads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditoriaSeguridadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditoriaSeguridads
     * const auditoriaSeguridad = await prisma.auditoriaSeguridad.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditoriaSeguridadUpdateManyArgs>(args: SelectSubset<T, AuditoriaSeguridadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditoriaSeguridads and returns the data updated in the database.
     * @param {AuditoriaSeguridadUpdateManyAndReturnArgs} args - Arguments to update many AuditoriaSeguridads.
     * @example
     * // Update many AuditoriaSeguridads
     * const auditoriaSeguridad = await prisma.auditoriaSeguridad.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditoriaSeguridads and only return the `id_auditoria`
     * const auditoriaSeguridadWithId_auditoriaOnly = await prisma.auditoriaSeguridad.updateManyAndReturn({
     *   select: { id_auditoria: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditoriaSeguridadUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditoriaSeguridadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditoriaSeguridadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditoriaSeguridad.
     * @param {AuditoriaSeguridadUpsertArgs} args - Arguments to update or create a AuditoriaSeguridad.
     * @example
     * // Update or create a AuditoriaSeguridad
     * const auditoriaSeguridad = await prisma.auditoriaSeguridad.upsert({
     *   create: {
     *     // ... data to create a AuditoriaSeguridad
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditoriaSeguridad we want to update
     *   }
     * })
     */
    upsert<T extends AuditoriaSeguridadUpsertArgs>(args: SelectSubset<T, AuditoriaSeguridadUpsertArgs<ExtArgs>>): Prisma__AuditoriaSeguridadClient<$Result.GetResult<Prisma.$AuditoriaSeguridadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditoriaSeguridads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditoriaSeguridadCountArgs} args - Arguments to filter AuditoriaSeguridads to count.
     * @example
     * // Count the number of AuditoriaSeguridads
     * const count = await prisma.auditoriaSeguridad.count({
     *   where: {
     *     // ... the filter for the AuditoriaSeguridads we want to count
     *   }
     * })
    **/
    count<T extends AuditoriaSeguridadCountArgs>(
      args?: Subset<T, AuditoriaSeguridadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditoriaSeguridadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditoriaSeguridad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditoriaSeguridadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditoriaSeguridadAggregateArgs>(args: Subset<T, AuditoriaSeguridadAggregateArgs>): Prisma.PrismaPromise<GetAuditoriaSeguridadAggregateType<T>>

    /**
     * Group by AuditoriaSeguridad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditoriaSeguridadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditoriaSeguridadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditoriaSeguridadGroupByArgs['orderBy'] }
        : { orderBy?: AuditoriaSeguridadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditoriaSeguridadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditoriaSeguridadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditoriaSeguridad model
   */
  readonly fields: AuditoriaSeguridadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditoriaSeguridad.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditoriaSeguridadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditoriaSeguridad model
   */
  interface AuditoriaSeguridadFieldRefs {
    readonly id_auditoria: FieldRef<"AuditoriaSeguridad", 'String'>
    readonly fecha: FieldRef<"AuditoriaSeguridad", 'DateTime'>
    readonly request_id: FieldRef<"AuditoriaSeguridad", 'String'>
    readonly actor_id: FieldRef<"AuditoriaSeguridad", 'String'>
    readonly actor: FieldRef<"AuditoriaSeguridad", 'String'>
    readonly rol: FieldRef<"AuditoriaSeguridad", 'String'>
    readonly metodo: FieldRef<"AuditoriaSeguridad", 'String'>
    readonly ruta: FieldRef<"AuditoriaSeguridad", 'String'>
    readonly estado_http: FieldRef<"AuditoriaSeguridad", 'Int'>
    readonly ip_address: FieldRef<"AuditoriaSeguridad", 'String'>
    readonly ip_hash: FieldRef<"AuditoriaSeguridad", 'String'>
    readonly user_agent: FieldRef<"AuditoriaSeguridad", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AuditoriaSeguridad findUnique
   */
  export type AuditoriaSeguridadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditoriaSeguridad
     */
    select?: AuditoriaSeguridadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditoriaSeguridad
     */
    omit?: AuditoriaSeguridadOmit<ExtArgs> | null
    /**
     * Filter, which AuditoriaSeguridad to fetch.
     */
    where: AuditoriaSeguridadWhereUniqueInput
  }

  /**
   * AuditoriaSeguridad findUniqueOrThrow
   */
  export type AuditoriaSeguridadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditoriaSeguridad
     */
    select?: AuditoriaSeguridadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditoriaSeguridad
     */
    omit?: AuditoriaSeguridadOmit<ExtArgs> | null
    /**
     * Filter, which AuditoriaSeguridad to fetch.
     */
    where: AuditoriaSeguridadWhereUniqueInput
  }

  /**
   * AuditoriaSeguridad findFirst
   */
  export type AuditoriaSeguridadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditoriaSeguridad
     */
    select?: AuditoriaSeguridadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditoriaSeguridad
     */
    omit?: AuditoriaSeguridadOmit<ExtArgs> | null
    /**
     * Filter, which AuditoriaSeguridad to fetch.
     */
    where?: AuditoriaSeguridadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditoriaSeguridads to fetch.
     */
    orderBy?: AuditoriaSeguridadOrderByWithRelationInput | AuditoriaSeguridadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditoriaSeguridads.
     */
    cursor?: AuditoriaSeguridadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditoriaSeguridads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditoriaSeguridads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditoriaSeguridads.
     */
    distinct?: AuditoriaSeguridadScalarFieldEnum | AuditoriaSeguridadScalarFieldEnum[]
  }

  /**
   * AuditoriaSeguridad findFirstOrThrow
   */
  export type AuditoriaSeguridadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditoriaSeguridad
     */
    select?: AuditoriaSeguridadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditoriaSeguridad
     */
    omit?: AuditoriaSeguridadOmit<ExtArgs> | null
    /**
     * Filter, which AuditoriaSeguridad to fetch.
     */
    where?: AuditoriaSeguridadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditoriaSeguridads to fetch.
     */
    orderBy?: AuditoriaSeguridadOrderByWithRelationInput | AuditoriaSeguridadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditoriaSeguridads.
     */
    cursor?: AuditoriaSeguridadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditoriaSeguridads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditoriaSeguridads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditoriaSeguridads.
     */
    distinct?: AuditoriaSeguridadScalarFieldEnum | AuditoriaSeguridadScalarFieldEnum[]
  }

  /**
   * AuditoriaSeguridad findMany
   */
  export type AuditoriaSeguridadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditoriaSeguridad
     */
    select?: AuditoriaSeguridadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditoriaSeguridad
     */
    omit?: AuditoriaSeguridadOmit<ExtArgs> | null
    /**
     * Filter, which AuditoriaSeguridads to fetch.
     */
    where?: AuditoriaSeguridadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditoriaSeguridads to fetch.
     */
    orderBy?: AuditoriaSeguridadOrderByWithRelationInput | AuditoriaSeguridadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditoriaSeguridads.
     */
    cursor?: AuditoriaSeguridadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditoriaSeguridads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditoriaSeguridads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditoriaSeguridads.
     */
    distinct?: AuditoriaSeguridadScalarFieldEnum | AuditoriaSeguridadScalarFieldEnum[]
  }

  /**
   * AuditoriaSeguridad create
   */
  export type AuditoriaSeguridadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditoriaSeguridad
     */
    select?: AuditoriaSeguridadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditoriaSeguridad
     */
    omit?: AuditoriaSeguridadOmit<ExtArgs> | null
    /**
     * The data needed to create a AuditoriaSeguridad.
     */
    data: XOR<AuditoriaSeguridadCreateInput, AuditoriaSeguridadUncheckedCreateInput>
  }

  /**
   * AuditoriaSeguridad createMany
   */
  export type AuditoriaSeguridadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditoriaSeguridads.
     */
    data: AuditoriaSeguridadCreateManyInput | AuditoriaSeguridadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditoriaSeguridad createManyAndReturn
   */
  export type AuditoriaSeguridadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditoriaSeguridad
     */
    select?: AuditoriaSeguridadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditoriaSeguridad
     */
    omit?: AuditoriaSeguridadOmit<ExtArgs> | null
    /**
     * The data used to create many AuditoriaSeguridads.
     */
    data: AuditoriaSeguridadCreateManyInput | AuditoriaSeguridadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditoriaSeguridad update
   */
  export type AuditoriaSeguridadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditoriaSeguridad
     */
    select?: AuditoriaSeguridadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditoriaSeguridad
     */
    omit?: AuditoriaSeguridadOmit<ExtArgs> | null
    /**
     * The data needed to update a AuditoriaSeguridad.
     */
    data: XOR<AuditoriaSeguridadUpdateInput, AuditoriaSeguridadUncheckedUpdateInput>
    /**
     * Choose, which AuditoriaSeguridad to update.
     */
    where: AuditoriaSeguridadWhereUniqueInput
  }

  /**
   * AuditoriaSeguridad updateMany
   */
  export type AuditoriaSeguridadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditoriaSeguridads.
     */
    data: XOR<AuditoriaSeguridadUpdateManyMutationInput, AuditoriaSeguridadUncheckedUpdateManyInput>
    /**
     * Filter which AuditoriaSeguridads to update
     */
    where?: AuditoriaSeguridadWhereInput
    /**
     * Limit how many AuditoriaSeguridads to update.
     */
    limit?: number
  }

  /**
   * AuditoriaSeguridad updateManyAndReturn
   */
  export type AuditoriaSeguridadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditoriaSeguridad
     */
    select?: AuditoriaSeguridadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditoriaSeguridad
     */
    omit?: AuditoriaSeguridadOmit<ExtArgs> | null
    /**
     * The data used to update AuditoriaSeguridads.
     */
    data: XOR<AuditoriaSeguridadUpdateManyMutationInput, AuditoriaSeguridadUncheckedUpdateManyInput>
    /**
     * Filter which AuditoriaSeguridads to update
     */
    where?: AuditoriaSeguridadWhereInput
    /**
     * Limit how many AuditoriaSeguridads to update.
     */
    limit?: number
  }

  /**
   * AuditoriaSeguridad upsert
   */
  export type AuditoriaSeguridadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditoriaSeguridad
     */
    select?: AuditoriaSeguridadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditoriaSeguridad
     */
    omit?: AuditoriaSeguridadOmit<ExtArgs> | null
    /**
     * The filter to search for the AuditoriaSeguridad to update in case it exists.
     */
    where: AuditoriaSeguridadWhereUniqueInput
    /**
     * In case the AuditoriaSeguridad found by the `where` argument doesn't exist, create a new AuditoriaSeguridad with this data.
     */
    create: XOR<AuditoriaSeguridadCreateInput, AuditoriaSeguridadUncheckedCreateInput>
    /**
     * In case the AuditoriaSeguridad was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditoriaSeguridadUpdateInput, AuditoriaSeguridadUncheckedUpdateInput>
  }

  /**
   * AuditoriaSeguridad delete
   */
  export type AuditoriaSeguridadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditoriaSeguridad
     */
    select?: AuditoriaSeguridadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditoriaSeguridad
     */
    omit?: AuditoriaSeguridadOmit<ExtArgs> | null
    /**
     * Filter which AuditoriaSeguridad to delete.
     */
    where: AuditoriaSeguridadWhereUniqueInput
  }

  /**
   * AuditoriaSeguridad deleteMany
   */
  export type AuditoriaSeguridadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditoriaSeguridads to delete
     */
    where?: AuditoriaSeguridadWhereInput
    /**
     * Limit how many AuditoriaSeguridads to delete.
     */
    limit?: number
  }

  /**
   * AuditoriaSeguridad without action
   */
  export type AuditoriaSeguridadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditoriaSeguridad
     */
    select?: AuditoriaSeguridadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditoriaSeguridad
     */
    omit?: AuditoriaSeguridadOmit<ExtArgs> | null
  }


  /**
   * Model ImportacionMasiva
   */

  export type AggregateImportacionMasiva = {
    _count: ImportacionMasivaCountAggregateOutputType | null
    _avg: ImportacionMasivaAvgAggregateOutputType | null
    _sum: ImportacionMasivaSumAggregateOutputType | null
    _min: ImportacionMasivaMinAggregateOutputType | null
    _max: ImportacionMasivaMaxAggregateOutputType | null
  }

  export type ImportacionMasivaAvgAggregateOutputType = {
    total_filas: number | null
    procesadas: number | null
    insertadas: number | null
    actualizadas: number | null
    omitidas: number | null
    errores: number | null
  }

  export type ImportacionMasivaSumAggregateOutputType = {
    total_filas: number | null
    procesadas: number | null
    insertadas: number | null
    actualizadas: number | null
    omitidas: number | null
    errores: number | null
  }

  export type ImportacionMasivaMinAggregateOutputType = {
    id_importacion: string | null
    tipo: string | null
    estado: string | null
    archivo: string | null
    ruta_temporal: string | null
    actor_id: string | null
    total_filas: number | null
    procesadas: number | null
    insertadas: number | null
    actualizadas: number | null
    omitidas: number | null
    errores: number | null
    fecha_creacion: Date | null
    fecha_inicio: Date | null
    fecha_fin: Date | null
  }

  export type ImportacionMasivaMaxAggregateOutputType = {
    id_importacion: string | null
    tipo: string | null
    estado: string | null
    archivo: string | null
    ruta_temporal: string | null
    actor_id: string | null
    total_filas: number | null
    procesadas: number | null
    insertadas: number | null
    actualizadas: number | null
    omitidas: number | null
    errores: number | null
    fecha_creacion: Date | null
    fecha_inicio: Date | null
    fecha_fin: Date | null
  }

  export type ImportacionMasivaCountAggregateOutputType = {
    id_importacion: number
    tipo: number
    estado: number
    archivo: number
    ruta_temporal: number
    actor_id: number
    total_filas: number
    procesadas: number
    insertadas: number
    actualizadas: number
    omitidas: number
    errores: number
    detalle_error: number
    fecha_creacion: number
    fecha_inicio: number
    fecha_fin: number
    _all: number
  }


  export type ImportacionMasivaAvgAggregateInputType = {
    total_filas?: true
    procesadas?: true
    insertadas?: true
    actualizadas?: true
    omitidas?: true
    errores?: true
  }

  export type ImportacionMasivaSumAggregateInputType = {
    total_filas?: true
    procesadas?: true
    insertadas?: true
    actualizadas?: true
    omitidas?: true
    errores?: true
  }

  export type ImportacionMasivaMinAggregateInputType = {
    id_importacion?: true
    tipo?: true
    estado?: true
    archivo?: true
    ruta_temporal?: true
    actor_id?: true
    total_filas?: true
    procesadas?: true
    insertadas?: true
    actualizadas?: true
    omitidas?: true
    errores?: true
    fecha_creacion?: true
    fecha_inicio?: true
    fecha_fin?: true
  }

  export type ImportacionMasivaMaxAggregateInputType = {
    id_importacion?: true
    tipo?: true
    estado?: true
    archivo?: true
    ruta_temporal?: true
    actor_id?: true
    total_filas?: true
    procesadas?: true
    insertadas?: true
    actualizadas?: true
    omitidas?: true
    errores?: true
    fecha_creacion?: true
    fecha_inicio?: true
    fecha_fin?: true
  }

  export type ImportacionMasivaCountAggregateInputType = {
    id_importacion?: true
    tipo?: true
    estado?: true
    archivo?: true
    ruta_temporal?: true
    actor_id?: true
    total_filas?: true
    procesadas?: true
    insertadas?: true
    actualizadas?: true
    omitidas?: true
    errores?: true
    detalle_error?: true
    fecha_creacion?: true
    fecha_inicio?: true
    fecha_fin?: true
    _all?: true
  }

  export type ImportacionMasivaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImportacionMasiva to aggregate.
     */
    where?: ImportacionMasivaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImportacionMasivas to fetch.
     */
    orderBy?: ImportacionMasivaOrderByWithRelationInput | ImportacionMasivaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImportacionMasivaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImportacionMasivas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImportacionMasivas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ImportacionMasivas
    **/
    _count?: true | ImportacionMasivaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImportacionMasivaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImportacionMasivaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImportacionMasivaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImportacionMasivaMaxAggregateInputType
  }

  export type GetImportacionMasivaAggregateType<T extends ImportacionMasivaAggregateArgs> = {
        [P in keyof T & keyof AggregateImportacionMasiva]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImportacionMasiva[P]>
      : GetScalarType<T[P], AggregateImportacionMasiva[P]>
  }




  export type ImportacionMasivaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImportacionMasivaWhereInput
    orderBy?: ImportacionMasivaOrderByWithAggregationInput | ImportacionMasivaOrderByWithAggregationInput[]
    by: ImportacionMasivaScalarFieldEnum[] | ImportacionMasivaScalarFieldEnum
    having?: ImportacionMasivaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImportacionMasivaCountAggregateInputType | true
    _avg?: ImportacionMasivaAvgAggregateInputType
    _sum?: ImportacionMasivaSumAggregateInputType
    _min?: ImportacionMasivaMinAggregateInputType
    _max?: ImportacionMasivaMaxAggregateInputType
  }

  export type ImportacionMasivaGroupByOutputType = {
    id_importacion: string
    tipo: string
    estado: string
    archivo: string
    ruta_temporal: string
    actor_id: string | null
    total_filas: number
    procesadas: number
    insertadas: number
    actualizadas: number
    omitidas: number
    errores: number
    detalle_error: JsonValue | null
    fecha_creacion: Date
    fecha_inicio: Date | null
    fecha_fin: Date | null
    _count: ImportacionMasivaCountAggregateOutputType | null
    _avg: ImportacionMasivaAvgAggregateOutputType | null
    _sum: ImportacionMasivaSumAggregateOutputType | null
    _min: ImportacionMasivaMinAggregateOutputType | null
    _max: ImportacionMasivaMaxAggregateOutputType | null
  }

  type GetImportacionMasivaGroupByPayload<T extends ImportacionMasivaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImportacionMasivaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImportacionMasivaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImportacionMasivaGroupByOutputType[P]>
            : GetScalarType<T[P], ImportacionMasivaGroupByOutputType[P]>
        }
      >
    >


  export type ImportacionMasivaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_importacion?: boolean
    tipo?: boolean
    estado?: boolean
    archivo?: boolean
    ruta_temporal?: boolean
    actor_id?: boolean
    total_filas?: boolean
    procesadas?: boolean
    insertadas?: boolean
    actualizadas?: boolean
    omitidas?: boolean
    errores?: boolean
    detalle_error?: boolean
    fecha_creacion?: boolean
    fecha_inicio?: boolean
    fecha_fin?: boolean
  }, ExtArgs["result"]["importacionMasiva"]>

  export type ImportacionMasivaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_importacion?: boolean
    tipo?: boolean
    estado?: boolean
    archivo?: boolean
    ruta_temporal?: boolean
    actor_id?: boolean
    total_filas?: boolean
    procesadas?: boolean
    insertadas?: boolean
    actualizadas?: boolean
    omitidas?: boolean
    errores?: boolean
    detalle_error?: boolean
    fecha_creacion?: boolean
    fecha_inicio?: boolean
    fecha_fin?: boolean
  }, ExtArgs["result"]["importacionMasiva"]>

  export type ImportacionMasivaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_importacion?: boolean
    tipo?: boolean
    estado?: boolean
    archivo?: boolean
    ruta_temporal?: boolean
    actor_id?: boolean
    total_filas?: boolean
    procesadas?: boolean
    insertadas?: boolean
    actualizadas?: boolean
    omitidas?: boolean
    errores?: boolean
    detalle_error?: boolean
    fecha_creacion?: boolean
    fecha_inicio?: boolean
    fecha_fin?: boolean
  }, ExtArgs["result"]["importacionMasiva"]>

  export type ImportacionMasivaSelectScalar = {
    id_importacion?: boolean
    tipo?: boolean
    estado?: boolean
    archivo?: boolean
    ruta_temporal?: boolean
    actor_id?: boolean
    total_filas?: boolean
    procesadas?: boolean
    insertadas?: boolean
    actualizadas?: boolean
    omitidas?: boolean
    errores?: boolean
    detalle_error?: boolean
    fecha_creacion?: boolean
    fecha_inicio?: boolean
    fecha_fin?: boolean
  }

  export type ImportacionMasivaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_importacion" | "tipo" | "estado" | "archivo" | "ruta_temporal" | "actor_id" | "total_filas" | "procesadas" | "insertadas" | "actualizadas" | "omitidas" | "errores" | "detalle_error" | "fecha_creacion" | "fecha_inicio" | "fecha_fin", ExtArgs["result"]["importacionMasiva"]>

  export type $ImportacionMasivaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ImportacionMasiva"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_importacion: string
      tipo: string
      estado: string
      archivo: string
      ruta_temporal: string
      actor_id: string | null
      total_filas: number
      procesadas: number
      insertadas: number
      actualizadas: number
      omitidas: number
      errores: number
      detalle_error: Prisma.JsonValue | null
      fecha_creacion: Date
      fecha_inicio: Date | null
      fecha_fin: Date | null
    }, ExtArgs["result"]["importacionMasiva"]>
    composites: {}
  }

  type ImportacionMasivaGetPayload<S extends boolean | null | undefined | ImportacionMasivaDefaultArgs> = $Result.GetResult<Prisma.$ImportacionMasivaPayload, S>

  type ImportacionMasivaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImportacionMasivaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImportacionMasivaCountAggregateInputType | true
    }

  export interface ImportacionMasivaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ImportacionMasiva'], meta: { name: 'ImportacionMasiva' } }
    /**
     * Find zero or one ImportacionMasiva that matches the filter.
     * @param {ImportacionMasivaFindUniqueArgs} args - Arguments to find a ImportacionMasiva
     * @example
     * // Get one ImportacionMasiva
     * const importacionMasiva = await prisma.importacionMasiva.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImportacionMasivaFindUniqueArgs>(args: SelectSubset<T, ImportacionMasivaFindUniqueArgs<ExtArgs>>): Prisma__ImportacionMasivaClient<$Result.GetResult<Prisma.$ImportacionMasivaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ImportacionMasiva that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImportacionMasivaFindUniqueOrThrowArgs} args - Arguments to find a ImportacionMasiva
     * @example
     * // Get one ImportacionMasiva
     * const importacionMasiva = await prisma.importacionMasiva.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImportacionMasivaFindUniqueOrThrowArgs>(args: SelectSubset<T, ImportacionMasivaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImportacionMasivaClient<$Result.GetResult<Prisma.$ImportacionMasivaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImportacionMasiva that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportacionMasivaFindFirstArgs} args - Arguments to find a ImportacionMasiva
     * @example
     * // Get one ImportacionMasiva
     * const importacionMasiva = await prisma.importacionMasiva.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImportacionMasivaFindFirstArgs>(args?: SelectSubset<T, ImportacionMasivaFindFirstArgs<ExtArgs>>): Prisma__ImportacionMasivaClient<$Result.GetResult<Prisma.$ImportacionMasivaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImportacionMasiva that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportacionMasivaFindFirstOrThrowArgs} args - Arguments to find a ImportacionMasiva
     * @example
     * // Get one ImportacionMasiva
     * const importacionMasiva = await prisma.importacionMasiva.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImportacionMasivaFindFirstOrThrowArgs>(args?: SelectSubset<T, ImportacionMasivaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImportacionMasivaClient<$Result.GetResult<Prisma.$ImportacionMasivaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ImportacionMasivas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportacionMasivaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ImportacionMasivas
     * const importacionMasivas = await prisma.importacionMasiva.findMany()
     * 
     * // Get first 10 ImportacionMasivas
     * const importacionMasivas = await prisma.importacionMasiva.findMany({ take: 10 })
     * 
     * // Only select the `id_importacion`
     * const importacionMasivaWithId_importacionOnly = await prisma.importacionMasiva.findMany({ select: { id_importacion: true } })
     * 
     */
    findMany<T extends ImportacionMasivaFindManyArgs>(args?: SelectSubset<T, ImportacionMasivaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImportacionMasivaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ImportacionMasiva.
     * @param {ImportacionMasivaCreateArgs} args - Arguments to create a ImportacionMasiva.
     * @example
     * // Create one ImportacionMasiva
     * const ImportacionMasiva = await prisma.importacionMasiva.create({
     *   data: {
     *     // ... data to create a ImportacionMasiva
     *   }
     * })
     * 
     */
    create<T extends ImportacionMasivaCreateArgs>(args: SelectSubset<T, ImportacionMasivaCreateArgs<ExtArgs>>): Prisma__ImportacionMasivaClient<$Result.GetResult<Prisma.$ImportacionMasivaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ImportacionMasivas.
     * @param {ImportacionMasivaCreateManyArgs} args - Arguments to create many ImportacionMasivas.
     * @example
     * // Create many ImportacionMasivas
     * const importacionMasiva = await prisma.importacionMasiva.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImportacionMasivaCreateManyArgs>(args?: SelectSubset<T, ImportacionMasivaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ImportacionMasivas and returns the data saved in the database.
     * @param {ImportacionMasivaCreateManyAndReturnArgs} args - Arguments to create many ImportacionMasivas.
     * @example
     * // Create many ImportacionMasivas
     * const importacionMasiva = await prisma.importacionMasiva.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ImportacionMasivas and only return the `id_importacion`
     * const importacionMasivaWithId_importacionOnly = await prisma.importacionMasiva.createManyAndReturn({
     *   select: { id_importacion: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImportacionMasivaCreateManyAndReturnArgs>(args?: SelectSubset<T, ImportacionMasivaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImportacionMasivaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ImportacionMasiva.
     * @param {ImportacionMasivaDeleteArgs} args - Arguments to delete one ImportacionMasiva.
     * @example
     * // Delete one ImportacionMasiva
     * const ImportacionMasiva = await prisma.importacionMasiva.delete({
     *   where: {
     *     // ... filter to delete one ImportacionMasiva
     *   }
     * })
     * 
     */
    delete<T extends ImportacionMasivaDeleteArgs>(args: SelectSubset<T, ImportacionMasivaDeleteArgs<ExtArgs>>): Prisma__ImportacionMasivaClient<$Result.GetResult<Prisma.$ImportacionMasivaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ImportacionMasiva.
     * @param {ImportacionMasivaUpdateArgs} args - Arguments to update one ImportacionMasiva.
     * @example
     * // Update one ImportacionMasiva
     * const importacionMasiva = await prisma.importacionMasiva.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImportacionMasivaUpdateArgs>(args: SelectSubset<T, ImportacionMasivaUpdateArgs<ExtArgs>>): Prisma__ImportacionMasivaClient<$Result.GetResult<Prisma.$ImportacionMasivaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ImportacionMasivas.
     * @param {ImportacionMasivaDeleteManyArgs} args - Arguments to filter ImportacionMasivas to delete.
     * @example
     * // Delete a few ImportacionMasivas
     * const { count } = await prisma.importacionMasiva.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImportacionMasivaDeleteManyArgs>(args?: SelectSubset<T, ImportacionMasivaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImportacionMasivas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportacionMasivaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ImportacionMasivas
     * const importacionMasiva = await prisma.importacionMasiva.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImportacionMasivaUpdateManyArgs>(args: SelectSubset<T, ImportacionMasivaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImportacionMasivas and returns the data updated in the database.
     * @param {ImportacionMasivaUpdateManyAndReturnArgs} args - Arguments to update many ImportacionMasivas.
     * @example
     * // Update many ImportacionMasivas
     * const importacionMasiva = await prisma.importacionMasiva.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ImportacionMasivas and only return the `id_importacion`
     * const importacionMasivaWithId_importacionOnly = await prisma.importacionMasiva.updateManyAndReturn({
     *   select: { id_importacion: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ImportacionMasivaUpdateManyAndReturnArgs>(args: SelectSubset<T, ImportacionMasivaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImportacionMasivaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ImportacionMasiva.
     * @param {ImportacionMasivaUpsertArgs} args - Arguments to update or create a ImportacionMasiva.
     * @example
     * // Update or create a ImportacionMasiva
     * const importacionMasiva = await prisma.importacionMasiva.upsert({
     *   create: {
     *     // ... data to create a ImportacionMasiva
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ImportacionMasiva we want to update
     *   }
     * })
     */
    upsert<T extends ImportacionMasivaUpsertArgs>(args: SelectSubset<T, ImportacionMasivaUpsertArgs<ExtArgs>>): Prisma__ImportacionMasivaClient<$Result.GetResult<Prisma.$ImportacionMasivaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ImportacionMasivas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportacionMasivaCountArgs} args - Arguments to filter ImportacionMasivas to count.
     * @example
     * // Count the number of ImportacionMasivas
     * const count = await prisma.importacionMasiva.count({
     *   where: {
     *     // ... the filter for the ImportacionMasivas we want to count
     *   }
     * })
    **/
    count<T extends ImportacionMasivaCountArgs>(
      args?: Subset<T, ImportacionMasivaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImportacionMasivaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ImportacionMasiva.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportacionMasivaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImportacionMasivaAggregateArgs>(args: Subset<T, ImportacionMasivaAggregateArgs>): Prisma.PrismaPromise<GetImportacionMasivaAggregateType<T>>

    /**
     * Group by ImportacionMasiva.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportacionMasivaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImportacionMasivaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImportacionMasivaGroupByArgs['orderBy'] }
        : { orderBy?: ImportacionMasivaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImportacionMasivaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImportacionMasivaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ImportacionMasiva model
   */
  readonly fields: ImportacionMasivaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ImportacionMasiva.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImportacionMasivaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ImportacionMasiva model
   */
  interface ImportacionMasivaFieldRefs {
    readonly id_importacion: FieldRef<"ImportacionMasiva", 'String'>
    readonly tipo: FieldRef<"ImportacionMasiva", 'String'>
    readonly estado: FieldRef<"ImportacionMasiva", 'String'>
    readonly archivo: FieldRef<"ImportacionMasiva", 'String'>
    readonly ruta_temporal: FieldRef<"ImportacionMasiva", 'String'>
    readonly actor_id: FieldRef<"ImportacionMasiva", 'String'>
    readonly total_filas: FieldRef<"ImportacionMasiva", 'Int'>
    readonly procesadas: FieldRef<"ImportacionMasiva", 'Int'>
    readonly insertadas: FieldRef<"ImportacionMasiva", 'Int'>
    readonly actualizadas: FieldRef<"ImportacionMasiva", 'Int'>
    readonly omitidas: FieldRef<"ImportacionMasiva", 'Int'>
    readonly errores: FieldRef<"ImportacionMasiva", 'Int'>
    readonly detalle_error: FieldRef<"ImportacionMasiva", 'Json'>
    readonly fecha_creacion: FieldRef<"ImportacionMasiva", 'DateTime'>
    readonly fecha_inicio: FieldRef<"ImportacionMasiva", 'DateTime'>
    readonly fecha_fin: FieldRef<"ImportacionMasiva", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ImportacionMasiva findUnique
   */
  export type ImportacionMasivaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportacionMasiva
     */
    select?: ImportacionMasivaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportacionMasiva
     */
    omit?: ImportacionMasivaOmit<ExtArgs> | null
    /**
     * Filter, which ImportacionMasiva to fetch.
     */
    where: ImportacionMasivaWhereUniqueInput
  }

  /**
   * ImportacionMasiva findUniqueOrThrow
   */
  export type ImportacionMasivaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportacionMasiva
     */
    select?: ImportacionMasivaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportacionMasiva
     */
    omit?: ImportacionMasivaOmit<ExtArgs> | null
    /**
     * Filter, which ImportacionMasiva to fetch.
     */
    where: ImportacionMasivaWhereUniqueInput
  }

  /**
   * ImportacionMasiva findFirst
   */
  export type ImportacionMasivaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportacionMasiva
     */
    select?: ImportacionMasivaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportacionMasiva
     */
    omit?: ImportacionMasivaOmit<ExtArgs> | null
    /**
     * Filter, which ImportacionMasiva to fetch.
     */
    where?: ImportacionMasivaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImportacionMasivas to fetch.
     */
    orderBy?: ImportacionMasivaOrderByWithRelationInput | ImportacionMasivaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImportacionMasivas.
     */
    cursor?: ImportacionMasivaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImportacionMasivas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImportacionMasivas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImportacionMasivas.
     */
    distinct?: ImportacionMasivaScalarFieldEnum | ImportacionMasivaScalarFieldEnum[]
  }

  /**
   * ImportacionMasiva findFirstOrThrow
   */
  export type ImportacionMasivaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportacionMasiva
     */
    select?: ImportacionMasivaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportacionMasiva
     */
    omit?: ImportacionMasivaOmit<ExtArgs> | null
    /**
     * Filter, which ImportacionMasiva to fetch.
     */
    where?: ImportacionMasivaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImportacionMasivas to fetch.
     */
    orderBy?: ImportacionMasivaOrderByWithRelationInput | ImportacionMasivaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImportacionMasivas.
     */
    cursor?: ImportacionMasivaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImportacionMasivas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImportacionMasivas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImportacionMasivas.
     */
    distinct?: ImportacionMasivaScalarFieldEnum | ImportacionMasivaScalarFieldEnum[]
  }

  /**
   * ImportacionMasiva findMany
   */
  export type ImportacionMasivaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportacionMasiva
     */
    select?: ImportacionMasivaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportacionMasiva
     */
    omit?: ImportacionMasivaOmit<ExtArgs> | null
    /**
     * Filter, which ImportacionMasivas to fetch.
     */
    where?: ImportacionMasivaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImportacionMasivas to fetch.
     */
    orderBy?: ImportacionMasivaOrderByWithRelationInput | ImportacionMasivaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ImportacionMasivas.
     */
    cursor?: ImportacionMasivaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImportacionMasivas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImportacionMasivas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImportacionMasivas.
     */
    distinct?: ImportacionMasivaScalarFieldEnum | ImportacionMasivaScalarFieldEnum[]
  }

  /**
   * ImportacionMasiva create
   */
  export type ImportacionMasivaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportacionMasiva
     */
    select?: ImportacionMasivaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportacionMasiva
     */
    omit?: ImportacionMasivaOmit<ExtArgs> | null
    /**
     * The data needed to create a ImportacionMasiva.
     */
    data: XOR<ImportacionMasivaCreateInput, ImportacionMasivaUncheckedCreateInput>
  }

  /**
   * ImportacionMasiva createMany
   */
  export type ImportacionMasivaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ImportacionMasivas.
     */
    data: ImportacionMasivaCreateManyInput | ImportacionMasivaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ImportacionMasiva createManyAndReturn
   */
  export type ImportacionMasivaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportacionMasiva
     */
    select?: ImportacionMasivaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ImportacionMasiva
     */
    omit?: ImportacionMasivaOmit<ExtArgs> | null
    /**
     * The data used to create many ImportacionMasivas.
     */
    data: ImportacionMasivaCreateManyInput | ImportacionMasivaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ImportacionMasiva update
   */
  export type ImportacionMasivaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportacionMasiva
     */
    select?: ImportacionMasivaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportacionMasiva
     */
    omit?: ImportacionMasivaOmit<ExtArgs> | null
    /**
     * The data needed to update a ImportacionMasiva.
     */
    data: XOR<ImportacionMasivaUpdateInput, ImportacionMasivaUncheckedUpdateInput>
    /**
     * Choose, which ImportacionMasiva to update.
     */
    where: ImportacionMasivaWhereUniqueInput
  }

  /**
   * ImportacionMasiva updateMany
   */
  export type ImportacionMasivaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ImportacionMasivas.
     */
    data: XOR<ImportacionMasivaUpdateManyMutationInput, ImportacionMasivaUncheckedUpdateManyInput>
    /**
     * Filter which ImportacionMasivas to update
     */
    where?: ImportacionMasivaWhereInput
    /**
     * Limit how many ImportacionMasivas to update.
     */
    limit?: number
  }

  /**
   * ImportacionMasiva updateManyAndReturn
   */
  export type ImportacionMasivaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportacionMasiva
     */
    select?: ImportacionMasivaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ImportacionMasiva
     */
    omit?: ImportacionMasivaOmit<ExtArgs> | null
    /**
     * The data used to update ImportacionMasivas.
     */
    data: XOR<ImportacionMasivaUpdateManyMutationInput, ImportacionMasivaUncheckedUpdateManyInput>
    /**
     * Filter which ImportacionMasivas to update
     */
    where?: ImportacionMasivaWhereInput
    /**
     * Limit how many ImportacionMasivas to update.
     */
    limit?: number
  }

  /**
   * ImportacionMasiva upsert
   */
  export type ImportacionMasivaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportacionMasiva
     */
    select?: ImportacionMasivaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportacionMasiva
     */
    omit?: ImportacionMasivaOmit<ExtArgs> | null
    /**
     * The filter to search for the ImportacionMasiva to update in case it exists.
     */
    where: ImportacionMasivaWhereUniqueInput
    /**
     * In case the ImportacionMasiva found by the `where` argument doesn't exist, create a new ImportacionMasiva with this data.
     */
    create: XOR<ImportacionMasivaCreateInput, ImportacionMasivaUncheckedCreateInput>
    /**
     * In case the ImportacionMasiva was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImportacionMasivaUpdateInput, ImportacionMasivaUncheckedUpdateInput>
  }

  /**
   * ImportacionMasiva delete
   */
  export type ImportacionMasivaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportacionMasiva
     */
    select?: ImportacionMasivaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportacionMasiva
     */
    omit?: ImportacionMasivaOmit<ExtArgs> | null
    /**
     * Filter which ImportacionMasiva to delete.
     */
    where: ImportacionMasivaWhereUniqueInput
  }

  /**
   * ImportacionMasiva deleteMany
   */
  export type ImportacionMasivaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImportacionMasivas to delete
     */
    where?: ImportacionMasivaWhereInput
    /**
     * Limit how many ImportacionMasivas to delete.
     */
    limit?: number
  }

  /**
   * ImportacionMasiva without action
   */
  export type ImportacionMasivaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportacionMasiva
     */
    select?: ImportacionMasivaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportacionMasiva
     */
    omit?: ImportacionMasivaOmit<ExtArgs> | null
  }


  /**
   * Model RegistroCalidad
   */

  export type AggregateRegistroCalidad = {
    _count: RegistroCalidadCountAggregateOutputType | null
    _avg: RegistroCalidadAvgAggregateOutputType | null
    _sum: RegistroCalidadSumAggregateOutputType | null
    _min: RegistroCalidadMinAggregateOutputType | null
    _max: RegistroCalidadMaxAggregateOutputType | null
  }

  export type RegistroCalidadAvgAggregateOutputType = {
    meta: Decimal | null
    valor_actual: Decimal | null
    version: number | null
  }

  export type RegistroCalidadSumAggregateOutputType = {
    meta: Decimal | null
    valor_actual: Decimal | null
    version: number | null
  }

  export type RegistroCalidadMinAggregateOutputType = {
    id_registro: string | null
    tipo: string | null
    codigo: string | null
    titulo: string | null
    descripcion: string | null
    estado: string | null
    responsable_id: string | null
    responsable: string | null
    fecha_objetivo: Date | null
    fecha_cierre: Date | null
    clausula_iso: string | null
    indicador: string | null
    meta: Decimal | null
    valor_actual: Decimal | null
    unidad: string | null
    version: number | null
    creado_por: string | null
    actualizado_por: string | null
    fecha_creacion: Date | null
    fecha_actualizar: Date | null
  }

  export type RegistroCalidadMaxAggregateOutputType = {
    id_registro: string | null
    tipo: string | null
    codigo: string | null
    titulo: string | null
    descripcion: string | null
    estado: string | null
    responsable_id: string | null
    responsable: string | null
    fecha_objetivo: Date | null
    fecha_cierre: Date | null
    clausula_iso: string | null
    indicador: string | null
    meta: Decimal | null
    valor_actual: Decimal | null
    unidad: string | null
    version: number | null
    creado_por: string | null
    actualizado_por: string | null
    fecha_creacion: Date | null
    fecha_actualizar: Date | null
  }

  export type RegistroCalidadCountAggregateOutputType = {
    id_registro: number
    tipo: number
    codigo: number
    titulo: number
    descripcion: number
    estado: number
    responsable_id: number
    responsable: number
    fecha_objetivo: number
    fecha_cierre: number
    clausula_iso: number
    indicador: number
    meta: number
    valor_actual: number
    unidad: number
    datos: number
    evidencia: number
    version: number
    creado_por: number
    actualizado_por: number
    fecha_creacion: number
    fecha_actualizar: number
    _all: number
  }


  export type RegistroCalidadAvgAggregateInputType = {
    meta?: true
    valor_actual?: true
    version?: true
  }

  export type RegistroCalidadSumAggregateInputType = {
    meta?: true
    valor_actual?: true
    version?: true
  }

  export type RegistroCalidadMinAggregateInputType = {
    id_registro?: true
    tipo?: true
    codigo?: true
    titulo?: true
    descripcion?: true
    estado?: true
    responsable_id?: true
    responsable?: true
    fecha_objetivo?: true
    fecha_cierre?: true
    clausula_iso?: true
    indicador?: true
    meta?: true
    valor_actual?: true
    unidad?: true
    version?: true
    creado_por?: true
    actualizado_por?: true
    fecha_creacion?: true
    fecha_actualizar?: true
  }

  export type RegistroCalidadMaxAggregateInputType = {
    id_registro?: true
    tipo?: true
    codigo?: true
    titulo?: true
    descripcion?: true
    estado?: true
    responsable_id?: true
    responsable?: true
    fecha_objetivo?: true
    fecha_cierre?: true
    clausula_iso?: true
    indicador?: true
    meta?: true
    valor_actual?: true
    unidad?: true
    version?: true
    creado_por?: true
    actualizado_por?: true
    fecha_creacion?: true
    fecha_actualizar?: true
  }

  export type RegistroCalidadCountAggregateInputType = {
    id_registro?: true
    tipo?: true
    codigo?: true
    titulo?: true
    descripcion?: true
    estado?: true
    responsable_id?: true
    responsable?: true
    fecha_objetivo?: true
    fecha_cierre?: true
    clausula_iso?: true
    indicador?: true
    meta?: true
    valor_actual?: true
    unidad?: true
    datos?: true
    evidencia?: true
    version?: true
    creado_por?: true
    actualizado_por?: true
    fecha_creacion?: true
    fecha_actualizar?: true
    _all?: true
  }

  export type RegistroCalidadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegistroCalidad to aggregate.
     */
    where?: RegistroCalidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroCalidads to fetch.
     */
    orderBy?: RegistroCalidadOrderByWithRelationInput | RegistroCalidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegistroCalidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroCalidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroCalidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RegistroCalidads
    **/
    _count?: true | RegistroCalidadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegistroCalidadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegistroCalidadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegistroCalidadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegistroCalidadMaxAggregateInputType
  }

  export type GetRegistroCalidadAggregateType<T extends RegistroCalidadAggregateArgs> = {
        [P in keyof T & keyof AggregateRegistroCalidad]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegistroCalidad[P]>
      : GetScalarType<T[P], AggregateRegistroCalidad[P]>
  }




  export type RegistroCalidadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistroCalidadWhereInput
    orderBy?: RegistroCalidadOrderByWithAggregationInput | RegistroCalidadOrderByWithAggregationInput[]
    by: RegistroCalidadScalarFieldEnum[] | RegistroCalidadScalarFieldEnum
    having?: RegistroCalidadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegistroCalidadCountAggregateInputType | true
    _avg?: RegistroCalidadAvgAggregateInputType
    _sum?: RegistroCalidadSumAggregateInputType
    _min?: RegistroCalidadMinAggregateInputType
    _max?: RegistroCalidadMaxAggregateInputType
  }

  export type RegistroCalidadGroupByOutputType = {
    id_registro: string
    tipo: string
    codigo: string
    titulo: string
    descripcion: string | null
    estado: string
    responsable_id: string | null
    responsable: string | null
    fecha_objetivo: Date | null
    fecha_cierre: Date | null
    clausula_iso: string | null
    indicador: string | null
    meta: Decimal | null
    valor_actual: Decimal | null
    unidad: string | null
    datos: JsonValue | null
    evidencia: JsonValue | null
    version: number
    creado_por: string | null
    actualizado_por: string | null
    fecha_creacion: Date
    fecha_actualizar: Date
    _count: RegistroCalidadCountAggregateOutputType | null
    _avg: RegistroCalidadAvgAggregateOutputType | null
    _sum: RegistroCalidadSumAggregateOutputType | null
    _min: RegistroCalidadMinAggregateOutputType | null
    _max: RegistroCalidadMaxAggregateOutputType | null
  }

  type GetRegistroCalidadGroupByPayload<T extends RegistroCalidadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegistroCalidadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegistroCalidadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegistroCalidadGroupByOutputType[P]>
            : GetScalarType<T[P], RegistroCalidadGroupByOutputType[P]>
        }
      >
    >


  export type RegistroCalidadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_registro?: boolean
    tipo?: boolean
    codigo?: boolean
    titulo?: boolean
    descripcion?: boolean
    estado?: boolean
    responsable_id?: boolean
    responsable?: boolean
    fecha_objetivo?: boolean
    fecha_cierre?: boolean
    clausula_iso?: boolean
    indicador?: boolean
    meta?: boolean
    valor_actual?: boolean
    unidad?: boolean
    datos?: boolean
    evidencia?: boolean
    version?: boolean
    creado_por?: boolean
    actualizado_por?: boolean
    fecha_creacion?: boolean
    fecha_actualizar?: boolean
    historial?: boolean | RegistroCalidad$historialArgs<ExtArgs>
    _count?: boolean | RegistroCalidadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registroCalidad"]>

  export type RegistroCalidadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_registro?: boolean
    tipo?: boolean
    codigo?: boolean
    titulo?: boolean
    descripcion?: boolean
    estado?: boolean
    responsable_id?: boolean
    responsable?: boolean
    fecha_objetivo?: boolean
    fecha_cierre?: boolean
    clausula_iso?: boolean
    indicador?: boolean
    meta?: boolean
    valor_actual?: boolean
    unidad?: boolean
    datos?: boolean
    evidencia?: boolean
    version?: boolean
    creado_por?: boolean
    actualizado_por?: boolean
    fecha_creacion?: boolean
    fecha_actualizar?: boolean
  }, ExtArgs["result"]["registroCalidad"]>

  export type RegistroCalidadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_registro?: boolean
    tipo?: boolean
    codigo?: boolean
    titulo?: boolean
    descripcion?: boolean
    estado?: boolean
    responsable_id?: boolean
    responsable?: boolean
    fecha_objetivo?: boolean
    fecha_cierre?: boolean
    clausula_iso?: boolean
    indicador?: boolean
    meta?: boolean
    valor_actual?: boolean
    unidad?: boolean
    datos?: boolean
    evidencia?: boolean
    version?: boolean
    creado_por?: boolean
    actualizado_por?: boolean
    fecha_creacion?: boolean
    fecha_actualizar?: boolean
  }, ExtArgs["result"]["registroCalidad"]>

  export type RegistroCalidadSelectScalar = {
    id_registro?: boolean
    tipo?: boolean
    codigo?: boolean
    titulo?: boolean
    descripcion?: boolean
    estado?: boolean
    responsable_id?: boolean
    responsable?: boolean
    fecha_objetivo?: boolean
    fecha_cierre?: boolean
    clausula_iso?: boolean
    indicador?: boolean
    meta?: boolean
    valor_actual?: boolean
    unidad?: boolean
    datos?: boolean
    evidencia?: boolean
    version?: boolean
    creado_por?: boolean
    actualizado_por?: boolean
    fecha_creacion?: boolean
    fecha_actualizar?: boolean
  }

  export type RegistroCalidadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_registro" | "tipo" | "codigo" | "titulo" | "descripcion" | "estado" | "responsable_id" | "responsable" | "fecha_objetivo" | "fecha_cierre" | "clausula_iso" | "indicador" | "meta" | "valor_actual" | "unidad" | "datos" | "evidencia" | "version" | "creado_por" | "actualizado_por" | "fecha_creacion" | "fecha_actualizar", ExtArgs["result"]["registroCalidad"]>
  export type RegistroCalidadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    historial?: boolean | RegistroCalidad$historialArgs<ExtArgs>
    _count?: boolean | RegistroCalidadCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RegistroCalidadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RegistroCalidadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RegistroCalidadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RegistroCalidad"
    objects: {
      historial: Prisma.$HistorialCalidadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_registro: string
      tipo: string
      codigo: string
      titulo: string
      descripcion: string | null
      estado: string
      responsable_id: string | null
      responsable: string | null
      fecha_objetivo: Date | null
      fecha_cierre: Date | null
      clausula_iso: string | null
      indicador: string | null
      meta: Prisma.Decimal | null
      valor_actual: Prisma.Decimal | null
      unidad: string | null
      datos: Prisma.JsonValue | null
      evidencia: Prisma.JsonValue | null
      version: number
      creado_por: string | null
      actualizado_por: string | null
      fecha_creacion: Date
      fecha_actualizar: Date
    }, ExtArgs["result"]["registroCalidad"]>
    composites: {}
  }

  type RegistroCalidadGetPayload<S extends boolean | null | undefined | RegistroCalidadDefaultArgs> = $Result.GetResult<Prisma.$RegistroCalidadPayload, S>

  type RegistroCalidadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegistroCalidadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegistroCalidadCountAggregateInputType | true
    }

  export interface RegistroCalidadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RegistroCalidad'], meta: { name: 'RegistroCalidad' } }
    /**
     * Find zero or one RegistroCalidad that matches the filter.
     * @param {RegistroCalidadFindUniqueArgs} args - Arguments to find a RegistroCalidad
     * @example
     * // Get one RegistroCalidad
     * const registroCalidad = await prisma.registroCalidad.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegistroCalidadFindUniqueArgs>(args: SelectSubset<T, RegistroCalidadFindUniqueArgs<ExtArgs>>): Prisma__RegistroCalidadClient<$Result.GetResult<Prisma.$RegistroCalidadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RegistroCalidad that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegistroCalidadFindUniqueOrThrowArgs} args - Arguments to find a RegistroCalidad
     * @example
     * // Get one RegistroCalidad
     * const registroCalidad = await prisma.registroCalidad.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegistroCalidadFindUniqueOrThrowArgs>(args: SelectSubset<T, RegistroCalidadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegistroCalidadClient<$Result.GetResult<Prisma.$RegistroCalidadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegistroCalidad that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroCalidadFindFirstArgs} args - Arguments to find a RegistroCalidad
     * @example
     * // Get one RegistroCalidad
     * const registroCalidad = await prisma.registroCalidad.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegistroCalidadFindFirstArgs>(args?: SelectSubset<T, RegistroCalidadFindFirstArgs<ExtArgs>>): Prisma__RegistroCalidadClient<$Result.GetResult<Prisma.$RegistroCalidadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegistroCalidad that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroCalidadFindFirstOrThrowArgs} args - Arguments to find a RegistroCalidad
     * @example
     * // Get one RegistroCalidad
     * const registroCalidad = await prisma.registroCalidad.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegistroCalidadFindFirstOrThrowArgs>(args?: SelectSubset<T, RegistroCalidadFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegistroCalidadClient<$Result.GetResult<Prisma.$RegistroCalidadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RegistroCalidads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroCalidadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RegistroCalidads
     * const registroCalidads = await prisma.registroCalidad.findMany()
     * 
     * // Get first 10 RegistroCalidads
     * const registroCalidads = await prisma.registroCalidad.findMany({ take: 10 })
     * 
     * // Only select the `id_registro`
     * const registroCalidadWithId_registroOnly = await prisma.registroCalidad.findMany({ select: { id_registro: true } })
     * 
     */
    findMany<T extends RegistroCalidadFindManyArgs>(args?: SelectSubset<T, RegistroCalidadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroCalidadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RegistroCalidad.
     * @param {RegistroCalidadCreateArgs} args - Arguments to create a RegistroCalidad.
     * @example
     * // Create one RegistroCalidad
     * const RegistroCalidad = await prisma.registroCalidad.create({
     *   data: {
     *     // ... data to create a RegistroCalidad
     *   }
     * })
     * 
     */
    create<T extends RegistroCalidadCreateArgs>(args: SelectSubset<T, RegistroCalidadCreateArgs<ExtArgs>>): Prisma__RegistroCalidadClient<$Result.GetResult<Prisma.$RegistroCalidadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RegistroCalidads.
     * @param {RegistroCalidadCreateManyArgs} args - Arguments to create many RegistroCalidads.
     * @example
     * // Create many RegistroCalidads
     * const registroCalidad = await prisma.registroCalidad.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegistroCalidadCreateManyArgs>(args?: SelectSubset<T, RegistroCalidadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RegistroCalidads and returns the data saved in the database.
     * @param {RegistroCalidadCreateManyAndReturnArgs} args - Arguments to create many RegistroCalidads.
     * @example
     * // Create many RegistroCalidads
     * const registroCalidad = await prisma.registroCalidad.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RegistroCalidads and only return the `id_registro`
     * const registroCalidadWithId_registroOnly = await prisma.registroCalidad.createManyAndReturn({
     *   select: { id_registro: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegistroCalidadCreateManyAndReturnArgs>(args?: SelectSubset<T, RegistroCalidadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroCalidadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RegistroCalidad.
     * @param {RegistroCalidadDeleteArgs} args - Arguments to delete one RegistroCalidad.
     * @example
     * // Delete one RegistroCalidad
     * const RegistroCalidad = await prisma.registroCalidad.delete({
     *   where: {
     *     // ... filter to delete one RegistroCalidad
     *   }
     * })
     * 
     */
    delete<T extends RegistroCalidadDeleteArgs>(args: SelectSubset<T, RegistroCalidadDeleteArgs<ExtArgs>>): Prisma__RegistroCalidadClient<$Result.GetResult<Prisma.$RegistroCalidadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RegistroCalidad.
     * @param {RegistroCalidadUpdateArgs} args - Arguments to update one RegistroCalidad.
     * @example
     * // Update one RegistroCalidad
     * const registroCalidad = await prisma.registroCalidad.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegistroCalidadUpdateArgs>(args: SelectSubset<T, RegistroCalidadUpdateArgs<ExtArgs>>): Prisma__RegistroCalidadClient<$Result.GetResult<Prisma.$RegistroCalidadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RegistroCalidads.
     * @param {RegistroCalidadDeleteManyArgs} args - Arguments to filter RegistroCalidads to delete.
     * @example
     * // Delete a few RegistroCalidads
     * const { count } = await prisma.registroCalidad.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegistroCalidadDeleteManyArgs>(args?: SelectSubset<T, RegistroCalidadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegistroCalidads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroCalidadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RegistroCalidads
     * const registroCalidad = await prisma.registroCalidad.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegistroCalidadUpdateManyArgs>(args: SelectSubset<T, RegistroCalidadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegistroCalidads and returns the data updated in the database.
     * @param {RegistroCalidadUpdateManyAndReturnArgs} args - Arguments to update many RegistroCalidads.
     * @example
     * // Update many RegistroCalidads
     * const registroCalidad = await prisma.registroCalidad.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RegistroCalidads and only return the `id_registro`
     * const registroCalidadWithId_registroOnly = await prisma.registroCalidad.updateManyAndReturn({
     *   select: { id_registro: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RegistroCalidadUpdateManyAndReturnArgs>(args: SelectSubset<T, RegistroCalidadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroCalidadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RegistroCalidad.
     * @param {RegistroCalidadUpsertArgs} args - Arguments to update or create a RegistroCalidad.
     * @example
     * // Update or create a RegistroCalidad
     * const registroCalidad = await prisma.registroCalidad.upsert({
     *   create: {
     *     // ... data to create a RegistroCalidad
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RegistroCalidad we want to update
     *   }
     * })
     */
    upsert<T extends RegistroCalidadUpsertArgs>(args: SelectSubset<T, RegistroCalidadUpsertArgs<ExtArgs>>): Prisma__RegistroCalidadClient<$Result.GetResult<Prisma.$RegistroCalidadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RegistroCalidads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroCalidadCountArgs} args - Arguments to filter RegistroCalidads to count.
     * @example
     * // Count the number of RegistroCalidads
     * const count = await prisma.registroCalidad.count({
     *   where: {
     *     // ... the filter for the RegistroCalidads we want to count
     *   }
     * })
    **/
    count<T extends RegistroCalidadCountArgs>(
      args?: Subset<T, RegistroCalidadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegistroCalidadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RegistroCalidad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroCalidadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RegistroCalidadAggregateArgs>(args: Subset<T, RegistroCalidadAggregateArgs>): Prisma.PrismaPromise<GetRegistroCalidadAggregateType<T>>

    /**
     * Group by RegistroCalidad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroCalidadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RegistroCalidadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegistroCalidadGroupByArgs['orderBy'] }
        : { orderBy?: RegistroCalidadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RegistroCalidadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegistroCalidadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RegistroCalidad model
   */
  readonly fields: RegistroCalidadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RegistroCalidad.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegistroCalidadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    historial<T extends RegistroCalidad$historialArgs<ExtArgs> = {}>(args?: Subset<T, RegistroCalidad$historialArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistorialCalidadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RegistroCalidad model
   */
  interface RegistroCalidadFieldRefs {
    readonly id_registro: FieldRef<"RegistroCalidad", 'String'>
    readonly tipo: FieldRef<"RegistroCalidad", 'String'>
    readonly codigo: FieldRef<"RegistroCalidad", 'String'>
    readonly titulo: FieldRef<"RegistroCalidad", 'String'>
    readonly descripcion: FieldRef<"RegistroCalidad", 'String'>
    readonly estado: FieldRef<"RegistroCalidad", 'String'>
    readonly responsable_id: FieldRef<"RegistroCalidad", 'String'>
    readonly responsable: FieldRef<"RegistroCalidad", 'String'>
    readonly fecha_objetivo: FieldRef<"RegistroCalidad", 'DateTime'>
    readonly fecha_cierre: FieldRef<"RegistroCalidad", 'DateTime'>
    readonly clausula_iso: FieldRef<"RegistroCalidad", 'String'>
    readonly indicador: FieldRef<"RegistroCalidad", 'String'>
    readonly meta: FieldRef<"RegistroCalidad", 'Decimal'>
    readonly valor_actual: FieldRef<"RegistroCalidad", 'Decimal'>
    readonly unidad: FieldRef<"RegistroCalidad", 'String'>
    readonly datos: FieldRef<"RegistroCalidad", 'Json'>
    readonly evidencia: FieldRef<"RegistroCalidad", 'Json'>
    readonly version: FieldRef<"RegistroCalidad", 'Int'>
    readonly creado_por: FieldRef<"RegistroCalidad", 'String'>
    readonly actualizado_por: FieldRef<"RegistroCalidad", 'String'>
    readonly fecha_creacion: FieldRef<"RegistroCalidad", 'DateTime'>
    readonly fecha_actualizar: FieldRef<"RegistroCalidad", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RegistroCalidad findUnique
   */
  export type RegistroCalidadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroCalidad
     */
    select?: RegistroCalidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroCalidad
     */
    omit?: RegistroCalidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroCalidadInclude<ExtArgs> | null
    /**
     * Filter, which RegistroCalidad to fetch.
     */
    where: RegistroCalidadWhereUniqueInput
  }

  /**
   * RegistroCalidad findUniqueOrThrow
   */
  export type RegistroCalidadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroCalidad
     */
    select?: RegistroCalidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroCalidad
     */
    omit?: RegistroCalidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroCalidadInclude<ExtArgs> | null
    /**
     * Filter, which RegistroCalidad to fetch.
     */
    where: RegistroCalidadWhereUniqueInput
  }

  /**
   * RegistroCalidad findFirst
   */
  export type RegistroCalidadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroCalidad
     */
    select?: RegistroCalidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroCalidad
     */
    omit?: RegistroCalidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroCalidadInclude<ExtArgs> | null
    /**
     * Filter, which RegistroCalidad to fetch.
     */
    where?: RegistroCalidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroCalidads to fetch.
     */
    orderBy?: RegistroCalidadOrderByWithRelationInput | RegistroCalidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegistroCalidads.
     */
    cursor?: RegistroCalidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroCalidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroCalidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistroCalidads.
     */
    distinct?: RegistroCalidadScalarFieldEnum | RegistroCalidadScalarFieldEnum[]
  }

  /**
   * RegistroCalidad findFirstOrThrow
   */
  export type RegistroCalidadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroCalidad
     */
    select?: RegistroCalidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroCalidad
     */
    omit?: RegistroCalidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroCalidadInclude<ExtArgs> | null
    /**
     * Filter, which RegistroCalidad to fetch.
     */
    where?: RegistroCalidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroCalidads to fetch.
     */
    orderBy?: RegistroCalidadOrderByWithRelationInput | RegistroCalidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegistroCalidads.
     */
    cursor?: RegistroCalidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroCalidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroCalidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistroCalidads.
     */
    distinct?: RegistroCalidadScalarFieldEnum | RegistroCalidadScalarFieldEnum[]
  }

  /**
   * RegistroCalidad findMany
   */
  export type RegistroCalidadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroCalidad
     */
    select?: RegistroCalidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroCalidad
     */
    omit?: RegistroCalidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroCalidadInclude<ExtArgs> | null
    /**
     * Filter, which RegistroCalidads to fetch.
     */
    where?: RegistroCalidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroCalidads to fetch.
     */
    orderBy?: RegistroCalidadOrderByWithRelationInput | RegistroCalidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RegistroCalidads.
     */
    cursor?: RegistroCalidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroCalidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroCalidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistroCalidads.
     */
    distinct?: RegistroCalidadScalarFieldEnum | RegistroCalidadScalarFieldEnum[]
  }

  /**
   * RegistroCalidad create
   */
  export type RegistroCalidadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroCalidad
     */
    select?: RegistroCalidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroCalidad
     */
    omit?: RegistroCalidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroCalidadInclude<ExtArgs> | null
    /**
     * The data needed to create a RegistroCalidad.
     */
    data: XOR<RegistroCalidadCreateInput, RegistroCalidadUncheckedCreateInput>
  }

  /**
   * RegistroCalidad createMany
   */
  export type RegistroCalidadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RegistroCalidads.
     */
    data: RegistroCalidadCreateManyInput | RegistroCalidadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RegistroCalidad createManyAndReturn
   */
  export type RegistroCalidadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroCalidad
     */
    select?: RegistroCalidadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroCalidad
     */
    omit?: RegistroCalidadOmit<ExtArgs> | null
    /**
     * The data used to create many RegistroCalidads.
     */
    data: RegistroCalidadCreateManyInput | RegistroCalidadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RegistroCalidad update
   */
  export type RegistroCalidadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroCalidad
     */
    select?: RegistroCalidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroCalidad
     */
    omit?: RegistroCalidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroCalidadInclude<ExtArgs> | null
    /**
     * The data needed to update a RegistroCalidad.
     */
    data: XOR<RegistroCalidadUpdateInput, RegistroCalidadUncheckedUpdateInput>
    /**
     * Choose, which RegistroCalidad to update.
     */
    where: RegistroCalidadWhereUniqueInput
  }

  /**
   * RegistroCalidad updateMany
   */
  export type RegistroCalidadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RegistroCalidads.
     */
    data: XOR<RegistroCalidadUpdateManyMutationInput, RegistroCalidadUncheckedUpdateManyInput>
    /**
     * Filter which RegistroCalidads to update
     */
    where?: RegistroCalidadWhereInput
    /**
     * Limit how many RegistroCalidads to update.
     */
    limit?: number
  }

  /**
   * RegistroCalidad updateManyAndReturn
   */
  export type RegistroCalidadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroCalidad
     */
    select?: RegistroCalidadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroCalidad
     */
    omit?: RegistroCalidadOmit<ExtArgs> | null
    /**
     * The data used to update RegistroCalidads.
     */
    data: XOR<RegistroCalidadUpdateManyMutationInput, RegistroCalidadUncheckedUpdateManyInput>
    /**
     * Filter which RegistroCalidads to update
     */
    where?: RegistroCalidadWhereInput
    /**
     * Limit how many RegistroCalidads to update.
     */
    limit?: number
  }

  /**
   * RegistroCalidad upsert
   */
  export type RegistroCalidadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroCalidad
     */
    select?: RegistroCalidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroCalidad
     */
    omit?: RegistroCalidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroCalidadInclude<ExtArgs> | null
    /**
     * The filter to search for the RegistroCalidad to update in case it exists.
     */
    where: RegistroCalidadWhereUniqueInput
    /**
     * In case the RegistroCalidad found by the `where` argument doesn't exist, create a new RegistroCalidad with this data.
     */
    create: XOR<RegistroCalidadCreateInput, RegistroCalidadUncheckedCreateInput>
    /**
     * In case the RegistroCalidad was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegistroCalidadUpdateInput, RegistroCalidadUncheckedUpdateInput>
  }

  /**
   * RegistroCalidad delete
   */
  export type RegistroCalidadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroCalidad
     */
    select?: RegistroCalidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroCalidad
     */
    omit?: RegistroCalidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroCalidadInclude<ExtArgs> | null
    /**
     * Filter which RegistroCalidad to delete.
     */
    where: RegistroCalidadWhereUniqueInput
  }

  /**
   * RegistroCalidad deleteMany
   */
  export type RegistroCalidadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegistroCalidads to delete
     */
    where?: RegistroCalidadWhereInput
    /**
     * Limit how many RegistroCalidads to delete.
     */
    limit?: number
  }

  /**
   * RegistroCalidad.historial
   */
  export type RegistroCalidad$historialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialCalidad
     */
    select?: HistorialCalidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialCalidad
     */
    omit?: HistorialCalidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialCalidadInclude<ExtArgs> | null
    where?: HistorialCalidadWhereInput
    orderBy?: HistorialCalidadOrderByWithRelationInput | HistorialCalidadOrderByWithRelationInput[]
    cursor?: HistorialCalidadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistorialCalidadScalarFieldEnum | HistorialCalidadScalarFieldEnum[]
  }

  /**
   * RegistroCalidad without action
   */
  export type RegistroCalidadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroCalidad
     */
    select?: RegistroCalidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroCalidad
     */
    omit?: RegistroCalidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroCalidadInclude<ExtArgs> | null
  }


  /**
   * Model HistorialCalidad
   */

  export type AggregateHistorialCalidad = {
    _count: HistorialCalidadCountAggregateOutputType | null
    _avg: HistorialCalidadAvgAggregateOutputType | null
    _sum: HistorialCalidadSumAggregateOutputType | null
    _min: HistorialCalidadMinAggregateOutputType | null
    _max: HistorialCalidadMaxAggregateOutputType | null
  }

  export type HistorialCalidadAvgAggregateOutputType = {
    version: number | null
  }

  export type HistorialCalidadSumAggregateOutputType = {
    version: number | null
  }

  export type HistorialCalidadMinAggregateOutputType = {
    id_historial: string | null
    id_registro: string | null
    accion: string | null
    version: number | null
    actor_id: string | null
    actor: string | null
    fecha: Date | null
  }

  export type HistorialCalidadMaxAggregateOutputType = {
    id_historial: string | null
    id_registro: string | null
    accion: string | null
    version: number | null
    actor_id: string | null
    actor: string | null
    fecha: Date | null
  }

  export type HistorialCalidadCountAggregateOutputType = {
    id_historial: number
    id_registro: number
    accion: number
    version: number
    actor_id: number
    actor: number
    detalle: number
    fecha: number
    _all: number
  }


  export type HistorialCalidadAvgAggregateInputType = {
    version?: true
  }

  export type HistorialCalidadSumAggregateInputType = {
    version?: true
  }

  export type HistorialCalidadMinAggregateInputType = {
    id_historial?: true
    id_registro?: true
    accion?: true
    version?: true
    actor_id?: true
    actor?: true
    fecha?: true
  }

  export type HistorialCalidadMaxAggregateInputType = {
    id_historial?: true
    id_registro?: true
    accion?: true
    version?: true
    actor_id?: true
    actor?: true
    fecha?: true
  }

  export type HistorialCalidadCountAggregateInputType = {
    id_historial?: true
    id_registro?: true
    accion?: true
    version?: true
    actor_id?: true
    actor?: true
    detalle?: true
    fecha?: true
    _all?: true
  }

  export type HistorialCalidadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistorialCalidad to aggregate.
     */
    where?: HistorialCalidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistorialCalidads to fetch.
     */
    orderBy?: HistorialCalidadOrderByWithRelationInput | HistorialCalidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HistorialCalidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistorialCalidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistorialCalidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HistorialCalidads
    **/
    _count?: true | HistorialCalidadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HistorialCalidadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HistorialCalidadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistorialCalidadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistorialCalidadMaxAggregateInputType
  }

  export type GetHistorialCalidadAggregateType<T extends HistorialCalidadAggregateArgs> = {
        [P in keyof T & keyof AggregateHistorialCalidad]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistorialCalidad[P]>
      : GetScalarType<T[P], AggregateHistorialCalidad[P]>
  }




  export type HistorialCalidadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistorialCalidadWhereInput
    orderBy?: HistorialCalidadOrderByWithAggregationInput | HistorialCalidadOrderByWithAggregationInput[]
    by: HistorialCalidadScalarFieldEnum[] | HistorialCalidadScalarFieldEnum
    having?: HistorialCalidadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistorialCalidadCountAggregateInputType | true
    _avg?: HistorialCalidadAvgAggregateInputType
    _sum?: HistorialCalidadSumAggregateInputType
    _min?: HistorialCalidadMinAggregateInputType
    _max?: HistorialCalidadMaxAggregateInputType
  }

  export type HistorialCalidadGroupByOutputType = {
    id_historial: string
    id_registro: string
    accion: string
    version: number
    actor_id: string | null
    actor: string | null
    detalle: JsonValue | null
    fecha: Date
    _count: HistorialCalidadCountAggregateOutputType | null
    _avg: HistorialCalidadAvgAggregateOutputType | null
    _sum: HistorialCalidadSumAggregateOutputType | null
    _min: HistorialCalidadMinAggregateOutputType | null
    _max: HistorialCalidadMaxAggregateOutputType | null
  }

  type GetHistorialCalidadGroupByPayload<T extends HistorialCalidadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistorialCalidadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistorialCalidadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistorialCalidadGroupByOutputType[P]>
            : GetScalarType<T[P], HistorialCalidadGroupByOutputType[P]>
        }
      >
    >


  export type HistorialCalidadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_historial?: boolean
    id_registro?: boolean
    accion?: boolean
    version?: boolean
    actor_id?: boolean
    actor?: boolean
    detalle?: boolean
    fecha?: boolean
    registro?: boolean | RegistroCalidadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historialCalidad"]>

  export type HistorialCalidadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_historial?: boolean
    id_registro?: boolean
    accion?: boolean
    version?: boolean
    actor_id?: boolean
    actor?: boolean
    detalle?: boolean
    fecha?: boolean
    registro?: boolean | RegistroCalidadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historialCalidad"]>

  export type HistorialCalidadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_historial?: boolean
    id_registro?: boolean
    accion?: boolean
    version?: boolean
    actor_id?: boolean
    actor?: boolean
    detalle?: boolean
    fecha?: boolean
    registro?: boolean | RegistroCalidadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historialCalidad"]>

  export type HistorialCalidadSelectScalar = {
    id_historial?: boolean
    id_registro?: boolean
    accion?: boolean
    version?: boolean
    actor_id?: boolean
    actor?: boolean
    detalle?: boolean
    fecha?: boolean
  }

  export type HistorialCalidadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_historial" | "id_registro" | "accion" | "version" | "actor_id" | "actor" | "detalle" | "fecha", ExtArgs["result"]["historialCalidad"]>
  export type HistorialCalidadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registro?: boolean | RegistroCalidadDefaultArgs<ExtArgs>
  }
  export type HistorialCalidadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registro?: boolean | RegistroCalidadDefaultArgs<ExtArgs>
  }
  export type HistorialCalidadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registro?: boolean | RegistroCalidadDefaultArgs<ExtArgs>
  }

  export type $HistorialCalidadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HistorialCalidad"
    objects: {
      registro: Prisma.$RegistroCalidadPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_historial: string
      id_registro: string
      accion: string
      version: number
      actor_id: string | null
      actor: string | null
      detalle: Prisma.JsonValue | null
      fecha: Date
    }, ExtArgs["result"]["historialCalidad"]>
    composites: {}
  }

  type HistorialCalidadGetPayload<S extends boolean | null | undefined | HistorialCalidadDefaultArgs> = $Result.GetResult<Prisma.$HistorialCalidadPayload, S>

  type HistorialCalidadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HistorialCalidadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HistorialCalidadCountAggregateInputType | true
    }

  export interface HistorialCalidadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HistorialCalidad'], meta: { name: 'HistorialCalidad' } }
    /**
     * Find zero or one HistorialCalidad that matches the filter.
     * @param {HistorialCalidadFindUniqueArgs} args - Arguments to find a HistorialCalidad
     * @example
     * // Get one HistorialCalidad
     * const historialCalidad = await prisma.historialCalidad.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HistorialCalidadFindUniqueArgs>(args: SelectSubset<T, HistorialCalidadFindUniqueArgs<ExtArgs>>): Prisma__HistorialCalidadClient<$Result.GetResult<Prisma.$HistorialCalidadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HistorialCalidad that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HistorialCalidadFindUniqueOrThrowArgs} args - Arguments to find a HistorialCalidad
     * @example
     * // Get one HistorialCalidad
     * const historialCalidad = await prisma.historialCalidad.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HistorialCalidadFindUniqueOrThrowArgs>(args: SelectSubset<T, HistorialCalidadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HistorialCalidadClient<$Result.GetResult<Prisma.$HistorialCalidadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistorialCalidad that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialCalidadFindFirstArgs} args - Arguments to find a HistorialCalidad
     * @example
     * // Get one HistorialCalidad
     * const historialCalidad = await prisma.historialCalidad.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HistorialCalidadFindFirstArgs>(args?: SelectSubset<T, HistorialCalidadFindFirstArgs<ExtArgs>>): Prisma__HistorialCalidadClient<$Result.GetResult<Prisma.$HistorialCalidadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistorialCalidad that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialCalidadFindFirstOrThrowArgs} args - Arguments to find a HistorialCalidad
     * @example
     * // Get one HistorialCalidad
     * const historialCalidad = await prisma.historialCalidad.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HistorialCalidadFindFirstOrThrowArgs>(args?: SelectSubset<T, HistorialCalidadFindFirstOrThrowArgs<ExtArgs>>): Prisma__HistorialCalidadClient<$Result.GetResult<Prisma.$HistorialCalidadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HistorialCalidads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialCalidadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HistorialCalidads
     * const historialCalidads = await prisma.historialCalidad.findMany()
     * 
     * // Get first 10 HistorialCalidads
     * const historialCalidads = await prisma.historialCalidad.findMany({ take: 10 })
     * 
     * // Only select the `id_historial`
     * const historialCalidadWithId_historialOnly = await prisma.historialCalidad.findMany({ select: { id_historial: true } })
     * 
     */
    findMany<T extends HistorialCalidadFindManyArgs>(args?: SelectSubset<T, HistorialCalidadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistorialCalidadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HistorialCalidad.
     * @param {HistorialCalidadCreateArgs} args - Arguments to create a HistorialCalidad.
     * @example
     * // Create one HistorialCalidad
     * const HistorialCalidad = await prisma.historialCalidad.create({
     *   data: {
     *     // ... data to create a HistorialCalidad
     *   }
     * })
     * 
     */
    create<T extends HistorialCalidadCreateArgs>(args: SelectSubset<T, HistorialCalidadCreateArgs<ExtArgs>>): Prisma__HistorialCalidadClient<$Result.GetResult<Prisma.$HistorialCalidadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HistorialCalidads.
     * @param {HistorialCalidadCreateManyArgs} args - Arguments to create many HistorialCalidads.
     * @example
     * // Create many HistorialCalidads
     * const historialCalidad = await prisma.historialCalidad.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HistorialCalidadCreateManyArgs>(args?: SelectSubset<T, HistorialCalidadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HistorialCalidads and returns the data saved in the database.
     * @param {HistorialCalidadCreateManyAndReturnArgs} args - Arguments to create many HistorialCalidads.
     * @example
     * // Create many HistorialCalidads
     * const historialCalidad = await prisma.historialCalidad.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HistorialCalidads and only return the `id_historial`
     * const historialCalidadWithId_historialOnly = await prisma.historialCalidad.createManyAndReturn({
     *   select: { id_historial: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HistorialCalidadCreateManyAndReturnArgs>(args?: SelectSubset<T, HistorialCalidadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistorialCalidadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HistorialCalidad.
     * @param {HistorialCalidadDeleteArgs} args - Arguments to delete one HistorialCalidad.
     * @example
     * // Delete one HistorialCalidad
     * const HistorialCalidad = await prisma.historialCalidad.delete({
     *   where: {
     *     // ... filter to delete one HistorialCalidad
     *   }
     * })
     * 
     */
    delete<T extends HistorialCalidadDeleteArgs>(args: SelectSubset<T, HistorialCalidadDeleteArgs<ExtArgs>>): Prisma__HistorialCalidadClient<$Result.GetResult<Prisma.$HistorialCalidadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HistorialCalidad.
     * @param {HistorialCalidadUpdateArgs} args - Arguments to update one HistorialCalidad.
     * @example
     * // Update one HistorialCalidad
     * const historialCalidad = await prisma.historialCalidad.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HistorialCalidadUpdateArgs>(args: SelectSubset<T, HistorialCalidadUpdateArgs<ExtArgs>>): Prisma__HistorialCalidadClient<$Result.GetResult<Prisma.$HistorialCalidadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HistorialCalidads.
     * @param {HistorialCalidadDeleteManyArgs} args - Arguments to filter HistorialCalidads to delete.
     * @example
     * // Delete a few HistorialCalidads
     * const { count } = await prisma.historialCalidad.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HistorialCalidadDeleteManyArgs>(args?: SelectSubset<T, HistorialCalidadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistorialCalidads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialCalidadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HistorialCalidads
     * const historialCalidad = await prisma.historialCalidad.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HistorialCalidadUpdateManyArgs>(args: SelectSubset<T, HistorialCalidadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistorialCalidads and returns the data updated in the database.
     * @param {HistorialCalidadUpdateManyAndReturnArgs} args - Arguments to update many HistorialCalidads.
     * @example
     * // Update many HistorialCalidads
     * const historialCalidad = await prisma.historialCalidad.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HistorialCalidads and only return the `id_historial`
     * const historialCalidadWithId_historialOnly = await prisma.historialCalidad.updateManyAndReturn({
     *   select: { id_historial: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HistorialCalidadUpdateManyAndReturnArgs>(args: SelectSubset<T, HistorialCalidadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistorialCalidadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HistorialCalidad.
     * @param {HistorialCalidadUpsertArgs} args - Arguments to update or create a HistorialCalidad.
     * @example
     * // Update or create a HistorialCalidad
     * const historialCalidad = await prisma.historialCalidad.upsert({
     *   create: {
     *     // ... data to create a HistorialCalidad
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HistorialCalidad we want to update
     *   }
     * })
     */
    upsert<T extends HistorialCalidadUpsertArgs>(args: SelectSubset<T, HistorialCalidadUpsertArgs<ExtArgs>>): Prisma__HistorialCalidadClient<$Result.GetResult<Prisma.$HistorialCalidadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HistorialCalidads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialCalidadCountArgs} args - Arguments to filter HistorialCalidads to count.
     * @example
     * // Count the number of HistorialCalidads
     * const count = await prisma.historialCalidad.count({
     *   where: {
     *     // ... the filter for the HistorialCalidads we want to count
     *   }
     * })
    **/
    count<T extends HistorialCalidadCountArgs>(
      args?: Subset<T, HistorialCalidadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistorialCalidadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HistorialCalidad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialCalidadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HistorialCalidadAggregateArgs>(args: Subset<T, HistorialCalidadAggregateArgs>): Prisma.PrismaPromise<GetHistorialCalidadAggregateType<T>>

    /**
     * Group by HistorialCalidad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialCalidadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HistorialCalidadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistorialCalidadGroupByArgs['orderBy'] }
        : { orderBy?: HistorialCalidadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HistorialCalidadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistorialCalidadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HistorialCalidad model
   */
  readonly fields: HistorialCalidadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HistorialCalidad.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HistorialCalidadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    registro<T extends RegistroCalidadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RegistroCalidadDefaultArgs<ExtArgs>>): Prisma__RegistroCalidadClient<$Result.GetResult<Prisma.$RegistroCalidadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HistorialCalidad model
   */
  interface HistorialCalidadFieldRefs {
    readonly id_historial: FieldRef<"HistorialCalidad", 'String'>
    readonly id_registro: FieldRef<"HistorialCalidad", 'String'>
    readonly accion: FieldRef<"HistorialCalidad", 'String'>
    readonly version: FieldRef<"HistorialCalidad", 'Int'>
    readonly actor_id: FieldRef<"HistorialCalidad", 'String'>
    readonly actor: FieldRef<"HistorialCalidad", 'String'>
    readonly detalle: FieldRef<"HistorialCalidad", 'Json'>
    readonly fecha: FieldRef<"HistorialCalidad", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HistorialCalidad findUnique
   */
  export type HistorialCalidadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialCalidad
     */
    select?: HistorialCalidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialCalidad
     */
    omit?: HistorialCalidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialCalidadInclude<ExtArgs> | null
    /**
     * Filter, which HistorialCalidad to fetch.
     */
    where: HistorialCalidadWhereUniqueInput
  }

  /**
   * HistorialCalidad findUniqueOrThrow
   */
  export type HistorialCalidadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialCalidad
     */
    select?: HistorialCalidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialCalidad
     */
    omit?: HistorialCalidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialCalidadInclude<ExtArgs> | null
    /**
     * Filter, which HistorialCalidad to fetch.
     */
    where: HistorialCalidadWhereUniqueInput
  }

  /**
   * HistorialCalidad findFirst
   */
  export type HistorialCalidadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialCalidad
     */
    select?: HistorialCalidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialCalidad
     */
    omit?: HistorialCalidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialCalidadInclude<ExtArgs> | null
    /**
     * Filter, which HistorialCalidad to fetch.
     */
    where?: HistorialCalidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistorialCalidads to fetch.
     */
    orderBy?: HistorialCalidadOrderByWithRelationInput | HistorialCalidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistorialCalidads.
     */
    cursor?: HistorialCalidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistorialCalidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistorialCalidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistorialCalidads.
     */
    distinct?: HistorialCalidadScalarFieldEnum | HistorialCalidadScalarFieldEnum[]
  }

  /**
   * HistorialCalidad findFirstOrThrow
   */
  export type HistorialCalidadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialCalidad
     */
    select?: HistorialCalidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialCalidad
     */
    omit?: HistorialCalidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialCalidadInclude<ExtArgs> | null
    /**
     * Filter, which HistorialCalidad to fetch.
     */
    where?: HistorialCalidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistorialCalidads to fetch.
     */
    orderBy?: HistorialCalidadOrderByWithRelationInput | HistorialCalidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistorialCalidads.
     */
    cursor?: HistorialCalidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistorialCalidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistorialCalidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistorialCalidads.
     */
    distinct?: HistorialCalidadScalarFieldEnum | HistorialCalidadScalarFieldEnum[]
  }

  /**
   * HistorialCalidad findMany
   */
  export type HistorialCalidadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialCalidad
     */
    select?: HistorialCalidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialCalidad
     */
    omit?: HistorialCalidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialCalidadInclude<ExtArgs> | null
    /**
     * Filter, which HistorialCalidads to fetch.
     */
    where?: HistorialCalidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistorialCalidads to fetch.
     */
    orderBy?: HistorialCalidadOrderByWithRelationInput | HistorialCalidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HistorialCalidads.
     */
    cursor?: HistorialCalidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistorialCalidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistorialCalidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistorialCalidads.
     */
    distinct?: HistorialCalidadScalarFieldEnum | HistorialCalidadScalarFieldEnum[]
  }

  /**
   * HistorialCalidad create
   */
  export type HistorialCalidadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialCalidad
     */
    select?: HistorialCalidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialCalidad
     */
    omit?: HistorialCalidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialCalidadInclude<ExtArgs> | null
    /**
     * The data needed to create a HistorialCalidad.
     */
    data: XOR<HistorialCalidadCreateInput, HistorialCalidadUncheckedCreateInput>
  }

  /**
   * HistorialCalidad createMany
   */
  export type HistorialCalidadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HistorialCalidads.
     */
    data: HistorialCalidadCreateManyInput | HistorialCalidadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HistorialCalidad createManyAndReturn
   */
  export type HistorialCalidadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialCalidad
     */
    select?: HistorialCalidadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialCalidad
     */
    omit?: HistorialCalidadOmit<ExtArgs> | null
    /**
     * The data used to create many HistorialCalidads.
     */
    data: HistorialCalidadCreateManyInput | HistorialCalidadCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialCalidadIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HistorialCalidad update
   */
  export type HistorialCalidadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialCalidad
     */
    select?: HistorialCalidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialCalidad
     */
    omit?: HistorialCalidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialCalidadInclude<ExtArgs> | null
    /**
     * The data needed to update a HistorialCalidad.
     */
    data: XOR<HistorialCalidadUpdateInput, HistorialCalidadUncheckedUpdateInput>
    /**
     * Choose, which HistorialCalidad to update.
     */
    where: HistorialCalidadWhereUniqueInput
  }

  /**
   * HistorialCalidad updateMany
   */
  export type HistorialCalidadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HistorialCalidads.
     */
    data: XOR<HistorialCalidadUpdateManyMutationInput, HistorialCalidadUncheckedUpdateManyInput>
    /**
     * Filter which HistorialCalidads to update
     */
    where?: HistorialCalidadWhereInput
    /**
     * Limit how many HistorialCalidads to update.
     */
    limit?: number
  }

  /**
   * HistorialCalidad updateManyAndReturn
   */
  export type HistorialCalidadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialCalidad
     */
    select?: HistorialCalidadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialCalidad
     */
    omit?: HistorialCalidadOmit<ExtArgs> | null
    /**
     * The data used to update HistorialCalidads.
     */
    data: XOR<HistorialCalidadUpdateManyMutationInput, HistorialCalidadUncheckedUpdateManyInput>
    /**
     * Filter which HistorialCalidads to update
     */
    where?: HistorialCalidadWhereInput
    /**
     * Limit how many HistorialCalidads to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialCalidadIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HistorialCalidad upsert
   */
  export type HistorialCalidadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialCalidad
     */
    select?: HistorialCalidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialCalidad
     */
    omit?: HistorialCalidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialCalidadInclude<ExtArgs> | null
    /**
     * The filter to search for the HistorialCalidad to update in case it exists.
     */
    where: HistorialCalidadWhereUniqueInput
    /**
     * In case the HistorialCalidad found by the `where` argument doesn't exist, create a new HistorialCalidad with this data.
     */
    create: XOR<HistorialCalidadCreateInput, HistorialCalidadUncheckedCreateInput>
    /**
     * In case the HistorialCalidad was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HistorialCalidadUpdateInput, HistorialCalidadUncheckedUpdateInput>
  }

  /**
   * HistorialCalidad delete
   */
  export type HistorialCalidadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialCalidad
     */
    select?: HistorialCalidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialCalidad
     */
    omit?: HistorialCalidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialCalidadInclude<ExtArgs> | null
    /**
     * Filter which HistorialCalidad to delete.
     */
    where: HistorialCalidadWhereUniqueInput
  }

  /**
   * HistorialCalidad deleteMany
   */
  export type HistorialCalidadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistorialCalidads to delete
     */
    where?: HistorialCalidadWhereInput
    /**
     * Limit how many HistorialCalidads to delete.
     */
    limit?: number
  }

  /**
   * HistorialCalidad without action
   */
  export type HistorialCalidadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialCalidad
     */
    select?: HistorialCalidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialCalidad
     */
    omit?: HistorialCalidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialCalidadInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ClienteScalarFieldEnum: {
    id_cliente: 'id_cliente',
    tipo_documento: 'tipo_documento',
    numero_documento: 'numero_documento',
    telefono: 'telefono',
    nombres: 'nombres',
    apellido_paterno: 'apellido_paterno',
    apellido_materno: 'apellido_materno',
    direccion: 'direccion',
    distrito: 'distrito',
    deuda_castigada: 'deuda_castigada',
    deuda_vigente: 'deuda_vigente',
    otras_deudas: 'otras_deudas',
    estado: 'estado',
    ultima_gestion: 'ultima_gestion',
    latitud: 'latitud',
    longitud: 'longitud'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const AdmisionScalarFieldEnum: {
    id_admision: 'id_admision',
    id_cliente: 'id_cliente',
    producto: 'producto',
    linea_credito: 'linea_credito',
    estado: 'estado',
    fecha: 'fecha'
  };

  export type AdmisionScalarFieldEnum = (typeof AdmisionScalarFieldEnum)[keyof typeof AdmisionScalarFieldEnum]


  export const AsesorScalarFieldEnum: {
    id_asesor: 'id_asesor',
    dni: 'dni',
    nombres: 'nombres',
    apellido_paterno: 'apellido_paterno',
    apellido_materno: 'apellido_materno',
    telefono: 'telefono',
    correo: 'correo',
    distrito: 'distrito',
    estado: 'estado',
    latitud: 'latitud',
    longitud: 'longitud',
    fecha_creacion: 'fecha_creacion',
    fecha_actualizar: 'fecha_actualizar'
  };

  export type AsesorScalarFieldEnum = (typeof AsesorScalarFieldEnum)[keyof typeof AsesorScalarFieldEnum]


  export const AsignacionClienteScalarFieldEnum: {
    id_asignacion: 'id_asignacion',
    id_cliente: 'id_cliente',
    id_asesor: 'id_asesor',
    fecha_asignacion: 'fecha_asignacion',
    fecha_fin: 'fecha_fin',
    estado: 'estado'
  };

  export type AsignacionClienteScalarFieldEnum = (typeof AsignacionClienteScalarFieldEnum)[keyof typeof AsignacionClienteScalarFieldEnum]


  export const RutaScalarFieldEnum: {
    id_ruta: 'id_ruta',
    id_asesor: 'id_asesor',
    fecha_programada: 'fecha_programada',
    fecha_inicio_real: 'fecha_inicio_real',
    fecha_fin_real: 'fecha_fin_real',
    estado: 'estado',
    fecha_creacion: 'fecha_creacion',
    fecha_actualizar: 'fecha_actualizar'
  };

  export type RutaScalarFieldEnum = (typeof RutaScalarFieldEnum)[keyof typeof RutaScalarFieldEnum]


  export const RutaClienteScalarFieldEnum: {
    id_ruta_cliente: 'id_ruta_cliente',
    id_ruta: 'id_ruta',
    id_cliente: 'id_cliente',
    secuencia: 'secuencia',
    estado_visita: 'estado_visita',
    prioridad: 'prioridad',
    fecha_creacion: 'fecha_creacion',
    fecha_actualizar: 'fecha_actualizar'
  };

  export type RutaClienteScalarFieldEnum = (typeof RutaClienteScalarFieldEnum)[keyof typeof RutaClienteScalarFieldEnum]


  export const VisitaScalarFieldEnum: {
    id_visita: 'id_visita',
    client_sync_id: 'client_sync_id',
    id_ruta_cliente: 'id_ruta_cliente',
    id_cliente: 'id_cliente',
    id_asesor: 'id_asesor',
    tipo_visita: 'tipo_visita',
    fecha_hora_checkin: 'fecha_hora_checkin',
    fecha_hora_checkout: 'fecha_hora_checkout',
    latitud: 'latitud',
    longitud: 'longitud',
    resultado: 'resultado',
    es_efectiva: 'es_efectiva',
    monto_recaudado: 'monto_recaudado',
    fecha_promesa: 'fecha_promesa',
    observaciones: 'observaciones',
    foto_url: 'foto_url',
    foto_adicional_url: 'foto_adicional_url',
    video_url: 'video_url',
    foto_evidencia: 'foto_evidencia',
    firma_evidencia: 'firma_evidencia',
    fecha_creacion: 'fecha_creacion',
    fecha_actualizar: 'fecha_actualizar'
  };

  export type VisitaScalarFieldEnum = (typeof VisitaScalarFieldEnum)[keyof typeof VisitaScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id_usuario: 'id_usuario',
    username: 'username',
    nombres: 'nombres',
    apellidos: 'apellidos',
    email: 'email',
    sede: 'sede',
    password_hash: 'password_hash',
    rol: 'rol',
    estado: 'estado',
    id_asesor: 'id_asesor',
    fecha_creacion: 'fecha_creacion',
    mfa_habilitado: 'mfa_habilitado',
    mfa_requerido: 'mfa_requerido',
    mfa_exento: 'mfa_exento',
    mfa_secreto: 'mfa_secreto',
    mfa_ultimo_uso: 'mfa_ultimo_uso',
    token_version: 'token_version',
    intentos_fallidos: 'intentos_fallidos',
    bloqueado_hasta: 'bloqueado_hasta',
    ultimo_acceso: 'ultimo_acceso',
    password_cambio: 'password_cambio'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const AuditoriaSeguridadScalarFieldEnum: {
    id_auditoria: 'id_auditoria',
    fecha: 'fecha',
    request_id: 'request_id',
    actor_id: 'actor_id',
    actor: 'actor',
    rol: 'rol',
    metodo: 'metodo',
    ruta: 'ruta',
    estado_http: 'estado_http',
    ip_address: 'ip_address',
    ip_hash: 'ip_hash',
    user_agent: 'user_agent'
  };

  export type AuditoriaSeguridadScalarFieldEnum = (typeof AuditoriaSeguridadScalarFieldEnum)[keyof typeof AuditoriaSeguridadScalarFieldEnum]


  export const ImportacionMasivaScalarFieldEnum: {
    id_importacion: 'id_importacion',
    tipo: 'tipo',
    estado: 'estado',
    archivo: 'archivo',
    ruta_temporal: 'ruta_temporal',
    actor_id: 'actor_id',
    total_filas: 'total_filas',
    procesadas: 'procesadas',
    insertadas: 'insertadas',
    actualizadas: 'actualizadas',
    omitidas: 'omitidas',
    errores: 'errores',
    detalle_error: 'detalle_error',
    fecha_creacion: 'fecha_creacion',
    fecha_inicio: 'fecha_inicio',
    fecha_fin: 'fecha_fin'
  };

  export type ImportacionMasivaScalarFieldEnum = (typeof ImportacionMasivaScalarFieldEnum)[keyof typeof ImportacionMasivaScalarFieldEnum]


  export const RegistroCalidadScalarFieldEnum: {
    id_registro: 'id_registro',
    tipo: 'tipo',
    codigo: 'codigo',
    titulo: 'titulo',
    descripcion: 'descripcion',
    estado: 'estado',
    responsable_id: 'responsable_id',
    responsable: 'responsable',
    fecha_objetivo: 'fecha_objetivo',
    fecha_cierre: 'fecha_cierre',
    clausula_iso: 'clausula_iso',
    indicador: 'indicador',
    meta: 'meta',
    valor_actual: 'valor_actual',
    unidad: 'unidad',
    datos: 'datos',
    evidencia: 'evidencia',
    version: 'version',
    creado_por: 'creado_por',
    actualizado_por: 'actualizado_por',
    fecha_creacion: 'fecha_creacion',
    fecha_actualizar: 'fecha_actualizar'
  };

  export type RegistroCalidadScalarFieldEnum = (typeof RegistroCalidadScalarFieldEnum)[keyof typeof RegistroCalidadScalarFieldEnum]


  export const HistorialCalidadScalarFieldEnum: {
    id_historial: 'id_historial',
    id_registro: 'id_registro',
    accion: 'accion',
    version: 'version',
    actor_id: 'actor_id',
    actor: 'actor',
    detalle: 'detalle',
    fecha: 'fecha'
  };

  export type HistorialCalidadScalarFieldEnum = (typeof HistorialCalidadScalarFieldEnum)[keyof typeof HistorialCalidadScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'TipoDocumento'
   */
  export type EnumTipoDocumentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoDocumento'>
    


  /**
   * Reference to a field of type 'TipoDocumento[]'
   */
  export type ListEnumTipoDocumentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoDocumento[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    id_cliente?: IntFilter<"Cliente"> | number
    tipo_documento?: EnumTipoDocumentoFilter<"Cliente"> | $Enums.TipoDocumento
    numero_documento?: StringFilter<"Cliente"> | string
    telefono?: StringNullableFilter<"Cliente"> | string | null
    nombres?: StringFilter<"Cliente"> | string
    apellido_paterno?: StringFilter<"Cliente"> | string
    apellido_materno?: StringFilter<"Cliente"> | string
    direccion?: StringNullableFilter<"Cliente"> | string | null
    distrito?: StringNullableFilter<"Cliente"> | string | null
    deuda_castigada?: DecimalFilter<"Cliente"> | Decimal | DecimalJsLike | number | string
    deuda_vigente?: DecimalFilter<"Cliente"> | Decimal | DecimalJsLike | number | string
    otras_deudas?: DecimalFilter<"Cliente"> | Decimal | DecimalJsLike | number | string
    estado?: StringFilter<"Cliente"> | string
    ultima_gestion?: DateTimeNullableFilter<"Cliente"> | Date | string | null
    latitud?: DecimalNullableFilter<"Cliente"> | Decimal | DecimalJsLike | number | string | null
    longitud?: DecimalNullableFilter<"Cliente"> | Decimal | DecimalJsLike | number | string | null
    admisiones?: AdmisionListRelationFilter
    asignaciones?: AsignacionClienteListRelationFilter
    rutas_clientes?: RutaClienteListRelationFilter
    visitas?: VisitaListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    id_cliente?: SortOrder
    tipo_documento?: SortOrder
    numero_documento?: SortOrder
    telefono?: SortOrderInput | SortOrder
    nombres?: SortOrder
    apellido_paterno?: SortOrder
    apellido_materno?: SortOrder
    direccion?: SortOrderInput | SortOrder
    distrito?: SortOrderInput | SortOrder
    deuda_castigada?: SortOrder
    deuda_vigente?: SortOrder
    otras_deudas?: SortOrder
    estado?: SortOrder
    ultima_gestion?: SortOrderInput | SortOrder
    latitud?: SortOrderInput | SortOrder
    longitud?: SortOrderInput | SortOrder
    admisiones?: AdmisionOrderByRelationAggregateInput
    asignaciones?: AsignacionClienteOrderByRelationAggregateInput
    rutas_clientes?: RutaClienteOrderByRelationAggregateInput
    visitas?: VisitaOrderByRelationAggregateInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    id_cliente?: number
    tipo_documento_numero_documento?: ClienteTipo_documentoNumero_documentoCompoundUniqueInput
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    tipo_documento?: EnumTipoDocumentoFilter<"Cliente"> | $Enums.TipoDocumento
    numero_documento?: StringFilter<"Cliente"> | string
    telefono?: StringNullableFilter<"Cliente"> | string | null
    nombres?: StringFilter<"Cliente"> | string
    apellido_paterno?: StringFilter<"Cliente"> | string
    apellido_materno?: StringFilter<"Cliente"> | string
    direccion?: StringNullableFilter<"Cliente"> | string | null
    distrito?: StringNullableFilter<"Cliente"> | string | null
    deuda_castigada?: DecimalFilter<"Cliente"> | Decimal | DecimalJsLike | number | string
    deuda_vigente?: DecimalFilter<"Cliente"> | Decimal | DecimalJsLike | number | string
    otras_deudas?: DecimalFilter<"Cliente"> | Decimal | DecimalJsLike | number | string
    estado?: StringFilter<"Cliente"> | string
    ultima_gestion?: DateTimeNullableFilter<"Cliente"> | Date | string | null
    latitud?: DecimalNullableFilter<"Cliente"> | Decimal | DecimalJsLike | number | string | null
    longitud?: DecimalNullableFilter<"Cliente"> | Decimal | DecimalJsLike | number | string | null
    admisiones?: AdmisionListRelationFilter
    asignaciones?: AsignacionClienteListRelationFilter
    rutas_clientes?: RutaClienteListRelationFilter
    visitas?: VisitaListRelationFilter
  }, "id_cliente" | "tipo_documento_numero_documento">

  export type ClienteOrderByWithAggregationInput = {
    id_cliente?: SortOrder
    tipo_documento?: SortOrder
    numero_documento?: SortOrder
    telefono?: SortOrderInput | SortOrder
    nombres?: SortOrder
    apellido_paterno?: SortOrder
    apellido_materno?: SortOrder
    direccion?: SortOrderInput | SortOrder
    distrito?: SortOrderInput | SortOrder
    deuda_castigada?: SortOrder
    deuda_vigente?: SortOrder
    otras_deudas?: SortOrder
    estado?: SortOrder
    ultima_gestion?: SortOrderInput | SortOrder
    latitud?: SortOrderInput | SortOrder
    longitud?: SortOrderInput | SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _avg?: ClienteAvgOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
    _sum?: ClienteSumOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    id_cliente?: IntWithAggregatesFilter<"Cliente"> | number
    tipo_documento?: EnumTipoDocumentoWithAggregatesFilter<"Cliente"> | $Enums.TipoDocumento
    numero_documento?: StringWithAggregatesFilter<"Cliente"> | string
    telefono?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    nombres?: StringWithAggregatesFilter<"Cliente"> | string
    apellido_paterno?: StringWithAggregatesFilter<"Cliente"> | string
    apellido_materno?: StringWithAggregatesFilter<"Cliente"> | string
    direccion?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    distrito?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    deuda_castigada?: DecimalWithAggregatesFilter<"Cliente"> | Decimal | DecimalJsLike | number | string
    deuda_vigente?: DecimalWithAggregatesFilter<"Cliente"> | Decimal | DecimalJsLike | number | string
    otras_deudas?: DecimalWithAggregatesFilter<"Cliente"> | Decimal | DecimalJsLike | number | string
    estado?: StringWithAggregatesFilter<"Cliente"> | string
    ultima_gestion?: DateTimeNullableWithAggregatesFilter<"Cliente"> | Date | string | null
    latitud?: DecimalNullableWithAggregatesFilter<"Cliente"> | Decimal | DecimalJsLike | number | string | null
    longitud?: DecimalNullableWithAggregatesFilter<"Cliente"> | Decimal | DecimalJsLike | number | string | null
  }

  export type AdmisionWhereInput = {
    AND?: AdmisionWhereInput | AdmisionWhereInput[]
    OR?: AdmisionWhereInput[]
    NOT?: AdmisionWhereInput | AdmisionWhereInput[]
    id_admision?: IntFilter<"Admision"> | number
    id_cliente?: IntFilter<"Admision"> | number
    producto?: StringNullableFilter<"Admision"> | string | null
    linea_credito?: DecimalNullableFilter<"Admision"> | Decimal | DecimalJsLike | number | string | null
    estado?: StringFilter<"Admision"> | string
    fecha?: DateTimeNullableFilter<"Admision"> | Date | string | null
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
  }

  export type AdmisionOrderByWithRelationInput = {
    id_admision?: SortOrder
    id_cliente?: SortOrder
    producto?: SortOrderInput | SortOrder
    linea_credito?: SortOrderInput | SortOrder
    estado?: SortOrder
    fecha?: SortOrderInput | SortOrder
    cliente?: ClienteOrderByWithRelationInput
  }

  export type AdmisionWhereUniqueInput = Prisma.AtLeast<{
    id_admision?: number
    id_cliente?: number
    AND?: AdmisionWhereInput | AdmisionWhereInput[]
    OR?: AdmisionWhereInput[]
    NOT?: AdmisionWhereInput | AdmisionWhereInput[]
    producto?: StringNullableFilter<"Admision"> | string | null
    linea_credito?: DecimalNullableFilter<"Admision"> | Decimal | DecimalJsLike | number | string | null
    estado?: StringFilter<"Admision"> | string
    fecha?: DateTimeNullableFilter<"Admision"> | Date | string | null
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
  }, "id_admision" | "id_cliente">

  export type AdmisionOrderByWithAggregationInput = {
    id_admision?: SortOrder
    id_cliente?: SortOrder
    producto?: SortOrderInput | SortOrder
    linea_credito?: SortOrderInput | SortOrder
    estado?: SortOrder
    fecha?: SortOrderInput | SortOrder
    _count?: AdmisionCountOrderByAggregateInput
    _avg?: AdmisionAvgOrderByAggregateInput
    _max?: AdmisionMaxOrderByAggregateInput
    _min?: AdmisionMinOrderByAggregateInput
    _sum?: AdmisionSumOrderByAggregateInput
  }

  export type AdmisionScalarWhereWithAggregatesInput = {
    AND?: AdmisionScalarWhereWithAggregatesInput | AdmisionScalarWhereWithAggregatesInput[]
    OR?: AdmisionScalarWhereWithAggregatesInput[]
    NOT?: AdmisionScalarWhereWithAggregatesInput | AdmisionScalarWhereWithAggregatesInput[]
    id_admision?: IntWithAggregatesFilter<"Admision"> | number
    id_cliente?: IntWithAggregatesFilter<"Admision"> | number
    producto?: StringNullableWithAggregatesFilter<"Admision"> | string | null
    linea_credito?: DecimalNullableWithAggregatesFilter<"Admision"> | Decimal | DecimalJsLike | number | string | null
    estado?: StringWithAggregatesFilter<"Admision"> | string
    fecha?: DateTimeNullableWithAggregatesFilter<"Admision"> | Date | string | null
  }

  export type AsesorWhereInput = {
    AND?: AsesorWhereInput | AsesorWhereInput[]
    OR?: AsesorWhereInput[]
    NOT?: AsesorWhereInput | AsesorWhereInput[]
    id_asesor?: IntFilter<"Asesor"> | number
    dni?: StringFilter<"Asesor"> | string
    nombres?: StringFilter<"Asesor"> | string
    apellido_paterno?: StringFilter<"Asesor"> | string
    apellido_materno?: StringFilter<"Asesor"> | string
    telefono?: StringNullableFilter<"Asesor"> | string | null
    correo?: StringNullableFilter<"Asesor"> | string | null
    distrito?: StringNullableFilter<"Asesor"> | string | null
    estado?: StringFilter<"Asesor"> | string
    latitud?: DecimalNullableFilter<"Asesor"> | Decimal | DecimalJsLike | number | string | null
    longitud?: DecimalNullableFilter<"Asesor"> | Decimal | DecimalJsLike | number | string | null
    fecha_creacion?: DateTimeFilter<"Asesor"> | Date | string
    fecha_actualizar?: DateTimeFilter<"Asesor"> | Date | string
    asignaciones?: AsignacionClienteListRelationFilter
    rutas?: RutaListRelationFilter
    visitas?: VisitaListRelationFilter
    usuario?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
  }

  export type AsesorOrderByWithRelationInput = {
    id_asesor?: SortOrder
    dni?: SortOrder
    nombres?: SortOrder
    apellido_paterno?: SortOrder
    apellido_materno?: SortOrder
    telefono?: SortOrderInput | SortOrder
    correo?: SortOrderInput | SortOrder
    distrito?: SortOrderInput | SortOrder
    estado?: SortOrder
    latitud?: SortOrderInput | SortOrder
    longitud?: SortOrderInput | SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizar?: SortOrder
    asignaciones?: AsignacionClienteOrderByRelationAggregateInput
    rutas?: RutaOrderByRelationAggregateInput
    visitas?: VisitaOrderByRelationAggregateInput
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type AsesorWhereUniqueInput = Prisma.AtLeast<{
    id_asesor?: number
    dni?: string
    AND?: AsesorWhereInput | AsesorWhereInput[]
    OR?: AsesorWhereInput[]
    NOT?: AsesorWhereInput | AsesorWhereInput[]
    nombres?: StringFilter<"Asesor"> | string
    apellido_paterno?: StringFilter<"Asesor"> | string
    apellido_materno?: StringFilter<"Asesor"> | string
    telefono?: StringNullableFilter<"Asesor"> | string | null
    correo?: StringNullableFilter<"Asesor"> | string | null
    distrito?: StringNullableFilter<"Asesor"> | string | null
    estado?: StringFilter<"Asesor"> | string
    latitud?: DecimalNullableFilter<"Asesor"> | Decimal | DecimalJsLike | number | string | null
    longitud?: DecimalNullableFilter<"Asesor"> | Decimal | DecimalJsLike | number | string | null
    fecha_creacion?: DateTimeFilter<"Asesor"> | Date | string
    fecha_actualizar?: DateTimeFilter<"Asesor"> | Date | string
    asignaciones?: AsignacionClienteListRelationFilter
    rutas?: RutaListRelationFilter
    visitas?: VisitaListRelationFilter
    usuario?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
  }, "id_asesor" | "dni">

  export type AsesorOrderByWithAggregationInput = {
    id_asesor?: SortOrder
    dni?: SortOrder
    nombres?: SortOrder
    apellido_paterno?: SortOrder
    apellido_materno?: SortOrder
    telefono?: SortOrderInput | SortOrder
    correo?: SortOrderInput | SortOrder
    distrito?: SortOrderInput | SortOrder
    estado?: SortOrder
    latitud?: SortOrderInput | SortOrder
    longitud?: SortOrderInput | SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizar?: SortOrder
    _count?: AsesorCountOrderByAggregateInput
    _avg?: AsesorAvgOrderByAggregateInput
    _max?: AsesorMaxOrderByAggregateInput
    _min?: AsesorMinOrderByAggregateInput
    _sum?: AsesorSumOrderByAggregateInput
  }

  export type AsesorScalarWhereWithAggregatesInput = {
    AND?: AsesorScalarWhereWithAggregatesInput | AsesorScalarWhereWithAggregatesInput[]
    OR?: AsesorScalarWhereWithAggregatesInput[]
    NOT?: AsesorScalarWhereWithAggregatesInput | AsesorScalarWhereWithAggregatesInput[]
    id_asesor?: IntWithAggregatesFilter<"Asesor"> | number
    dni?: StringWithAggregatesFilter<"Asesor"> | string
    nombres?: StringWithAggregatesFilter<"Asesor"> | string
    apellido_paterno?: StringWithAggregatesFilter<"Asesor"> | string
    apellido_materno?: StringWithAggregatesFilter<"Asesor"> | string
    telefono?: StringNullableWithAggregatesFilter<"Asesor"> | string | null
    correo?: StringNullableWithAggregatesFilter<"Asesor"> | string | null
    distrito?: StringNullableWithAggregatesFilter<"Asesor"> | string | null
    estado?: StringWithAggregatesFilter<"Asesor"> | string
    latitud?: DecimalNullableWithAggregatesFilter<"Asesor"> | Decimal | DecimalJsLike | number | string | null
    longitud?: DecimalNullableWithAggregatesFilter<"Asesor"> | Decimal | DecimalJsLike | number | string | null
    fecha_creacion?: DateTimeWithAggregatesFilter<"Asesor"> | Date | string
    fecha_actualizar?: DateTimeWithAggregatesFilter<"Asesor"> | Date | string
  }

  export type AsignacionClienteWhereInput = {
    AND?: AsignacionClienteWhereInput | AsignacionClienteWhereInput[]
    OR?: AsignacionClienteWhereInput[]
    NOT?: AsignacionClienteWhereInput | AsignacionClienteWhereInput[]
    id_asignacion?: IntFilter<"AsignacionCliente"> | number
    id_cliente?: IntFilter<"AsignacionCliente"> | number
    id_asesor?: IntFilter<"AsignacionCliente"> | number
    fecha_asignacion?: DateTimeFilter<"AsignacionCliente"> | Date | string
    fecha_fin?: DateTimeNullableFilter<"AsignacionCliente"> | Date | string | null
    estado?: StringFilter<"AsignacionCliente"> | string
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    asesor?: XOR<AsesorScalarRelationFilter, AsesorWhereInput>
  }

  export type AsignacionClienteOrderByWithRelationInput = {
    id_asignacion?: SortOrder
    id_cliente?: SortOrder
    id_asesor?: SortOrder
    fecha_asignacion?: SortOrder
    fecha_fin?: SortOrderInput | SortOrder
    estado?: SortOrder
    cliente?: ClienteOrderByWithRelationInput
    asesor?: AsesorOrderByWithRelationInput
  }

  export type AsignacionClienteWhereUniqueInput = Prisma.AtLeast<{
    id_asignacion?: number
    AND?: AsignacionClienteWhereInput | AsignacionClienteWhereInput[]
    OR?: AsignacionClienteWhereInput[]
    NOT?: AsignacionClienteWhereInput | AsignacionClienteWhereInput[]
    id_cliente?: IntFilter<"AsignacionCliente"> | number
    id_asesor?: IntFilter<"AsignacionCliente"> | number
    fecha_asignacion?: DateTimeFilter<"AsignacionCliente"> | Date | string
    fecha_fin?: DateTimeNullableFilter<"AsignacionCliente"> | Date | string | null
    estado?: StringFilter<"AsignacionCliente"> | string
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    asesor?: XOR<AsesorScalarRelationFilter, AsesorWhereInput>
  }, "id_asignacion">

  export type AsignacionClienteOrderByWithAggregationInput = {
    id_asignacion?: SortOrder
    id_cliente?: SortOrder
    id_asesor?: SortOrder
    fecha_asignacion?: SortOrder
    fecha_fin?: SortOrderInput | SortOrder
    estado?: SortOrder
    _count?: AsignacionClienteCountOrderByAggregateInput
    _avg?: AsignacionClienteAvgOrderByAggregateInput
    _max?: AsignacionClienteMaxOrderByAggregateInput
    _min?: AsignacionClienteMinOrderByAggregateInput
    _sum?: AsignacionClienteSumOrderByAggregateInput
  }

  export type AsignacionClienteScalarWhereWithAggregatesInput = {
    AND?: AsignacionClienteScalarWhereWithAggregatesInput | AsignacionClienteScalarWhereWithAggregatesInput[]
    OR?: AsignacionClienteScalarWhereWithAggregatesInput[]
    NOT?: AsignacionClienteScalarWhereWithAggregatesInput | AsignacionClienteScalarWhereWithAggregatesInput[]
    id_asignacion?: IntWithAggregatesFilter<"AsignacionCliente"> | number
    id_cliente?: IntWithAggregatesFilter<"AsignacionCliente"> | number
    id_asesor?: IntWithAggregatesFilter<"AsignacionCliente"> | number
    fecha_asignacion?: DateTimeWithAggregatesFilter<"AsignacionCliente"> | Date | string
    fecha_fin?: DateTimeNullableWithAggregatesFilter<"AsignacionCliente"> | Date | string | null
    estado?: StringWithAggregatesFilter<"AsignacionCliente"> | string
  }

  export type RutaWhereInput = {
    AND?: RutaWhereInput | RutaWhereInput[]
    OR?: RutaWhereInput[]
    NOT?: RutaWhereInput | RutaWhereInput[]
    id_ruta?: IntFilter<"Ruta"> | number
    id_asesor?: IntFilter<"Ruta"> | number
    fecha_programada?: DateTimeFilter<"Ruta"> | Date | string
    fecha_inicio_real?: DateTimeNullableFilter<"Ruta"> | Date | string | null
    fecha_fin_real?: DateTimeNullableFilter<"Ruta"> | Date | string | null
    estado?: StringFilter<"Ruta"> | string
    fecha_creacion?: DateTimeFilter<"Ruta"> | Date | string
    fecha_actualizar?: DateTimeFilter<"Ruta"> | Date | string
    asesor?: XOR<AsesorScalarRelationFilter, AsesorWhereInput>
    rutas_clientes?: RutaClienteListRelationFilter
  }

  export type RutaOrderByWithRelationInput = {
    id_ruta?: SortOrder
    id_asesor?: SortOrder
    fecha_programada?: SortOrder
    fecha_inicio_real?: SortOrderInput | SortOrder
    fecha_fin_real?: SortOrderInput | SortOrder
    estado?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizar?: SortOrder
    asesor?: AsesorOrderByWithRelationInput
    rutas_clientes?: RutaClienteOrderByRelationAggregateInput
  }

  export type RutaWhereUniqueInput = Prisma.AtLeast<{
    id_ruta?: number
    AND?: RutaWhereInput | RutaWhereInput[]
    OR?: RutaWhereInput[]
    NOT?: RutaWhereInput | RutaWhereInput[]
    id_asesor?: IntFilter<"Ruta"> | number
    fecha_programada?: DateTimeFilter<"Ruta"> | Date | string
    fecha_inicio_real?: DateTimeNullableFilter<"Ruta"> | Date | string | null
    fecha_fin_real?: DateTimeNullableFilter<"Ruta"> | Date | string | null
    estado?: StringFilter<"Ruta"> | string
    fecha_creacion?: DateTimeFilter<"Ruta"> | Date | string
    fecha_actualizar?: DateTimeFilter<"Ruta"> | Date | string
    asesor?: XOR<AsesorScalarRelationFilter, AsesorWhereInput>
    rutas_clientes?: RutaClienteListRelationFilter
  }, "id_ruta">

  export type RutaOrderByWithAggregationInput = {
    id_ruta?: SortOrder
    id_asesor?: SortOrder
    fecha_programada?: SortOrder
    fecha_inicio_real?: SortOrderInput | SortOrder
    fecha_fin_real?: SortOrderInput | SortOrder
    estado?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizar?: SortOrder
    _count?: RutaCountOrderByAggregateInput
    _avg?: RutaAvgOrderByAggregateInput
    _max?: RutaMaxOrderByAggregateInput
    _min?: RutaMinOrderByAggregateInput
    _sum?: RutaSumOrderByAggregateInput
  }

  export type RutaScalarWhereWithAggregatesInput = {
    AND?: RutaScalarWhereWithAggregatesInput | RutaScalarWhereWithAggregatesInput[]
    OR?: RutaScalarWhereWithAggregatesInput[]
    NOT?: RutaScalarWhereWithAggregatesInput | RutaScalarWhereWithAggregatesInput[]
    id_ruta?: IntWithAggregatesFilter<"Ruta"> | number
    id_asesor?: IntWithAggregatesFilter<"Ruta"> | number
    fecha_programada?: DateTimeWithAggregatesFilter<"Ruta"> | Date | string
    fecha_inicio_real?: DateTimeNullableWithAggregatesFilter<"Ruta"> | Date | string | null
    fecha_fin_real?: DateTimeNullableWithAggregatesFilter<"Ruta"> | Date | string | null
    estado?: StringWithAggregatesFilter<"Ruta"> | string
    fecha_creacion?: DateTimeWithAggregatesFilter<"Ruta"> | Date | string
    fecha_actualizar?: DateTimeWithAggregatesFilter<"Ruta"> | Date | string
  }

  export type RutaClienteWhereInput = {
    AND?: RutaClienteWhereInput | RutaClienteWhereInput[]
    OR?: RutaClienteWhereInput[]
    NOT?: RutaClienteWhereInput | RutaClienteWhereInput[]
    id_ruta_cliente?: IntFilter<"RutaCliente"> | number
    id_ruta?: IntFilter<"RutaCliente"> | number
    id_cliente?: IntFilter<"RutaCliente"> | number
    secuencia?: IntFilter<"RutaCliente"> | number
    estado_visita?: StringFilter<"RutaCliente"> | string
    prioridad?: StringFilter<"RutaCliente"> | string
    fecha_creacion?: DateTimeFilter<"RutaCliente"> | Date | string
    fecha_actualizar?: DateTimeFilter<"RutaCliente"> | Date | string
    ruta?: XOR<RutaScalarRelationFilter, RutaWhereInput>
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    visitas?: VisitaListRelationFilter
  }

  export type RutaClienteOrderByWithRelationInput = {
    id_ruta_cliente?: SortOrder
    id_ruta?: SortOrder
    id_cliente?: SortOrder
    secuencia?: SortOrder
    estado_visita?: SortOrder
    prioridad?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizar?: SortOrder
    ruta?: RutaOrderByWithRelationInput
    cliente?: ClienteOrderByWithRelationInput
    visitas?: VisitaOrderByRelationAggregateInput
  }

  export type RutaClienteWhereUniqueInput = Prisma.AtLeast<{
    id_ruta_cliente?: number
    id_ruta_id_cliente?: RutaClienteId_rutaId_clienteCompoundUniqueInput
    AND?: RutaClienteWhereInput | RutaClienteWhereInput[]
    OR?: RutaClienteWhereInput[]
    NOT?: RutaClienteWhereInput | RutaClienteWhereInput[]
    id_ruta?: IntFilter<"RutaCliente"> | number
    id_cliente?: IntFilter<"RutaCliente"> | number
    secuencia?: IntFilter<"RutaCliente"> | number
    estado_visita?: StringFilter<"RutaCliente"> | string
    prioridad?: StringFilter<"RutaCliente"> | string
    fecha_creacion?: DateTimeFilter<"RutaCliente"> | Date | string
    fecha_actualizar?: DateTimeFilter<"RutaCliente"> | Date | string
    ruta?: XOR<RutaScalarRelationFilter, RutaWhereInput>
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    visitas?: VisitaListRelationFilter
  }, "id_ruta_cliente" | "id_ruta_id_cliente">

  export type RutaClienteOrderByWithAggregationInput = {
    id_ruta_cliente?: SortOrder
    id_ruta?: SortOrder
    id_cliente?: SortOrder
    secuencia?: SortOrder
    estado_visita?: SortOrder
    prioridad?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizar?: SortOrder
    _count?: RutaClienteCountOrderByAggregateInput
    _avg?: RutaClienteAvgOrderByAggregateInput
    _max?: RutaClienteMaxOrderByAggregateInput
    _min?: RutaClienteMinOrderByAggregateInput
    _sum?: RutaClienteSumOrderByAggregateInput
  }

  export type RutaClienteScalarWhereWithAggregatesInput = {
    AND?: RutaClienteScalarWhereWithAggregatesInput | RutaClienteScalarWhereWithAggregatesInput[]
    OR?: RutaClienteScalarWhereWithAggregatesInput[]
    NOT?: RutaClienteScalarWhereWithAggregatesInput | RutaClienteScalarWhereWithAggregatesInput[]
    id_ruta_cliente?: IntWithAggregatesFilter<"RutaCliente"> | number
    id_ruta?: IntWithAggregatesFilter<"RutaCliente"> | number
    id_cliente?: IntWithAggregatesFilter<"RutaCliente"> | number
    secuencia?: IntWithAggregatesFilter<"RutaCliente"> | number
    estado_visita?: StringWithAggregatesFilter<"RutaCliente"> | string
    prioridad?: StringWithAggregatesFilter<"RutaCliente"> | string
    fecha_creacion?: DateTimeWithAggregatesFilter<"RutaCliente"> | Date | string
    fecha_actualizar?: DateTimeWithAggregatesFilter<"RutaCliente"> | Date | string
  }

  export type VisitaWhereInput = {
    AND?: VisitaWhereInput | VisitaWhereInput[]
    OR?: VisitaWhereInput[]
    NOT?: VisitaWhereInput | VisitaWhereInput[]
    id_visita?: IntFilter<"Visita"> | number
    client_sync_id?: StringNullableFilter<"Visita"> | string | null
    id_ruta_cliente?: IntNullableFilter<"Visita"> | number | null
    id_cliente?: IntFilter<"Visita"> | number
    id_asesor?: IntFilter<"Visita"> | number
    tipo_visita?: StringFilter<"Visita"> | string
    fecha_hora_checkin?: DateTimeFilter<"Visita"> | Date | string
    fecha_hora_checkout?: DateTimeNullableFilter<"Visita"> | Date | string | null
    latitud?: DecimalFilter<"Visita"> | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFilter<"Visita"> | Decimal | DecimalJsLike | number | string
    resultado?: StringFilter<"Visita"> | string
    es_efectiva?: BoolFilter<"Visita"> | boolean
    monto_recaudado?: DecimalNullableFilter<"Visita"> | Decimal | DecimalJsLike | number | string | null
    fecha_promesa?: DateTimeNullableFilter<"Visita"> | Date | string | null
    observaciones?: StringNullableFilter<"Visita"> | string | null
    foto_url?: StringNullableFilter<"Visita"> | string | null
    foto_adicional_url?: StringNullableFilter<"Visita"> | string | null
    video_url?: StringNullableFilter<"Visita"> | string | null
    foto_evidencia?: StringNullableFilter<"Visita"> | string | null
    firma_evidencia?: StringNullableFilter<"Visita"> | string | null
    fecha_creacion?: DateTimeFilter<"Visita"> | Date | string
    fecha_actualizar?: DateTimeFilter<"Visita"> | Date | string
    ruta_cliente?: XOR<RutaClienteNullableScalarRelationFilter, RutaClienteWhereInput> | null
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    asesor?: XOR<AsesorScalarRelationFilter, AsesorWhereInput>
  }

  export type VisitaOrderByWithRelationInput = {
    id_visita?: SortOrder
    client_sync_id?: SortOrderInput | SortOrder
    id_ruta_cliente?: SortOrderInput | SortOrder
    id_cliente?: SortOrder
    id_asesor?: SortOrder
    tipo_visita?: SortOrder
    fecha_hora_checkin?: SortOrder
    fecha_hora_checkout?: SortOrderInput | SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    resultado?: SortOrder
    es_efectiva?: SortOrder
    monto_recaudado?: SortOrderInput | SortOrder
    fecha_promesa?: SortOrderInput | SortOrder
    observaciones?: SortOrderInput | SortOrder
    foto_url?: SortOrderInput | SortOrder
    foto_adicional_url?: SortOrderInput | SortOrder
    video_url?: SortOrderInput | SortOrder
    foto_evidencia?: SortOrderInput | SortOrder
    firma_evidencia?: SortOrderInput | SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizar?: SortOrder
    ruta_cliente?: RutaClienteOrderByWithRelationInput
    cliente?: ClienteOrderByWithRelationInput
    asesor?: AsesorOrderByWithRelationInput
  }

  export type VisitaWhereUniqueInput = Prisma.AtLeast<{
    id_visita?: number
    client_sync_id?: string
    AND?: VisitaWhereInput | VisitaWhereInput[]
    OR?: VisitaWhereInput[]
    NOT?: VisitaWhereInput | VisitaWhereInput[]
    id_ruta_cliente?: IntNullableFilter<"Visita"> | number | null
    id_cliente?: IntFilter<"Visita"> | number
    id_asesor?: IntFilter<"Visita"> | number
    tipo_visita?: StringFilter<"Visita"> | string
    fecha_hora_checkin?: DateTimeFilter<"Visita"> | Date | string
    fecha_hora_checkout?: DateTimeNullableFilter<"Visita"> | Date | string | null
    latitud?: DecimalFilter<"Visita"> | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFilter<"Visita"> | Decimal | DecimalJsLike | number | string
    resultado?: StringFilter<"Visita"> | string
    es_efectiva?: BoolFilter<"Visita"> | boolean
    monto_recaudado?: DecimalNullableFilter<"Visita"> | Decimal | DecimalJsLike | number | string | null
    fecha_promesa?: DateTimeNullableFilter<"Visita"> | Date | string | null
    observaciones?: StringNullableFilter<"Visita"> | string | null
    foto_url?: StringNullableFilter<"Visita"> | string | null
    foto_adicional_url?: StringNullableFilter<"Visita"> | string | null
    video_url?: StringNullableFilter<"Visita"> | string | null
    foto_evidencia?: StringNullableFilter<"Visita"> | string | null
    firma_evidencia?: StringNullableFilter<"Visita"> | string | null
    fecha_creacion?: DateTimeFilter<"Visita"> | Date | string
    fecha_actualizar?: DateTimeFilter<"Visita"> | Date | string
    ruta_cliente?: XOR<RutaClienteNullableScalarRelationFilter, RutaClienteWhereInput> | null
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    asesor?: XOR<AsesorScalarRelationFilter, AsesorWhereInput>
  }, "id_visita" | "client_sync_id">

  export type VisitaOrderByWithAggregationInput = {
    id_visita?: SortOrder
    client_sync_id?: SortOrderInput | SortOrder
    id_ruta_cliente?: SortOrderInput | SortOrder
    id_cliente?: SortOrder
    id_asesor?: SortOrder
    tipo_visita?: SortOrder
    fecha_hora_checkin?: SortOrder
    fecha_hora_checkout?: SortOrderInput | SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    resultado?: SortOrder
    es_efectiva?: SortOrder
    monto_recaudado?: SortOrderInput | SortOrder
    fecha_promesa?: SortOrderInput | SortOrder
    observaciones?: SortOrderInput | SortOrder
    foto_url?: SortOrderInput | SortOrder
    foto_adicional_url?: SortOrderInput | SortOrder
    video_url?: SortOrderInput | SortOrder
    foto_evidencia?: SortOrderInput | SortOrder
    firma_evidencia?: SortOrderInput | SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizar?: SortOrder
    _count?: VisitaCountOrderByAggregateInput
    _avg?: VisitaAvgOrderByAggregateInput
    _max?: VisitaMaxOrderByAggregateInput
    _min?: VisitaMinOrderByAggregateInput
    _sum?: VisitaSumOrderByAggregateInput
  }

  export type VisitaScalarWhereWithAggregatesInput = {
    AND?: VisitaScalarWhereWithAggregatesInput | VisitaScalarWhereWithAggregatesInput[]
    OR?: VisitaScalarWhereWithAggregatesInput[]
    NOT?: VisitaScalarWhereWithAggregatesInput | VisitaScalarWhereWithAggregatesInput[]
    id_visita?: IntWithAggregatesFilter<"Visita"> | number
    client_sync_id?: StringNullableWithAggregatesFilter<"Visita"> | string | null
    id_ruta_cliente?: IntNullableWithAggregatesFilter<"Visita"> | number | null
    id_cliente?: IntWithAggregatesFilter<"Visita"> | number
    id_asesor?: IntWithAggregatesFilter<"Visita"> | number
    tipo_visita?: StringWithAggregatesFilter<"Visita"> | string
    fecha_hora_checkin?: DateTimeWithAggregatesFilter<"Visita"> | Date | string
    fecha_hora_checkout?: DateTimeNullableWithAggregatesFilter<"Visita"> | Date | string | null
    latitud?: DecimalWithAggregatesFilter<"Visita"> | Decimal | DecimalJsLike | number | string
    longitud?: DecimalWithAggregatesFilter<"Visita"> | Decimal | DecimalJsLike | number | string
    resultado?: StringWithAggregatesFilter<"Visita"> | string
    es_efectiva?: BoolWithAggregatesFilter<"Visita"> | boolean
    monto_recaudado?: DecimalNullableWithAggregatesFilter<"Visita"> | Decimal | DecimalJsLike | number | string | null
    fecha_promesa?: DateTimeNullableWithAggregatesFilter<"Visita"> | Date | string | null
    observaciones?: StringNullableWithAggregatesFilter<"Visita"> | string | null
    foto_url?: StringNullableWithAggregatesFilter<"Visita"> | string | null
    foto_adicional_url?: StringNullableWithAggregatesFilter<"Visita"> | string | null
    video_url?: StringNullableWithAggregatesFilter<"Visita"> | string | null
    foto_evidencia?: StringNullableWithAggregatesFilter<"Visita"> | string | null
    firma_evidencia?: StringNullableWithAggregatesFilter<"Visita"> | string | null
    fecha_creacion?: DateTimeWithAggregatesFilter<"Visita"> | Date | string
    fecha_actualizar?: DateTimeWithAggregatesFilter<"Visita"> | Date | string
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id_usuario?: UuidFilter<"Usuario"> | string
    username?: StringFilter<"Usuario"> | string
    nombres?: StringNullableFilter<"Usuario"> | string | null
    apellidos?: StringNullableFilter<"Usuario"> | string | null
    email?: StringNullableFilter<"Usuario"> | string | null
    sede?: StringNullableFilter<"Usuario"> | string | null
    password_hash?: StringFilter<"Usuario"> | string
    rol?: StringFilter<"Usuario"> | string
    estado?: StringFilter<"Usuario"> | string
    id_asesor?: IntNullableFilter<"Usuario"> | number | null
    fecha_creacion?: DateTimeFilter<"Usuario"> | Date | string
    mfa_habilitado?: BoolFilter<"Usuario"> | boolean
    mfa_requerido?: BoolFilter<"Usuario"> | boolean
    mfa_exento?: BoolFilter<"Usuario"> | boolean
    mfa_secreto?: StringNullableFilter<"Usuario"> | string | null
    mfa_ultimo_uso?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    token_version?: IntFilter<"Usuario"> | number
    intentos_fallidos?: IntFilter<"Usuario"> | number
    bloqueado_hasta?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    ultimo_acceso?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    password_cambio?: DateTimeFilter<"Usuario"> | Date | string
    asesor?: XOR<AsesorNullableScalarRelationFilter, AsesorWhereInput> | null
  }

  export type UsuarioOrderByWithRelationInput = {
    id_usuario?: SortOrder
    username?: SortOrder
    nombres?: SortOrderInput | SortOrder
    apellidos?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    sede?: SortOrderInput | SortOrder
    password_hash?: SortOrder
    rol?: SortOrder
    estado?: SortOrder
    id_asesor?: SortOrderInput | SortOrder
    fecha_creacion?: SortOrder
    mfa_habilitado?: SortOrder
    mfa_requerido?: SortOrder
    mfa_exento?: SortOrder
    mfa_secreto?: SortOrderInput | SortOrder
    mfa_ultimo_uso?: SortOrderInput | SortOrder
    token_version?: SortOrder
    intentos_fallidos?: SortOrder
    bloqueado_hasta?: SortOrderInput | SortOrder
    ultimo_acceso?: SortOrderInput | SortOrder
    password_cambio?: SortOrder
    asesor?: AsesorOrderByWithRelationInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: string
    username?: string
    id_asesor?: number
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nombres?: StringNullableFilter<"Usuario"> | string | null
    apellidos?: StringNullableFilter<"Usuario"> | string | null
    email?: StringNullableFilter<"Usuario"> | string | null
    sede?: StringNullableFilter<"Usuario"> | string | null
    password_hash?: StringFilter<"Usuario"> | string
    rol?: StringFilter<"Usuario"> | string
    estado?: StringFilter<"Usuario"> | string
    fecha_creacion?: DateTimeFilter<"Usuario"> | Date | string
    mfa_habilitado?: BoolFilter<"Usuario"> | boolean
    mfa_requerido?: BoolFilter<"Usuario"> | boolean
    mfa_exento?: BoolFilter<"Usuario"> | boolean
    mfa_secreto?: StringNullableFilter<"Usuario"> | string | null
    mfa_ultimo_uso?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    token_version?: IntFilter<"Usuario"> | number
    intentos_fallidos?: IntFilter<"Usuario"> | number
    bloqueado_hasta?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    ultimo_acceso?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    password_cambio?: DateTimeFilter<"Usuario"> | Date | string
    asesor?: XOR<AsesorNullableScalarRelationFilter, AsesorWhereInput> | null
  }, "id_usuario" | "username" | "id_asesor">

  export type UsuarioOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    username?: SortOrder
    nombres?: SortOrderInput | SortOrder
    apellidos?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    sede?: SortOrderInput | SortOrder
    password_hash?: SortOrder
    rol?: SortOrder
    estado?: SortOrder
    id_asesor?: SortOrderInput | SortOrder
    fecha_creacion?: SortOrder
    mfa_habilitado?: SortOrder
    mfa_requerido?: SortOrder
    mfa_exento?: SortOrder
    mfa_secreto?: SortOrderInput | SortOrder
    mfa_ultimo_uso?: SortOrderInput | SortOrder
    token_version?: SortOrder
    intentos_fallidos?: SortOrder
    bloqueado_hasta?: SortOrderInput | SortOrder
    ultimo_acceso?: SortOrderInput | SortOrder
    password_cambio?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id_usuario?: UuidWithAggregatesFilter<"Usuario"> | string
    username?: StringWithAggregatesFilter<"Usuario"> | string
    nombres?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    apellidos?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    email?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    sede?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    password_hash?: StringWithAggregatesFilter<"Usuario"> | string
    rol?: StringWithAggregatesFilter<"Usuario"> | string
    estado?: StringWithAggregatesFilter<"Usuario"> | string
    id_asesor?: IntNullableWithAggregatesFilter<"Usuario"> | number | null
    fecha_creacion?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    mfa_habilitado?: BoolWithAggregatesFilter<"Usuario"> | boolean
    mfa_requerido?: BoolWithAggregatesFilter<"Usuario"> | boolean
    mfa_exento?: BoolWithAggregatesFilter<"Usuario"> | boolean
    mfa_secreto?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    mfa_ultimo_uso?: DateTimeNullableWithAggregatesFilter<"Usuario"> | Date | string | null
    token_version?: IntWithAggregatesFilter<"Usuario"> | number
    intentos_fallidos?: IntWithAggregatesFilter<"Usuario"> | number
    bloqueado_hasta?: DateTimeNullableWithAggregatesFilter<"Usuario"> | Date | string | null
    ultimo_acceso?: DateTimeNullableWithAggregatesFilter<"Usuario"> | Date | string | null
    password_cambio?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type AuditoriaSeguridadWhereInput = {
    AND?: AuditoriaSeguridadWhereInput | AuditoriaSeguridadWhereInput[]
    OR?: AuditoriaSeguridadWhereInput[]
    NOT?: AuditoriaSeguridadWhereInput | AuditoriaSeguridadWhereInput[]
    id_auditoria?: UuidFilter<"AuditoriaSeguridad"> | string
    fecha?: DateTimeFilter<"AuditoriaSeguridad"> | Date | string
    request_id?: StringNullableFilter<"AuditoriaSeguridad"> | string | null
    actor_id?: UuidNullableFilter<"AuditoriaSeguridad"> | string | null
    actor?: StringNullableFilter<"AuditoriaSeguridad"> | string | null
    rol?: StringNullableFilter<"AuditoriaSeguridad"> | string | null
    metodo?: StringFilter<"AuditoriaSeguridad"> | string
    ruta?: StringFilter<"AuditoriaSeguridad"> | string
    estado_http?: IntFilter<"AuditoriaSeguridad"> | number
    ip_address?: StringNullableFilter<"AuditoriaSeguridad"> | string | null
    ip_hash?: StringNullableFilter<"AuditoriaSeguridad"> | string | null
    user_agent?: StringNullableFilter<"AuditoriaSeguridad"> | string | null
  }

  export type AuditoriaSeguridadOrderByWithRelationInput = {
    id_auditoria?: SortOrder
    fecha?: SortOrder
    request_id?: SortOrderInput | SortOrder
    actor_id?: SortOrderInput | SortOrder
    actor?: SortOrderInput | SortOrder
    rol?: SortOrderInput | SortOrder
    metodo?: SortOrder
    ruta?: SortOrder
    estado_http?: SortOrder
    ip_address?: SortOrderInput | SortOrder
    ip_hash?: SortOrderInput | SortOrder
    user_agent?: SortOrderInput | SortOrder
  }

  export type AuditoriaSeguridadWhereUniqueInput = Prisma.AtLeast<{
    id_auditoria?: string
    AND?: AuditoriaSeguridadWhereInput | AuditoriaSeguridadWhereInput[]
    OR?: AuditoriaSeguridadWhereInput[]
    NOT?: AuditoriaSeguridadWhereInput | AuditoriaSeguridadWhereInput[]
    fecha?: DateTimeFilter<"AuditoriaSeguridad"> | Date | string
    request_id?: StringNullableFilter<"AuditoriaSeguridad"> | string | null
    actor_id?: UuidNullableFilter<"AuditoriaSeguridad"> | string | null
    actor?: StringNullableFilter<"AuditoriaSeguridad"> | string | null
    rol?: StringNullableFilter<"AuditoriaSeguridad"> | string | null
    metodo?: StringFilter<"AuditoriaSeguridad"> | string
    ruta?: StringFilter<"AuditoriaSeguridad"> | string
    estado_http?: IntFilter<"AuditoriaSeguridad"> | number
    ip_address?: StringNullableFilter<"AuditoriaSeguridad"> | string | null
    ip_hash?: StringNullableFilter<"AuditoriaSeguridad"> | string | null
    user_agent?: StringNullableFilter<"AuditoriaSeguridad"> | string | null
  }, "id_auditoria">

  export type AuditoriaSeguridadOrderByWithAggregationInput = {
    id_auditoria?: SortOrder
    fecha?: SortOrder
    request_id?: SortOrderInput | SortOrder
    actor_id?: SortOrderInput | SortOrder
    actor?: SortOrderInput | SortOrder
    rol?: SortOrderInput | SortOrder
    metodo?: SortOrder
    ruta?: SortOrder
    estado_http?: SortOrder
    ip_address?: SortOrderInput | SortOrder
    ip_hash?: SortOrderInput | SortOrder
    user_agent?: SortOrderInput | SortOrder
    _count?: AuditoriaSeguridadCountOrderByAggregateInput
    _avg?: AuditoriaSeguridadAvgOrderByAggregateInput
    _max?: AuditoriaSeguridadMaxOrderByAggregateInput
    _min?: AuditoriaSeguridadMinOrderByAggregateInput
    _sum?: AuditoriaSeguridadSumOrderByAggregateInput
  }

  export type AuditoriaSeguridadScalarWhereWithAggregatesInput = {
    AND?: AuditoriaSeguridadScalarWhereWithAggregatesInput | AuditoriaSeguridadScalarWhereWithAggregatesInput[]
    OR?: AuditoriaSeguridadScalarWhereWithAggregatesInput[]
    NOT?: AuditoriaSeguridadScalarWhereWithAggregatesInput | AuditoriaSeguridadScalarWhereWithAggregatesInput[]
    id_auditoria?: UuidWithAggregatesFilter<"AuditoriaSeguridad"> | string
    fecha?: DateTimeWithAggregatesFilter<"AuditoriaSeguridad"> | Date | string
    request_id?: StringNullableWithAggregatesFilter<"AuditoriaSeguridad"> | string | null
    actor_id?: UuidNullableWithAggregatesFilter<"AuditoriaSeguridad"> | string | null
    actor?: StringNullableWithAggregatesFilter<"AuditoriaSeguridad"> | string | null
    rol?: StringNullableWithAggregatesFilter<"AuditoriaSeguridad"> | string | null
    metodo?: StringWithAggregatesFilter<"AuditoriaSeguridad"> | string
    ruta?: StringWithAggregatesFilter<"AuditoriaSeguridad"> | string
    estado_http?: IntWithAggregatesFilter<"AuditoriaSeguridad"> | number
    ip_address?: StringNullableWithAggregatesFilter<"AuditoriaSeguridad"> | string | null
    ip_hash?: StringNullableWithAggregatesFilter<"AuditoriaSeguridad"> | string | null
    user_agent?: StringNullableWithAggregatesFilter<"AuditoriaSeguridad"> | string | null
  }

  export type ImportacionMasivaWhereInput = {
    AND?: ImportacionMasivaWhereInput | ImportacionMasivaWhereInput[]
    OR?: ImportacionMasivaWhereInput[]
    NOT?: ImportacionMasivaWhereInput | ImportacionMasivaWhereInput[]
    id_importacion?: UuidFilter<"ImportacionMasiva"> | string
    tipo?: StringFilter<"ImportacionMasiva"> | string
    estado?: StringFilter<"ImportacionMasiva"> | string
    archivo?: StringFilter<"ImportacionMasiva"> | string
    ruta_temporal?: StringFilter<"ImportacionMasiva"> | string
    actor_id?: UuidNullableFilter<"ImportacionMasiva"> | string | null
    total_filas?: IntFilter<"ImportacionMasiva"> | number
    procesadas?: IntFilter<"ImportacionMasiva"> | number
    insertadas?: IntFilter<"ImportacionMasiva"> | number
    actualizadas?: IntFilter<"ImportacionMasiva"> | number
    omitidas?: IntFilter<"ImportacionMasiva"> | number
    errores?: IntFilter<"ImportacionMasiva"> | number
    detalle_error?: JsonNullableFilter<"ImportacionMasiva">
    fecha_creacion?: DateTimeFilter<"ImportacionMasiva"> | Date | string
    fecha_inicio?: DateTimeNullableFilter<"ImportacionMasiva"> | Date | string | null
    fecha_fin?: DateTimeNullableFilter<"ImportacionMasiva"> | Date | string | null
  }

  export type ImportacionMasivaOrderByWithRelationInput = {
    id_importacion?: SortOrder
    tipo?: SortOrder
    estado?: SortOrder
    archivo?: SortOrder
    ruta_temporal?: SortOrder
    actor_id?: SortOrderInput | SortOrder
    total_filas?: SortOrder
    procesadas?: SortOrder
    insertadas?: SortOrder
    actualizadas?: SortOrder
    omitidas?: SortOrder
    errores?: SortOrder
    detalle_error?: SortOrderInput | SortOrder
    fecha_creacion?: SortOrder
    fecha_inicio?: SortOrderInput | SortOrder
    fecha_fin?: SortOrderInput | SortOrder
  }

  export type ImportacionMasivaWhereUniqueInput = Prisma.AtLeast<{
    id_importacion?: string
    AND?: ImportacionMasivaWhereInput | ImportacionMasivaWhereInput[]
    OR?: ImportacionMasivaWhereInput[]
    NOT?: ImportacionMasivaWhereInput | ImportacionMasivaWhereInput[]
    tipo?: StringFilter<"ImportacionMasiva"> | string
    estado?: StringFilter<"ImportacionMasiva"> | string
    archivo?: StringFilter<"ImportacionMasiva"> | string
    ruta_temporal?: StringFilter<"ImportacionMasiva"> | string
    actor_id?: UuidNullableFilter<"ImportacionMasiva"> | string | null
    total_filas?: IntFilter<"ImportacionMasiva"> | number
    procesadas?: IntFilter<"ImportacionMasiva"> | number
    insertadas?: IntFilter<"ImportacionMasiva"> | number
    actualizadas?: IntFilter<"ImportacionMasiva"> | number
    omitidas?: IntFilter<"ImportacionMasiva"> | number
    errores?: IntFilter<"ImportacionMasiva"> | number
    detalle_error?: JsonNullableFilter<"ImportacionMasiva">
    fecha_creacion?: DateTimeFilter<"ImportacionMasiva"> | Date | string
    fecha_inicio?: DateTimeNullableFilter<"ImportacionMasiva"> | Date | string | null
    fecha_fin?: DateTimeNullableFilter<"ImportacionMasiva"> | Date | string | null
  }, "id_importacion">

  export type ImportacionMasivaOrderByWithAggregationInput = {
    id_importacion?: SortOrder
    tipo?: SortOrder
    estado?: SortOrder
    archivo?: SortOrder
    ruta_temporal?: SortOrder
    actor_id?: SortOrderInput | SortOrder
    total_filas?: SortOrder
    procesadas?: SortOrder
    insertadas?: SortOrder
    actualizadas?: SortOrder
    omitidas?: SortOrder
    errores?: SortOrder
    detalle_error?: SortOrderInput | SortOrder
    fecha_creacion?: SortOrder
    fecha_inicio?: SortOrderInput | SortOrder
    fecha_fin?: SortOrderInput | SortOrder
    _count?: ImportacionMasivaCountOrderByAggregateInput
    _avg?: ImportacionMasivaAvgOrderByAggregateInput
    _max?: ImportacionMasivaMaxOrderByAggregateInput
    _min?: ImportacionMasivaMinOrderByAggregateInput
    _sum?: ImportacionMasivaSumOrderByAggregateInput
  }

  export type ImportacionMasivaScalarWhereWithAggregatesInput = {
    AND?: ImportacionMasivaScalarWhereWithAggregatesInput | ImportacionMasivaScalarWhereWithAggregatesInput[]
    OR?: ImportacionMasivaScalarWhereWithAggregatesInput[]
    NOT?: ImportacionMasivaScalarWhereWithAggregatesInput | ImportacionMasivaScalarWhereWithAggregatesInput[]
    id_importacion?: UuidWithAggregatesFilter<"ImportacionMasiva"> | string
    tipo?: StringWithAggregatesFilter<"ImportacionMasiva"> | string
    estado?: StringWithAggregatesFilter<"ImportacionMasiva"> | string
    archivo?: StringWithAggregatesFilter<"ImportacionMasiva"> | string
    ruta_temporal?: StringWithAggregatesFilter<"ImportacionMasiva"> | string
    actor_id?: UuidNullableWithAggregatesFilter<"ImportacionMasiva"> | string | null
    total_filas?: IntWithAggregatesFilter<"ImportacionMasiva"> | number
    procesadas?: IntWithAggregatesFilter<"ImportacionMasiva"> | number
    insertadas?: IntWithAggregatesFilter<"ImportacionMasiva"> | number
    actualizadas?: IntWithAggregatesFilter<"ImportacionMasiva"> | number
    omitidas?: IntWithAggregatesFilter<"ImportacionMasiva"> | number
    errores?: IntWithAggregatesFilter<"ImportacionMasiva"> | number
    detalle_error?: JsonNullableWithAggregatesFilter<"ImportacionMasiva">
    fecha_creacion?: DateTimeWithAggregatesFilter<"ImportacionMasiva"> | Date | string
    fecha_inicio?: DateTimeNullableWithAggregatesFilter<"ImportacionMasiva"> | Date | string | null
    fecha_fin?: DateTimeNullableWithAggregatesFilter<"ImportacionMasiva"> | Date | string | null
  }

  export type RegistroCalidadWhereInput = {
    AND?: RegistroCalidadWhereInput | RegistroCalidadWhereInput[]
    OR?: RegistroCalidadWhereInput[]
    NOT?: RegistroCalidadWhereInput | RegistroCalidadWhereInput[]
    id_registro?: UuidFilter<"RegistroCalidad"> | string
    tipo?: StringFilter<"RegistroCalidad"> | string
    codigo?: StringFilter<"RegistroCalidad"> | string
    titulo?: StringFilter<"RegistroCalidad"> | string
    descripcion?: StringNullableFilter<"RegistroCalidad"> | string | null
    estado?: StringFilter<"RegistroCalidad"> | string
    responsable_id?: UuidNullableFilter<"RegistroCalidad"> | string | null
    responsable?: StringNullableFilter<"RegistroCalidad"> | string | null
    fecha_objetivo?: DateTimeNullableFilter<"RegistroCalidad"> | Date | string | null
    fecha_cierre?: DateTimeNullableFilter<"RegistroCalidad"> | Date | string | null
    clausula_iso?: StringNullableFilter<"RegistroCalidad"> | string | null
    indicador?: StringNullableFilter<"RegistroCalidad"> | string | null
    meta?: DecimalNullableFilter<"RegistroCalidad"> | Decimal | DecimalJsLike | number | string | null
    valor_actual?: DecimalNullableFilter<"RegistroCalidad"> | Decimal | DecimalJsLike | number | string | null
    unidad?: StringNullableFilter<"RegistroCalidad"> | string | null
    datos?: JsonNullableFilter<"RegistroCalidad">
    evidencia?: JsonNullableFilter<"RegistroCalidad">
    version?: IntFilter<"RegistroCalidad"> | number
    creado_por?: UuidNullableFilter<"RegistroCalidad"> | string | null
    actualizado_por?: UuidNullableFilter<"RegistroCalidad"> | string | null
    fecha_creacion?: DateTimeFilter<"RegistroCalidad"> | Date | string
    fecha_actualizar?: DateTimeFilter<"RegistroCalidad"> | Date | string
    historial?: HistorialCalidadListRelationFilter
  }

  export type RegistroCalidadOrderByWithRelationInput = {
    id_registro?: SortOrder
    tipo?: SortOrder
    codigo?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    estado?: SortOrder
    responsable_id?: SortOrderInput | SortOrder
    responsable?: SortOrderInput | SortOrder
    fecha_objetivo?: SortOrderInput | SortOrder
    fecha_cierre?: SortOrderInput | SortOrder
    clausula_iso?: SortOrderInput | SortOrder
    indicador?: SortOrderInput | SortOrder
    meta?: SortOrderInput | SortOrder
    valor_actual?: SortOrderInput | SortOrder
    unidad?: SortOrderInput | SortOrder
    datos?: SortOrderInput | SortOrder
    evidencia?: SortOrderInput | SortOrder
    version?: SortOrder
    creado_por?: SortOrderInput | SortOrder
    actualizado_por?: SortOrderInput | SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizar?: SortOrder
    historial?: HistorialCalidadOrderByRelationAggregateInput
  }

  export type RegistroCalidadWhereUniqueInput = Prisma.AtLeast<{
    id_registro?: string
    codigo?: string
    AND?: RegistroCalidadWhereInput | RegistroCalidadWhereInput[]
    OR?: RegistroCalidadWhereInput[]
    NOT?: RegistroCalidadWhereInput | RegistroCalidadWhereInput[]
    tipo?: StringFilter<"RegistroCalidad"> | string
    titulo?: StringFilter<"RegistroCalidad"> | string
    descripcion?: StringNullableFilter<"RegistroCalidad"> | string | null
    estado?: StringFilter<"RegistroCalidad"> | string
    responsable_id?: UuidNullableFilter<"RegistroCalidad"> | string | null
    responsable?: StringNullableFilter<"RegistroCalidad"> | string | null
    fecha_objetivo?: DateTimeNullableFilter<"RegistroCalidad"> | Date | string | null
    fecha_cierre?: DateTimeNullableFilter<"RegistroCalidad"> | Date | string | null
    clausula_iso?: StringNullableFilter<"RegistroCalidad"> | string | null
    indicador?: StringNullableFilter<"RegistroCalidad"> | string | null
    meta?: DecimalNullableFilter<"RegistroCalidad"> | Decimal | DecimalJsLike | number | string | null
    valor_actual?: DecimalNullableFilter<"RegistroCalidad"> | Decimal | DecimalJsLike | number | string | null
    unidad?: StringNullableFilter<"RegistroCalidad"> | string | null
    datos?: JsonNullableFilter<"RegistroCalidad">
    evidencia?: JsonNullableFilter<"RegistroCalidad">
    version?: IntFilter<"RegistroCalidad"> | number
    creado_por?: UuidNullableFilter<"RegistroCalidad"> | string | null
    actualizado_por?: UuidNullableFilter<"RegistroCalidad"> | string | null
    fecha_creacion?: DateTimeFilter<"RegistroCalidad"> | Date | string
    fecha_actualizar?: DateTimeFilter<"RegistroCalidad"> | Date | string
    historial?: HistorialCalidadListRelationFilter
  }, "id_registro" | "codigo">

  export type RegistroCalidadOrderByWithAggregationInput = {
    id_registro?: SortOrder
    tipo?: SortOrder
    codigo?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    estado?: SortOrder
    responsable_id?: SortOrderInput | SortOrder
    responsable?: SortOrderInput | SortOrder
    fecha_objetivo?: SortOrderInput | SortOrder
    fecha_cierre?: SortOrderInput | SortOrder
    clausula_iso?: SortOrderInput | SortOrder
    indicador?: SortOrderInput | SortOrder
    meta?: SortOrderInput | SortOrder
    valor_actual?: SortOrderInput | SortOrder
    unidad?: SortOrderInput | SortOrder
    datos?: SortOrderInput | SortOrder
    evidencia?: SortOrderInput | SortOrder
    version?: SortOrder
    creado_por?: SortOrderInput | SortOrder
    actualizado_por?: SortOrderInput | SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizar?: SortOrder
    _count?: RegistroCalidadCountOrderByAggregateInput
    _avg?: RegistroCalidadAvgOrderByAggregateInput
    _max?: RegistroCalidadMaxOrderByAggregateInput
    _min?: RegistroCalidadMinOrderByAggregateInput
    _sum?: RegistroCalidadSumOrderByAggregateInput
  }

  export type RegistroCalidadScalarWhereWithAggregatesInput = {
    AND?: RegistroCalidadScalarWhereWithAggregatesInput | RegistroCalidadScalarWhereWithAggregatesInput[]
    OR?: RegistroCalidadScalarWhereWithAggregatesInput[]
    NOT?: RegistroCalidadScalarWhereWithAggregatesInput | RegistroCalidadScalarWhereWithAggregatesInput[]
    id_registro?: UuidWithAggregatesFilter<"RegistroCalidad"> | string
    tipo?: StringWithAggregatesFilter<"RegistroCalidad"> | string
    codigo?: StringWithAggregatesFilter<"RegistroCalidad"> | string
    titulo?: StringWithAggregatesFilter<"RegistroCalidad"> | string
    descripcion?: StringNullableWithAggregatesFilter<"RegistroCalidad"> | string | null
    estado?: StringWithAggregatesFilter<"RegistroCalidad"> | string
    responsable_id?: UuidNullableWithAggregatesFilter<"RegistroCalidad"> | string | null
    responsable?: StringNullableWithAggregatesFilter<"RegistroCalidad"> | string | null
    fecha_objetivo?: DateTimeNullableWithAggregatesFilter<"RegistroCalidad"> | Date | string | null
    fecha_cierre?: DateTimeNullableWithAggregatesFilter<"RegistroCalidad"> | Date | string | null
    clausula_iso?: StringNullableWithAggregatesFilter<"RegistroCalidad"> | string | null
    indicador?: StringNullableWithAggregatesFilter<"RegistroCalidad"> | string | null
    meta?: DecimalNullableWithAggregatesFilter<"RegistroCalidad"> | Decimal | DecimalJsLike | number | string | null
    valor_actual?: DecimalNullableWithAggregatesFilter<"RegistroCalidad"> | Decimal | DecimalJsLike | number | string | null
    unidad?: StringNullableWithAggregatesFilter<"RegistroCalidad"> | string | null
    datos?: JsonNullableWithAggregatesFilter<"RegistroCalidad">
    evidencia?: JsonNullableWithAggregatesFilter<"RegistroCalidad">
    version?: IntWithAggregatesFilter<"RegistroCalidad"> | number
    creado_por?: UuidNullableWithAggregatesFilter<"RegistroCalidad"> | string | null
    actualizado_por?: UuidNullableWithAggregatesFilter<"RegistroCalidad"> | string | null
    fecha_creacion?: DateTimeWithAggregatesFilter<"RegistroCalidad"> | Date | string
    fecha_actualizar?: DateTimeWithAggregatesFilter<"RegistroCalidad"> | Date | string
  }

  export type HistorialCalidadWhereInput = {
    AND?: HistorialCalidadWhereInput | HistorialCalidadWhereInput[]
    OR?: HistorialCalidadWhereInput[]
    NOT?: HistorialCalidadWhereInput | HistorialCalidadWhereInput[]
    id_historial?: UuidFilter<"HistorialCalidad"> | string
    id_registro?: UuidFilter<"HistorialCalidad"> | string
    accion?: StringFilter<"HistorialCalidad"> | string
    version?: IntFilter<"HistorialCalidad"> | number
    actor_id?: UuidNullableFilter<"HistorialCalidad"> | string | null
    actor?: StringNullableFilter<"HistorialCalidad"> | string | null
    detalle?: JsonNullableFilter<"HistorialCalidad">
    fecha?: DateTimeFilter<"HistorialCalidad"> | Date | string
    registro?: XOR<RegistroCalidadScalarRelationFilter, RegistroCalidadWhereInput>
  }

  export type HistorialCalidadOrderByWithRelationInput = {
    id_historial?: SortOrder
    id_registro?: SortOrder
    accion?: SortOrder
    version?: SortOrder
    actor_id?: SortOrderInput | SortOrder
    actor?: SortOrderInput | SortOrder
    detalle?: SortOrderInput | SortOrder
    fecha?: SortOrder
    registro?: RegistroCalidadOrderByWithRelationInput
  }

  export type HistorialCalidadWhereUniqueInput = Prisma.AtLeast<{
    id_historial?: string
    AND?: HistorialCalidadWhereInput | HistorialCalidadWhereInput[]
    OR?: HistorialCalidadWhereInput[]
    NOT?: HistorialCalidadWhereInput | HistorialCalidadWhereInput[]
    id_registro?: UuidFilter<"HistorialCalidad"> | string
    accion?: StringFilter<"HistorialCalidad"> | string
    version?: IntFilter<"HistorialCalidad"> | number
    actor_id?: UuidNullableFilter<"HistorialCalidad"> | string | null
    actor?: StringNullableFilter<"HistorialCalidad"> | string | null
    detalle?: JsonNullableFilter<"HistorialCalidad">
    fecha?: DateTimeFilter<"HistorialCalidad"> | Date | string
    registro?: XOR<RegistroCalidadScalarRelationFilter, RegistroCalidadWhereInput>
  }, "id_historial">

  export type HistorialCalidadOrderByWithAggregationInput = {
    id_historial?: SortOrder
    id_registro?: SortOrder
    accion?: SortOrder
    version?: SortOrder
    actor_id?: SortOrderInput | SortOrder
    actor?: SortOrderInput | SortOrder
    detalle?: SortOrderInput | SortOrder
    fecha?: SortOrder
    _count?: HistorialCalidadCountOrderByAggregateInput
    _avg?: HistorialCalidadAvgOrderByAggregateInput
    _max?: HistorialCalidadMaxOrderByAggregateInput
    _min?: HistorialCalidadMinOrderByAggregateInput
    _sum?: HistorialCalidadSumOrderByAggregateInput
  }

  export type HistorialCalidadScalarWhereWithAggregatesInput = {
    AND?: HistorialCalidadScalarWhereWithAggregatesInput | HistorialCalidadScalarWhereWithAggregatesInput[]
    OR?: HistorialCalidadScalarWhereWithAggregatesInput[]
    NOT?: HistorialCalidadScalarWhereWithAggregatesInput | HistorialCalidadScalarWhereWithAggregatesInput[]
    id_historial?: UuidWithAggregatesFilter<"HistorialCalidad"> | string
    id_registro?: UuidWithAggregatesFilter<"HistorialCalidad"> | string
    accion?: StringWithAggregatesFilter<"HistorialCalidad"> | string
    version?: IntWithAggregatesFilter<"HistorialCalidad"> | number
    actor_id?: UuidNullableWithAggregatesFilter<"HistorialCalidad"> | string | null
    actor?: StringNullableWithAggregatesFilter<"HistorialCalidad"> | string | null
    detalle?: JsonNullableWithAggregatesFilter<"HistorialCalidad">
    fecha?: DateTimeWithAggregatesFilter<"HistorialCalidad"> | Date | string
  }

  export type ClienteCreateInput = {
    tipo_documento?: $Enums.TipoDocumento
    numero_documento: string
    telefono?: string | null
    nombres: string
    apellido_paterno: string
    apellido_materno: string
    direccion?: string | null
    distrito?: string | null
    deuda_castigada?: Decimal | DecimalJsLike | number | string
    deuda_vigente?: Decimal | DecimalJsLike | number | string
    otras_deudas?: Decimal | DecimalJsLike | number | string
    estado?: string
    ultima_gestion?: Date | string | null
    latitud?: Decimal | DecimalJsLike | number | string | null
    longitud?: Decimal | DecimalJsLike | number | string | null
    admisiones?: AdmisionCreateNestedManyWithoutClienteInput
    asignaciones?: AsignacionClienteCreateNestedManyWithoutClienteInput
    rutas_clientes?: RutaClienteCreateNestedManyWithoutClienteInput
    visitas?: VisitaCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    id_cliente?: number
    tipo_documento?: $Enums.TipoDocumento
    numero_documento: string
    telefono?: string | null
    nombres: string
    apellido_paterno: string
    apellido_materno: string
    direccion?: string | null
    distrito?: string | null
    deuda_castigada?: Decimal | DecimalJsLike | number | string
    deuda_vigente?: Decimal | DecimalJsLike | number | string
    otras_deudas?: Decimal | DecimalJsLike | number | string
    estado?: string
    ultima_gestion?: Date | string | null
    latitud?: Decimal | DecimalJsLike | number | string | null
    longitud?: Decimal | DecimalJsLike | number | string | null
    admisiones?: AdmisionUncheckedCreateNestedManyWithoutClienteInput
    asignaciones?: AsignacionClienteUncheckedCreateNestedManyWithoutClienteInput
    rutas_clientes?: RutaClienteUncheckedCreateNestedManyWithoutClienteInput
    visitas?: VisitaUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    tipo_documento?: EnumTipoDocumentoFieldUpdateOperationsInput | $Enums.TipoDocumento
    numero_documento?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    nombres?: StringFieldUpdateOperationsInput | string
    apellido_paterno?: StringFieldUpdateOperationsInput | string
    apellido_materno?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    distrito?: NullableStringFieldUpdateOperationsInput | string | null
    deuda_castigada?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deuda_vigente?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    otras_deudas?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: StringFieldUpdateOperationsInput | string
    ultima_gestion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    admisiones?: AdmisionUpdateManyWithoutClienteNestedInput
    asignaciones?: AsignacionClienteUpdateManyWithoutClienteNestedInput
    rutas_clientes?: RutaClienteUpdateManyWithoutClienteNestedInput
    visitas?: VisitaUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    id_cliente?: IntFieldUpdateOperationsInput | number
    tipo_documento?: EnumTipoDocumentoFieldUpdateOperationsInput | $Enums.TipoDocumento
    numero_documento?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    nombres?: StringFieldUpdateOperationsInput | string
    apellido_paterno?: StringFieldUpdateOperationsInput | string
    apellido_materno?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    distrito?: NullableStringFieldUpdateOperationsInput | string | null
    deuda_castigada?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deuda_vigente?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    otras_deudas?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: StringFieldUpdateOperationsInput | string
    ultima_gestion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    admisiones?: AdmisionUncheckedUpdateManyWithoutClienteNestedInput
    asignaciones?: AsignacionClienteUncheckedUpdateManyWithoutClienteNestedInput
    rutas_clientes?: RutaClienteUncheckedUpdateManyWithoutClienteNestedInput
    visitas?: VisitaUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    id_cliente?: number
    tipo_documento?: $Enums.TipoDocumento
    numero_documento: string
    telefono?: string | null
    nombres: string
    apellido_paterno: string
    apellido_materno: string
    direccion?: string | null
    distrito?: string | null
    deuda_castigada?: Decimal | DecimalJsLike | number | string
    deuda_vigente?: Decimal | DecimalJsLike | number | string
    otras_deudas?: Decimal | DecimalJsLike | number | string
    estado?: string
    ultima_gestion?: Date | string | null
    latitud?: Decimal | DecimalJsLike | number | string | null
    longitud?: Decimal | DecimalJsLike | number | string | null
  }

  export type ClienteUpdateManyMutationInput = {
    tipo_documento?: EnumTipoDocumentoFieldUpdateOperationsInput | $Enums.TipoDocumento
    numero_documento?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    nombres?: StringFieldUpdateOperationsInput | string
    apellido_paterno?: StringFieldUpdateOperationsInput | string
    apellido_materno?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    distrito?: NullableStringFieldUpdateOperationsInput | string | null
    deuda_castigada?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deuda_vigente?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    otras_deudas?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: StringFieldUpdateOperationsInput | string
    ultima_gestion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type ClienteUncheckedUpdateManyInput = {
    id_cliente?: IntFieldUpdateOperationsInput | number
    tipo_documento?: EnumTipoDocumentoFieldUpdateOperationsInput | $Enums.TipoDocumento
    numero_documento?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    nombres?: StringFieldUpdateOperationsInput | string
    apellido_paterno?: StringFieldUpdateOperationsInput | string
    apellido_materno?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    distrito?: NullableStringFieldUpdateOperationsInput | string | null
    deuda_castigada?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deuda_vigente?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    otras_deudas?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: StringFieldUpdateOperationsInput | string
    ultima_gestion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type AdmisionCreateInput = {
    producto?: string | null
    linea_credito?: Decimal | DecimalJsLike | number | string | null
    estado?: string
    fecha?: Date | string | null
    cliente: ClienteCreateNestedOneWithoutAdmisionesInput
  }

  export type AdmisionUncheckedCreateInput = {
    id_admision?: number
    id_cliente: number
    producto?: string | null
    linea_credito?: Decimal | DecimalJsLike | number | string | null
    estado?: string
    fecha?: Date | string | null
  }

  export type AdmisionUpdateInput = {
    producto?: NullableStringFieldUpdateOperationsInput | string | null
    linea_credito?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estado?: StringFieldUpdateOperationsInput | string
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cliente?: ClienteUpdateOneRequiredWithoutAdmisionesNestedInput
  }

  export type AdmisionUncheckedUpdateInput = {
    id_admision?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    producto?: NullableStringFieldUpdateOperationsInput | string | null
    linea_credito?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estado?: StringFieldUpdateOperationsInput | string
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AdmisionCreateManyInput = {
    id_admision?: number
    id_cliente: number
    producto?: string | null
    linea_credito?: Decimal | DecimalJsLike | number | string | null
    estado?: string
    fecha?: Date | string | null
  }

  export type AdmisionUpdateManyMutationInput = {
    producto?: NullableStringFieldUpdateOperationsInput | string | null
    linea_credito?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estado?: StringFieldUpdateOperationsInput | string
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AdmisionUncheckedUpdateManyInput = {
    id_admision?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    producto?: NullableStringFieldUpdateOperationsInput | string | null
    linea_credito?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estado?: StringFieldUpdateOperationsInput | string
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AsesorCreateInput = {
    dni: string
    nombres: string
    apellido_paterno: string
    apellido_materno: string
    telefono?: string | null
    correo?: string | null
    distrito?: string | null
    estado?: string
    latitud?: Decimal | DecimalJsLike | number | string | null
    longitud?: Decimal | DecimalJsLike | number | string | null
    fecha_creacion?: Date | string
    fecha_actualizar?: Date | string
    asignaciones?: AsignacionClienteCreateNestedManyWithoutAsesorInput
    rutas?: RutaCreateNestedManyWithoutAsesorInput
    visitas?: VisitaCreateNestedManyWithoutAsesorInput
    usuario?: UsuarioCreateNestedOneWithoutAsesorInput
  }

  export type AsesorUncheckedCreateInput = {
    id_asesor?: number
    dni: string
    nombres: string
    apellido_paterno: string
    apellido_materno: string
    telefono?: string | null
    correo?: string | null
    distrito?: string | null
    estado?: string
    latitud?: Decimal | DecimalJsLike | number | string | null
    longitud?: Decimal | DecimalJsLike | number | string | null
    fecha_creacion?: Date | string
    fecha_actualizar?: Date | string
    asignaciones?: AsignacionClienteUncheckedCreateNestedManyWithoutAsesorInput
    rutas?: RutaUncheckedCreateNestedManyWithoutAsesorInput
    visitas?: VisitaUncheckedCreateNestedManyWithoutAsesorInput
    usuario?: UsuarioUncheckedCreateNestedOneWithoutAsesorInput
  }

  export type AsesorUpdateInput = {
    dni?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellido_paterno?: StringFieldUpdateOperationsInput | string
    apellido_materno?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    distrito?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    latitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizar?: DateTimeFieldUpdateOperationsInput | Date | string
    asignaciones?: AsignacionClienteUpdateManyWithoutAsesorNestedInput
    rutas?: RutaUpdateManyWithoutAsesorNestedInput
    visitas?: VisitaUpdateManyWithoutAsesorNestedInput
    usuario?: UsuarioUpdateOneWithoutAsesorNestedInput
  }

  export type AsesorUncheckedUpdateInput = {
    id_asesor?: IntFieldUpdateOperationsInput | number
    dni?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellido_paterno?: StringFieldUpdateOperationsInput | string
    apellido_materno?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    distrito?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    latitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizar?: DateTimeFieldUpdateOperationsInput | Date | string
    asignaciones?: AsignacionClienteUncheckedUpdateManyWithoutAsesorNestedInput
    rutas?: RutaUncheckedUpdateManyWithoutAsesorNestedInput
    visitas?: VisitaUncheckedUpdateManyWithoutAsesorNestedInput
    usuario?: UsuarioUncheckedUpdateOneWithoutAsesorNestedInput
  }

  export type AsesorCreateManyInput = {
    id_asesor?: number
    dni: string
    nombres: string
    apellido_paterno: string
    apellido_materno: string
    telefono?: string | null
    correo?: string | null
    distrito?: string | null
    estado?: string
    latitud?: Decimal | DecimalJsLike | number | string | null
    longitud?: Decimal | DecimalJsLike | number | string | null
    fecha_creacion?: Date | string
    fecha_actualizar?: Date | string
  }

  export type AsesorUpdateManyMutationInput = {
    dni?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellido_paterno?: StringFieldUpdateOperationsInput | string
    apellido_materno?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    distrito?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    latitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizar?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsesorUncheckedUpdateManyInput = {
    id_asesor?: IntFieldUpdateOperationsInput | number
    dni?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellido_paterno?: StringFieldUpdateOperationsInput | string
    apellido_materno?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    distrito?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    latitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizar?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsignacionClienteCreateInput = {
    fecha_asignacion?: Date | string
    fecha_fin?: Date | string | null
    estado?: string
    cliente: ClienteCreateNestedOneWithoutAsignacionesInput
    asesor: AsesorCreateNestedOneWithoutAsignacionesInput
  }

  export type AsignacionClienteUncheckedCreateInput = {
    id_asignacion?: number
    id_cliente: number
    id_asesor: number
    fecha_asignacion?: Date | string
    fecha_fin?: Date | string | null
    estado?: string
  }

  export type AsignacionClienteUpdateInput = {
    fecha_asignacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
    cliente?: ClienteUpdateOneRequiredWithoutAsignacionesNestedInput
    asesor?: AsesorUpdateOneRequiredWithoutAsignacionesNestedInput
  }

  export type AsignacionClienteUncheckedUpdateInput = {
    id_asignacion?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_asesor?: IntFieldUpdateOperationsInput | number
    fecha_asignacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type AsignacionClienteCreateManyInput = {
    id_asignacion?: number
    id_cliente: number
    id_asesor: number
    fecha_asignacion?: Date | string
    fecha_fin?: Date | string | null
    estado?: string
  }

  export type AsignacionClienteUpdateManyMutationInput = {
    fecha_asignacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type AsignacionClienteUncheckedUpdateManyInput = {
    id_asignacion?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_asesor?: IntFieldUpdateOperationsInput | number
    fecha_asignacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type RutaCreateInput = {
    fecha_programada: Date | string
    fecha_inicio_real?: Date | string | null
    fecha_fin_real?: Date | string | null
    estado?: string
    fecha_creacion?: Date | string
    fecha_actualizar?: Date | string
    asesor: AsesorCreateNestedOneWithoutRutasInput
    rutas_clientes?: RutaClienteCreateNestedManyWithoutRutaInput
  }

  export type RutaUncheckedCreateInput = {
    id_ruta?: number
    id_asesor: number
    fecha_programada: Date | string
    fecha_inicio_real?: Date | string | null
    fecha_fin_real?: Date | string | null
    estado?: string
    fecha_creacion?: Date | string
    fecha_actualizar?: Date | string
    rutas_clientes?: RutaClienteUncheckedCreateNestedManyWithoutRutaInput
  }

  export type RutaUpdateInput = {
    fecha_programada?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_inicio_real?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_fin_real?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizar?: DateTimeFieldUpdateOperationsInput | Date | string
    asesor?: AsesorUpdateOneRequiredWithoutRutasNestedInput
    rutas_clientes?: RutaClienteUpdateManyWithoutRutaNestedInput
  }

  export type RutaUncheckedUpdateInput = {
    id_ruta?: IntFieldUpdateOperationsInput | number
    id_asesor?: IntFieldUpdateOperationsInput | number
    fecha_programada?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_inicio_real?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_fin_real?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizar?: DateTimeFieldUpdateOperationsInput | Date | string
    rutas_clientes?: RutaClienteUncheckedUpdateManyWithoutRutaNestedInput
  }

  export type RutaCreateManyInput = {
    id_ruta?: number
    id_asesor: number
    fecha_programada: Date | string
    fecha_inicio_real?: Date | string | null
    fecha_fin_real?: Date | string | null
    estado?: string
    fecha_creacion?: Date | string
    fecha_actualizar?: Date | string
  }

  export type RutaUpdateManyMutationInput = {
    fecha_programada?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_inicio_real?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_fin_real?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizar?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RutaUncheckedUpdateManyInput = {
    id_ruta?: IntFieldUpdateOperationsInput | number
    id_asesor?: IntFieldUpdateOperationsInput | number
    fecha_programada?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_inicio_real?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_fin_real?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizar?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RutaClienteCreateInput = {
    secuencia?: number
    estado_visita?: string
    prioridad?: string
    fecha_creacion?: Date | string
    fecha_actualizar?: Date | string
    ruta: RutaCreateNestedOneWithoutRutas_clientesInput
    cliente: ClienteCreateNestedOneWithoutRutas_clientesInput
    visitas?: VisitaCreateNestedManyWithoutRuta_clienteInput
  }

  export type RutaClienteUncheckedCreateInput = {
    id_ruta_cliente?: number
    id_ruta: number
    id_cliente: number
    secuencia?: number
    estado_visita?: string
    prioridad?: string
    fecha_creacion?: Date | string
    fecha_actualizar?: Date | string
    visitas?: VisitaUncheckedCreateNestedManyWithoutRuta_clienteInput
  }

  export type RutaClienteUpdateInput = {
    secuencia?: IntFieldUpdateOperationsInput | number
    estado_visita?: StringFieldUpdateOperationsInput | string
    prioridad?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizar?: DateTimeFieldUpdateOperationsInput | Date | string
    ruta?: RutaUpdateOneRequiredWithoutRutas_clientesNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutRutas_clientesNestedInput
    visitas?: VisitaUpdateManyWithoutRuta_clienteNestedInput
  }

  export type RutaClienteUncheckedUpdateInput = {
    id_ruta_cliente?: IntFieldUpdateOperationsInput | number
    id_ruta?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    secuencia?: IntFieldUpdateOperationsInput | number
    estado_visita?: StringFieldUpdateOperationsInput | string
    prioridad?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizar?: DateTimeFieldUpdateOperationsInput | Date | string
    visitas?: VisitaUncheckedUpdateManyWithoutRuta_clienteNestedInput
  }

  export type RutaClienteCreateManyInput = {
    id_ruta_cliente?: number
    id_ruta: number
    id_cliente: number
    secuencia?: number
    estado_visita?: string
    prioridad?: string
    fecha_creacion?: Date | string
    fecha_actualizar?: Date | string
  }

  export type RutaClienteUpdateManyMutationInput = {
    secuencia?: IntFieldUpdateOperationsInput | number
    estado_visita?: StringFieldUpdateOperationsInput | string
    prioridad?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizar?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RutaClienteUncheckedUpdateManyInput = {
    id_ruta_cliente?: IntFieldUpdateOperationsInput | number
    id_ruta?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    secuencia?: IntFieldUpdateOperationsInput | number
    estado_visita?: StringFieldUpdateOperationsInput | string
    prioridad?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizar?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitaCreateInput = {
    client_sync_id?: string | null
    tipo_visita?: string
    fecha_hora_checkin: Date | string
    fecha_hora_checkout?: Date | string | null
    latitud: Decimal | DecimalJsLike | number | string
    longitud: Decimal | DecimalJsLike | number | string
    resultado: string
    es_efectiva?: boolean
    monto_recaudado?: Decimal | DecimalJsLike | number | string | null
    fecha_promesa?: Date | string | null
    observaciones?: string | null
    foto_url?: string | null
    foto_adicional_url?: string | null
    video_url?: string | null
    foto_evidencia?: string | null
    firma_evidencia?: string | null
    fecha_creacion?: Date | string
    fecha_actualizar?: Date | string
    ruta_cliente?: RutaClienteCreateNestedOneWithoutVisitasInput
    cliente: ClienteCreateNestedOneWithoutVisitasInput
    asesor: AsesorCreateNestedOneWithoutVisitasInput
  }

  export type VisitaUncheckedCreateInput = {
    id_visita?: number
    client_sync_id?: string | null
    id_ruta_cliente?: number | null
    id_cliente: number
    id_asesor: number
    tipo_visita?: string
    fecha_hora_checkin: Date | string
    fecha_hora_checkout?: Date | string | null
    latitud: Decimal | DecimalJsLike | number | string
    longitud: Decimal | DecimalJsLike | number | string
    resultado: string
    es_efectiva?: boolean
    monto_recaudado?: Decimal | DecimalJsLike | number | string | null
    fecha_promesa?: Date | string | null
    observaciones?: string | null
    foto_url?: string | null
    foto_adicional_url?: string | null
    video_url?: string | null
    foto_evidencia?: string | null
    firma_evidencia?: string | null
    fecha_creacion?: Date | string
    fecha_actualizar?: Date | string
  }

  export type VisitaUpdateInput = {
    client_sync_id?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_visita?: StringFieldUpdateOperationsInput | string
    fecha_hora_checkin?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_checkout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resultado?: StringFieldUpdateOperationsInput | string
    es_efectiva?: BoolFieldUpdateOperationsInput | boolean
    monto_recaudado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_promesa?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
    foto_adicional_url?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    foto_evidencia?: NullableStringFieldUpdateOperationsInput | string | null
    firma_evidencia?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizar?: DateTimeFieldUpdateOperationsInput | Date | string
    ruta_cliente?: RutaClienteUpdateOneWithoutVisitasNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutVisitasNestedInput
    asesor?: AsesorUpdateOneRequiredWithoutVisitasNestedInput
  }

  export type VisitaUncheckedUpdateInput = {
    id_visita?: IntFieldUpdateOperationsInput | number
    client_sync_id?: NullableStringFieldUpdateOperationsInput | string | null
    id_ruta_cliente?: NullableIntFieldUpdateOperationsInput | number | null
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_asesor?: IntFieldUpdateOperationsInput | number
    tipo_visita?: StringFieldUpdateOperationsInput | string
    fecha_hora_checkin?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_checkout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resultado?: StringFieldUpdateOperationsInput | string
    es_efectiva?: BoolFieldUpdateOperationsInput | boolean
    monto_recaudado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_promesa?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
    foto_adicional_url?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    foto_evidencia?: NullableStringFieldUpdateOperationsInput | string | null
    firma_evidencia?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizar?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitaCreateManyInput = {
    id_visita?: number
    client_sync_id?: string | null
    id_ruta_cliente?: number | null
    id_cliente: number
    id_asesor: number
    tipo_visita?: string
    fecha_hora_checkin: Date | string
    fecha_hora_checkout?: Date | string | null
    latitud: Decimal | DecimalJsLike | number | string
    longitud: Decimal | DecimalJsLike | number | string
    resultado: string
    es_efectiva?: boolean
    monto_recaudado?: Decimal | DecimalJsLike | number | string | null
    fecha_promesa?: Date | string | null
    observaciones?: string | null
    foto_url?: string | null
    foto_adicional_url?: string | null
    video_url?: string | null
    foto_evidencia?: string | null
    firma_evidencia?: string | null
    fecha_creacion?: Date | string
    fecha_actualizar?: Date | string
  }

  export type VisitaUpdateManyMutationInput = {
    client_sync_id?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_visita?: StringFieldUpdateOperationsInput | string
    fecha_hora_checkin?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_checkout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resultado?: StringFieldUpdateOperationsInput | string
    es_efectiva?: BoolFieldUpdateOperationsInput | boolean
    monto_recaudado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_promesa?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
    foto_adicional_url?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    foto_evidencia?: NullableStringFieldUpdateOperationsInput | string | null
    firma_evidencia?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizar?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitaUncheckedUpdateManyInput = {
    id_visita?: IntFieldUpdateOperationsInput | number
    client_sync_id?: NullableStringFieldUpdateOperationsInput | string | null
    id_ruta_cliente?: NullableIntFieldUpdateOperationsInput | number | null
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_asesor?: IntFieldUpdateOperationsInput | number
    tipo_visita?: StringFieldUpdateOperationsInput | string
    fecha_hora_checkin?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_checkout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resultado?: StringFieldUpdateOperationsInput | string
    es_efectiva?: BoolFieldUpdateOperationsInput | boolean
    monto_recaudado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_promesa?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
    foto_adicional_url?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    foto_evidencia?: NullableStringFieldUpdateOperationsInput | string | null
    firma_evidencia?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizar?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioCreateInput = {
    id_usuario?: string
    username: string
    nombres?: string | null
    apellidos?: string | null
    email?: string | null
    sede?: string | null
    password_hash: string
    rol: string
    estado?: string
    fecha_creacion?: Date | string
    mfa_habilitado?: boolean
    mfa_requerido?: boolean
    mfa_exento?: boolean
    mfa_secreto?: string | null
    mfa_ultimo_uso?: Date | string | null
    token_version?: number
    intentos_fallidos?: number
    bloqueado_hasta?: Date | string | null
    ultimo_acceso?: Date | string | null
    password_cambio?: Date | string
    asesor?: AsesorCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id_usuario?: string
    username: string
    nombres?: string | null
    apellidos?: string | null
    email?: string | null
    sede?: string | null
    password_hash: string
    rol: string
    estado?: string
    id_asesor?: number | null
    fecha_creacion?: Date | string
    mfa_habilitado?: boolean
    mfa_requerido?: boolean
    mfa_exento?: boolean
    mfa_secreto?: string | null
    mfa_ultimo_uso?: Date | string | null
    token_version?: number
    intentos_fallidos?: number
    bloqueado_hasta?: Date | string | null
    ultimo_acceso?: Date | string | null
    password_cambio?: Date | string
  }

  export type UsuarioUpdateInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    nombres?: NullableStringFieldUpdateOperationsInput | string | null
    apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    sede?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    mfa_habilitado?: BoolFieldUpdateOperationsInput | boolean
    mfa_requerido?: BoolFieldUpdateOperationsInput | boolean
    mfa_exento?: BoolFieldUpdateOperationsInput | boolean
    mfa_secreto?: NullableStringFieldUpdateOperationsInput | string | null
    mfa_ultimo_uso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token_version?: IntFieldUpdateOperationsInput | number
    intentos_fallidos?: IntFieldUpdateOperationsInput | number
    bloqueado_hasta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultimo_acceso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password_cambio?: DateTimeFieldUpdateOperationsInput | Date | string
    asesor?: AsesorUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    nombres?: NullableStringFieldUpdateOperationsInput | string | null
    apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    sede?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    id_asesor?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    mfa_habilitado?: BoolFieldUpdateOperationsInput | boolean
    mfa_requerido?: BoolFieldUpdateOperationsInput | boolean
    mfa_exento?: BoolFieldUpdateOperationsInput | boolean
    mfa_secreto?: NullableStringFieldUpdateOperationsInput | string | null
    mfa_ultimo_uso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token_version?: IntFieldUpdateOperationsInput | number
    intentos_fallidos?: IntFieldUpdateOperationsInput | number
    bloqueado_hasta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultimo_acceso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password_cambio?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioCreateManyInput = {
    id_usuario?: string
    username: string
    nombres?: string | null
    apellidos?: string | null
    email?: string | null
    sede?: string | null
    password_hash: string
    rol: string
    estado?: string
    id_asesor?: number | null
    fecha_creacion?: Date | string
    mfa_habilitado?: boolean
    mfa_requerido?: boolean
    mfa_exento?: boolean
    mfa_secreto?: string | null
    mfa_ultimo_uso?: Date | string | null
    token_version?: number
    intentos_fallidos?: number
    bloqueado_hasta?: Date | string | null
    ultimo_acceso?: Date | string | null
    password_cambio?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    nombres?: NullableStringFieldUpdateOperationsInput | string | null
    apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    sede?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    mfa_habilitado?: BoolFieldUpdateOperationsInput | boolean
    mfa_requerido?: BoolFieldUpdateOperationsInput | boolean
    mfa_exento?: BoolFieldUpdateOperationsInput | boolean
    mfa_secreto?: NullableStringFieldUpdateOperationsInput | string | null
    mfa_ultimo_uso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token_version?: IntFieldUpdateOperationsInput | number
    intentos_fallidos?: IntFieldUpdateOperationsInput | number
    bloqueado_hasta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultimo_acceso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password_cambio?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    nombres?: NullableStringFieldUpdateOperationsInput | string | null
    apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    sede?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    id_asesor?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    mfa_habilitado?: BoolFieldUpdateOperationsInput | boolean
    mfa_requerido?: BoolFieldUpdateOperationsInput | boolean
    mfa_exento?: BoolFieldUpdateOperationsInput | boolean
    mfa_secreto?: NullableStringFieldUpdateOperationsInput | string | null
    mfa_ultimo_uso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token_version?: IntFieldUpdateOperationsInput | number
    intentos_fallidos?: IntFieldUpdateOperationsInput | number
    bloqueado_hasta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultimo_acceso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password_cambio?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditoriaSeguridadCreateInput = {
    id_auditoria?: string
    fecha?: Date | string
    request_id?: string | null
    actor_id?: string | null
    actor?: string | null
    rol?: string | null
    metodo: string
    ruta: string
    estado_http: number
    ip_address?: string | null
    ip_hash?: string | null
    user_agent?: string | null
  }

  export type AuditoriaSeguridadUncheckedCreateInput = {
    id_auditoria?: string
    fecha?: Date | string
    request_id?: string | null
    actor_id?: string | null
    actor?: string | null
    rol?: string | null
    metodo: string
    ruta: string
    estado_http: number
    ip_address?: string | null
    ip_hash?: string | null
    user_agent?: string | null
  }

  export type AuditoriaSeguridadUpdateInput = {
    id_auditoria?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    request_id?: NullableStringFieldUpdateOperationsInput | string | null
    actor_id?: NullableStringFieldUpdateOperationsInput | string | null
    actor?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    metodo?: StringFieldUpdateOperationsInput | string
    ruta?: StringFieldUpdateOperationsInput | string
    estado_http?: IntFieldUpdateOperationsInput | number
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    ip_hash?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuditoriaSeguridadUncheckedUpdateInput = {
    id_auditoria?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    request_id?: NullableStringFieldUpdateOperationsInput | string | null
    actor_id?: NullableStringFieldUpdateOperationsInput | string | null
    actor?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    metodo?: StringFieldUpdateOperationsInput | string
    ruta?: StringFieldUpdateOperationsInput | string
    estado_http?: IntFieldUpdateOperationsInput | number
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    ip_hash?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuditoriaSeguridadCreateManyInput = {
    id_auditoria?: string
    fecha?: Date | string
    request_id?: string | null
    actor_id?: string | null
    actor?: string | null
    rol?: string | null
    metodo: string
    ruta: string
    estado_http: number
    ip_address?: string | null
    ip_hash?: string | null
    user_agent?: string | null
  }

  export type AuditoriaSeguridadUpdateManyMutationInput = {
    id_auditoria?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    request_id?: NullableStringFieldUpdateOperationsInput | string | null
    actor_id?: NullableStringFieldUpdateOperationsInput | string | null
    actor?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    metodo?: StringFieldUpdateOperationsInput | string
    ruta?: StringFieldUpdateOperationsInput | string
    estado_http?: IntFieldUpdateOperationsInput | number
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    ip_hash?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuditoriaSeguridadUncheckedUpdateManyInput = {
    id_auditoria?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    request_id?: NullableStringFieldUpdateOperationsInput | string | null
    actor_id?: NullableStringFieldUpdateOperationsInput | string | null
    actor?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    metodo?: StringFieldUpdateOperationsInput | string
    ruta?: StringFieldUpdateOperationsInput | string
    estado_http?: IntFieldUpdateOperationsInput | number
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    ip_hash?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImportacionMasivaCreateInput = {
    id_importacion?: string
    tipo: string
    estado?: string
    archivo: string
    ruta_temporal: string
    actor_id?: string | null
    total_filas?: number
    procesadas?: number
    insertadas?: number
    actualizadas?: number
    omitidas?: number
    errores?: number
    detalle_error?: NullableJsonNullValueInput | InputJsonValue
    fecha_creacion?: Date | string
    fecha_inicio?: Date | string | null
    fecha_fin?: Date | string | null
  }

  export type ImportacionMasivaUncheckedCreateInput = {
    id_importacion?: string
    tipo: string
    estado?: string
    archivo: string
    ruta_temporal: string
    actor_id?: string | null
    total_filas?: number
    procesadas?: number
    insertadas?: number
    actualizadas?: number
    omitidas?: number
    errores?: number
    detalle_error?: NullableJsonNullValueInput | InputJsonValue
    fecha_creacion?: Date | string
    fecha_inicio?: Date | string | null
    fecha_fin?: Date | string | null
  }

  export type ImportacionMasivaUpdateInput = {
    id_importacion?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    archivo?: StringFieldUpdateOperationsInput | string
    ruta_temporal?: StringFieldUpdateOperationsInput | string
    actor_id?: NullableStringFieldUpdateOperationsInput | string | null
    total_filas?: IntFieldUpdateOperationsInput | number
    procesadas?: IntFieldUpdateOperationsInput | number
    insertadas?: IntFieldUpdateOperationsInput | number
    actualizadas?: IntFieldUpdateOperationsInput | number
    omitidas?: IntFieldUpdateOperationsInput | number
    errores?: IntFieldUpdateOperationsInput | number
    detalle_error?: NullableJsonNullValueInput | InputJsonValue
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ImportacionMasivaUncheckedUpdateInput = {
    id_importacion?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    archivo?: StringFieldUpdateOperationsInput | string
    ruta_temporal?: StringFieldUpdateOperationsInput | string
    actor_id?: NullableStringFieldUpdateOperationsInput | string | null
    total_filas?: IntFieldUpdateOperationsInput | number
    procesadas?: IntFieldUpdateOperationsInput | number
    insertadas?: IntFieldUpdateOperationsInput | number
    actualizadas?: IntFieldUpdateOperationsInput | number
    omitidas?: IntFieldUpdateOperationsInput | number
    errores?: IntFieldUpdateOperationsInput | number
    detalle_error?: NullableJsonNullValueInput | InputJsonValue
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ImportacionMasivaCreateManyInput = {
    id_importacion?: string
    tipo: string
    estado?: string
    archivo: string
    ruta_temporal: string
    actor_id?: string | null
    total_filas?: number
    procesadas?: number
    insertadas?: number
    actualizadas?: number
    omitidas?: number
    errores?: number
    detalle_error?: NullableJsonNullValueInput | InputJsonValue
    fecha_creacion?: Date | string
    fecha_inicio?: Date | string | null
    fecha_fin?: Date | string | null
  }

  export type ImportacionMasivaUpdateManyMutationInput = {
    id_importacion?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    archivo?: StringFieldUpdateOperationsInput | string
    ruta_temporal?: StringFieldUpdateOperationsInput | string
    actor_id?: NullableStringFieldUpdateOperationsInput | string | null
    total_filas?: IntFieldUpdateOperationsInput | number
    procesadas?: IntFieldUpdateOperationsInput | number
    insertadas?: IntFieldUpdateOperationsInput | number
    actualizadas?: IntFieldUpdateOperationsInput | number
    omitidas?: IntFieldUpdateOperationsInput | number
    errores?: IntFieldUpdateOperationsInput | number
    detalle_error?: NullableJsonNullValueInput | InputJsonValue
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ImportacionMasivaUncheckedUpdateManyInput = {
    id_importacion?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    archivo?: StringFieldUpdateOperationsInput | string
    ruta_temporal?: StringFieldUpdateOperationsInput | string
    actor_id?: NullableStringFieldUpdateOperationsInput | string | null
    total_filas?: IntFieldUpdateOperationsInput | number
    procesadas?: IntFieldUpdateOperationsInput | number
    insertadas?: IntFieldUpdateOperationsInput | number
    actualizadas?: IntFieldUpdateOperationsInput | number
    omitidas?: IntFieldUpdateOperationsInput | number
    errores?: IntFieldUpdateOperationsInput | number
    detalle_error?: NullableJsonNullValueInput | InputJsonValue
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RegistroCalidadCreateInput = {
    id_registro?: string
    tipo: string
    codigo: string
    titulo: string
    descripcion?: string | null
    estado?: string
    responsable_id?: string | null
    responsable?: string | null
    fecha_objetivo?: Date | string | null
    fecha_cierre?: Date | string | null
    clausula_iso?: string | null
    indicador?: string | null
    meta?: Decimal | DecimalJsLike | number | string | null
    valor_actual?: Decimal | DecimalJsLike | number | string | null
    unidad?: string | null
    datos?: NullableJsonNullValueInput | InputJsonValue
    evidencia?: NullableJsonNullValueInput | InputJsonValue
    version?: number
    creado_por?: string | null
    actualizado_por?: string | null
    fecha_creacion?: Date | string
    fecha_actualizar?: Date | string
    historial?: HistorialCalidadCreateNestedManyWithoutRegistroInput
  }

  export type RegistroCalidadUncheckedCreateInput = {
    id_registro?: string
    tipo: string
    codigo: string
    titulo: string
    descripcion?: string | null
    estado?: string
    responsable_id?: string | null
    responsable?: string | null
    fecha_objetivo?: Date | string | null
    fecha_cierre?: Date | string | null
    clausula_iso?: string | null
    indicador?: string | null
    meta?: Decimal | DecimalJsLike | number | string | null
    valor_actual?: Decimal | DecimalJsLike | number | string | null
    unidad?: string | null
    datos?: NullableJsonNullValueInput | InputJsonValue
    evidencia?: NullableJsonNullValueInput | InputJsonValue
    version?: number
    creado_por?: string | null
    actualizado_por?: string | null
    fecha_creacion?: Date | string
    fecha_actualizar?: Date | string
    historial?: HistorialCalidadUncheckedCreateNestedManyWithoutRegistroInput
  }

  export type RegistroCalidadUpdateInput = {
    id_registro?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    responsable_id?: NullableStringFieldUpdateOperationsInput | string | null
    responsable?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_objetivo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_cierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clausula_iso?: NullableStringFieldUpdateOperationsInput | string | null
    indicador?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    valor_actual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    unidad?: NullableStringFieldUpdateOperationsInput | string | null
    datos?: NullableJsonNullValueInput | InputJsonValue
    evidencia?: NullableJsonNullValueInput | InputJsonValue
    version?: IntFieldUpdateOperationsInput | number
    creado_por?: NullableStringFieldUpdateOperationsInput | string | null
    actualizado_por?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizar?: DateTimeFieldUpdateOperationsInput | Date | string
    historial?: HistorialCalidadUpdateManyWithoutRegistroNestedInput
  }

  export type RegistroCalidadUncheckedUpdateInput = {
    id_registro?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    responsable_id?: NullableStringFieldUpdateOperationsInput | string | null
    responsable?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_objetivo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_cierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clausula_iso?: NullableStringFieldUpdateOperationsInput | string | null
    indicador?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    valor_actual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    unidad?: NullableStringFieldUpdateOperationsInput | string | null
    datos?: NullableJsonNullValueInput | InputJsonValue
    evidencia?: NullableJsonNullValueInput | InputJsonValue
    version?: IntFieldUpdateOperationsInput | number
    creado_por?: NullableStringFieldUpdateOperationsInput | string | null
    actualizado_por?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizar?: DateTimeFieldUpdateOperationsInput | Date | string
    historial?: HistorialCalidadUncheckedUpdateManyWithoutRegistroNestedInput
  }

  export type RegistroCalidadCreateManyInput = {
    id_registro?: string
    tipo: string
    codigo: string
    titulo: string
    descripcion?: string | null
    estado?: string
    responsable_id?: string | null
    responsable?: string | null
    fecha_objetivo?: Date | string | null
    fecha_cierre?: Date | string | null
    clausula_iso?: string | null
    indicador?: string | null
    meta?: Decimal | DecimalJsLike | number | string | null
    valor_actual?: Decimal | DecimalJsLike | number | string | null
    unidad?: string | null
    datos?: NullableJsonNullValueInput | InputJsonValue
    evidencia?: NullableJsonNullValueInput | InputJsonValue
    version?: number
    creado_por?: string | null
    actualizado_por?: string | null
    fecha_creacion?: Date | string
    fecha_actualizar?: Date | string
  }

  export type RegistroCalidadUpdateManyMutationInput = {
    id_registro?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    responsable_id?: NullableStringFieldUpdateOperationsInput | string | null
    responsable?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_objetivo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_cierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clausula_iso?: NullableStringFieldUpdateOperationsInput | string | null
    indicador?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    valor_actual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    unidad?: NullableStringFieldUpdateOperationsInput | string | null
    datos?: NullableJsonNullValueInput | InputJsonValue
    evidencia?: NullableJsonNullValueInput | InputJsonValue
    version?: IntFieldUpdateOperationsInput | number
    creado_por?: NullableStringFieldUpdateOperationsInput | string | null
    actualizado_por?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizar?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroCalidadUncheckedUpdateManyInput = {
    id_registro?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    responsable_id?: NullableStringFieldUpdateOperationsInput | string | null
    responsable?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_objetivo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_cierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clausula_iso?: NullableStringFieldUpdateOperationsInput | string | null
    indicador?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    valor_actual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    unidad?: NullableStringFieldUpdateOperationsInput | string | null
    datos?: NullableJsonNullValueInput | InputJsonValue
    evidencia?: NullableJsonNullValueInput | InputJsonValue
    version?: IntFieldUpdateOperationsInput | number
    creado_por?: NullableStringFieldUpdateOperationsInput | string | null
    actualizado_por?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizar?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistorialCalidadCreateInput = {
    id_historial?: string
    accion: string
    version: number
    actor_id?: string | null
    actor?: string | null
    detalle?: NullableJsonNullValueInput | InputJsonValue
    fecha?: Date | string
    registro: RegistroCalidadCreateNestedOneWithoutHistorialInput
  }

  export type HistorialCalidadUncheckedCreateInput = {
    id_historial?: string
    id_registro: string
    accion: string
    version: number
    actor_id?: string | null
    actor?: string | null
    detalle?: NullableJsonNullValueInput | InputJsonValue
    fecha?: Date | string
  }

  export type HistorialCalidadUpdateInput = {
    id_historial?: StringFieldUpdateOperationsInput | string
    accion?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    actor_id?: NullableStringFieldUpdateOperationsInput | string | null
    actor?: NullableStringFieldUpdateOperationsInput | string | null
    detalle?: NullableJsonNullValueInput | InputJsonValue
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    registro?: RegistroCalidadUpdateOneRequiredWithoutHistorialNestedInput
  }

  export type HistorialCalidadUncheckedUpdateInput = {
    id_historial?: StringFieldUpdateOperationsInput | string
    id_registro?: StringFieldUpdateOperationsInput | string
    accion?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    actor_id?: NullableStringFieldUpdateOperationsInput | string | null
    actor?: NullableStringFieldUpdateOperationsInput | string | null
    detalle?: NullableJsonNullValueInput | InputJsonValue
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistorialCalidadCreateManyInput = {
    id_historial?: string
    id_registro: string
    accion: string
    version: number
    actor_id?: string | null
    actor?: string | null
    detalle?: NullableJsonNullValueInput | InputJsonValue
    fecha?: Date | string
  }

  export type HistorialCalidadUpdateManyMutationInput = {
    id_historial?: StringFieldUpdateOperationsInput | string
    accion?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    actor_id?: NullableStringFieldUpdateOperationsInput | string | null
    actor?: NullableStringFieldUpdateOperationsInput | string | null
    detalle?: NullableJsonNullValueInput | InputJsonValue
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistorialCalidadUncheckedUpdateManyInput = {
    id_historial?: StringFieldUpdateOperationsInput | string
    id_registro?: StringFieldUpdateOperationsInput | string
    accion?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    actor_id?: NullableStringFieldUpdateOperationsInput | string | null
    actor?: NullableStringFieldUpdateOperationsInput | string | null
    detalle?: NullableJsonNullValueInput | InputJsonValue
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumTipoDocumentoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoDocumento | EnumTipoDocumentoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoDocumento[] | ListEnumTipoDocumentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoDocumento[] | ListEnumTipoDocumentoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoDocumentoFilter<$PrismaModel> | $Enums.TipoDocumento
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type AdmisionListRelationFilter = {
    every?: AdmisionWhereInput
    some?: AdmisionWhereInput
    none?: AdmisionWhereInput
  }

  export type AsignacionClienteListRelationFilter = {
    every?: AsignacionClienteWhereInput
    some?: AsignacionClienteWhereInput
    none?: AsignacionClienteWhereInput
  }

  export type RutaClienteListRelationFilter = {
    every?: RutaClienteWhereInput
    some?: RutaClienteWhereInput
    none?: RutaClienteWhereInput
  }

  export type VisitaListRelationFilter = {
    every?: VisitaWhereInput
    some?: VisitaWhereInput
    none?: VisitaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AdmisionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AsignacionClienteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RutaClienteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VisitaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClienteTipo_documentoNumero_documentoCompoundUniqueInput = {
    tipo_documento: $Enums.TipoDocumento
    numero_documento: string
  }

  export type ClienteCountOrderByAggregateInput = {
    id_cliente?: SortOrder
    tipo_documento?: SortOrder
    numero_documento?: SortOrder
    telefono?: SortOrder
    nombres?: SortOrder
    apellido_paterno?: SortOrder
    apellido_materno?: SortOrder
    direccion?: SortOrder
    distrito?: SortOrder
    deuda_castigada?: SortOrder
    deuda_vigente?: SortOrder
    otras_deudas?: SortOrder
    estado?: SortOrder
    ultima_gestion?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
  }

  export type ClienteAvgOrderByAggregateInput = {
    id_cliente?: SortOrder
    deuda_castigada?: SortOrder
    deuda_vigente?: SortOrder
    otras_deudas?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    id_cliente?: SortOrder
    tipo_documento?: SortOrder
    numero_documento?: SortOrder
    telefono?: SortOrder
    nombres?: SortOrder
    apellido_paterno?: SortOrder
    apellido_materno?: SortOrder
    direccion?: SortOrder
    distrito?: SortOrder
    deuda_castigada?: SortOrder
    deuda_vigente?: SortOrder
    otras_deudas?: SortOrder
    estado?: SortOrder
    ultima_gestion?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    id_cliente?: SortOrder
    tipo_documento?: SortOrder
    numero_documento?: SortOrder
    telefono?: SortOrder
    nombres?: SortOrder
    apellido_paterno?: SortOrder
    apellido_materno?: SortOrder
    direccion?: SortOrder
    distrito?: SortOrder
    deuda_castigada?: SortOrder
    deuda_vigente?: SortOrder
    otras_deudas?: SortOrder
    estado?: SortOrder
    ultima_gestion?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
  }

  export type ClienteSumOrderByAggregateInput = {
    id_cliente?: SortOrder
    deuda_castigada?: SortOrder
    deuda_vigente?: SortOrder
    otras_deudas?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumTipoDocumentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoDocumento | EnumTipoDocumentoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoDocumento[] | ListEnumTipoDocumentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoDocumento[] | ListEnumTipoDocumentoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoDocumentoWithAggregatesFilter<$PrismaModel> | $Enums.TipoDocumento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoDocumentoFilter<$PrismaModel>
    _max?: NestedEnumTipoDocumentoFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type ClienteScalarRelationFilter = {
    is?: ClienteWhereInput
    isNot?: ClienteWhereInput
  }

  export type AdmisionCountOrderByAggregateInput = {
    id_admision?: SortOrder
    id_cliente?: SortOrder
    producto?: SortOrder
    linea_credito?: SortOrder
    estado?: SortOrder
    fecha?: SortOrder
  }

  export type AdmisionAvgOrderByAggregateInput = {
    id_admision?: SortOrder
    id_cliente?: SortOrder
    linea_credito?: SortOrder
  }

  export type AdmisionMaxOrderByAggregateInput = {
    id_admision?: SortOrder
    id_cliente?: SortOrder
    producto?: SortOrder
    linea_credito?: SortOrder
    estado?: SortOrder
    fecha?: SortOrder
  }

  export type AdmisionMinOrderByAggregateInput = {
    id_admision?: SortOrder
    id_cliente?: SortOrder
    producto?: SortOrder
    linea_credito?: SortOrder
    estado?: SortOrder
    fecha?: SortOrder
  }

  export type AdmisionSumOrderByAggregateInput = {
    id_admision?: SortOrder
    id_cliente?: SortOrder
    linea_credito?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RutaListRelationFilter = {
    every?: RutaWhereInput
    some?: RutaWhereInput
    none?: RutaWhereInput
  }

  export type UsuarioNullableScalarRelationFilter = {
    is?: UsuarioWhereInput | null
    isNot?: UsuarioWhereInput | null
  }

  export type RutaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AsesorCountOrderByAggregateInput = {
    id_asesor?: SortOrder
    dni?: SortOrder
    nombres?: SortOrder
    apellido_paterno?: SortOrder
    apellido_materno?: SortOrder
    telefono?: SortOrder
    correo?: SortOrder
    distrito?: SortOrder
    estado?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizar?: SortOrder
  }

  export type AsesorAvgOrderByAggregateInput = {
    id_asesor?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
  }

  export type AsesorMaxOrderByAggregateInput = {
    id_asesor?: SortOrder
    dni?: SortOrder
    nombres?: SortOrder
    apellido_paterno?: SortOrder
    apellido_materno?: SortOrder
    telefono?: SortOrder
    correo?: SortOrder
    distrito?: SortOrder
    estado?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizar?: SortOrder
  }

  export type AsesorMinOrderByAggregateInput = {
    id_asesor?: SortOrder
    dni?: SortOrder
    nombres?: SortOrder
    apellido_paterno?: SortOrder
    apellido_materno?: SortOrder
    telefono?: SortOrder
    correo?: SortOrder
    distrito?: SortOrder
    estado?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizar?: SortOrder
  }

  export type AsesorSumOrderByAggregateInput = {
    id_asesor?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type AsesorScalarRelationFilter = {
    is?: AsesorWhereInput
    isNot?: AsesorWhereInput
  }

  export type AsignacionClienteCountOrderByAggregateInput = {
    id_asignacion?: SortOrder
    id_cliente?: SortOrder
    id_asesor?: SortOrder
    fecha_asignacion?: SortOrder
    fecha_fin?: SortOrder
    estado?: SortOrder
  }

  export type AsignacionClienteAvgOrderByAggregateInput = {
    id_asignacion?: SortOrder
    id_cliente?: SortOrder
    id_asesor?: SortOrder
  }

  export type AsignacionClienteMaxOrderByAggregateInput = {
    id_asignacion?: SortOrder
    id_cliente?: SortOrder
    id_asesor?: SortOrder
    fecha_asignacion?: SortOrder
    fecha_fin?: SortOrder
    estado?: SortOrder
  }

  export type AsignacionClienteMinOrderByAggregateInput = {
    id_asignacion?: SortOrder
    id_cliente?: SortOrder
    id_asesor?: SortOrder
    fecha_asignacion?: SortOrder
    fecha_fin?: SortOrder
    estado?: SortOrder
  }

  export type AsignacionClienteSumOrderByAggregateInput = {
    id_asignacion?: SortOrder
    id_cliente?: SortOrder
    id_asesor?: SortOrder
  }

  export type RutaCountOrderByAggregateInput = {
    id_ruta?: SortOrder
    id_asesor?: SortOrder
    fecha_programada?: SortOrder
    fecha_inicio_real?: SortOrder
    fecha_fin_real?: SortOrder
    estado?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizar?: SortOrder
  }

  export type RutaAvgOrderByAggregateInput = {
    id_ruta?: SortOrder
    id_asesor?: SortOrder
  }

  export type RutaMaxOrderByAggregateInput = {
    id_ruta?: SortOrder
    id_asesor?: SortOrder
    fecha_programada?: SortOrder
    fecha_inicio_real?: SortOrder
    fecha_fin_real?: SortOrder
    estado?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizar?: SortOrder
  }

  export type RutaMinOrderByAggregateInput = {
    id_ruta?: SortOrder
    id_asesor?: SortOrder
    fecha_programada?: SortOrder
    fecha_inicio_real?: SortOrder
    fecha_fin_real?: SortOrder
    estado?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizar?: SortOrder
  }

  export type RutaSumOrderByAggregateInput = {
    id_ruta?: SortOrder
    id_asesor?: SortOrder
  }

  export type RutaScalarRelationFilter = {
    is?: RutaWhereInput
    isNot?: RutaWhereInput
  }

  export type RutaClienteId_rutaId_clienteCompoundUniqueInput = {
    id_ruta: number
    id_cliente: number
  }

  export type RutaClienteCountOrderByAggregateInput = {
    id_ruta_cliente?: SortOrder
    id_ruta?: SortOrder
    id_cliente?: SortOrder
    secuencia?: SortOrder
    estado_visita?: SortOrder
    prioridad?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizar?: SortOrder
  }

  export type RutaClienteAvgOrderByAggregateInput = {
    id_ruta_cliente?: SortOrder
    id_ruta?: SortOrder
    id_cliente?: SortOrder
    secuencia?: SortOrder
  }

  export type RutaClienteMaxOrderByAggregateInput = {
    id_ruta_cliente?: SortOrder
    id_ruta?: SortOrder
    id_cliente?: SortOrder
    secuencia?: SortOrder
    estado_visita?: SortOrder
    prioridad?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizar?: SortOrder
  }

  export type RutaClienteMinOrderByAggregateInput = {
    id_ruta_cliente?: SortOrder
    id_ruta?: SortOrder
    id_cliente?: SortOrder
    secuencia?: SortOrder
    estado_visita?: SortOrder
    prioridad?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizar?: SortOrder
  }

  export type RutaClienteSumOrderByAggregateInput = {
    id_ruta_cliente?: SortOrder
    id_ruta?: SortOrder
    id_cliente?: SortOrder
    secuencia?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type RutaClienteNullableScalarRelationFilter = {
    is?: RutaClienteWhereInput | null
    isNot?: RutaClienteWhereInput | null
  }

  export type VisitaCountOrderByAggregateInput = {
    id_visita?: SortOrder
    client_sync_id?: SortOrder
    id_ruta_cliente?: SortOrder
    id_cliente?: SortOrder
    id_asesor?: SortOrder
    tipo_visita?: SortOrder
    fecha_hora_checkin?: SortOrder
    fecha_hora_checkout?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    resultado?: SortOrder
    es_efectiva?: SortOrder
    monto_recaudado?: SortOrder
    fecha_promesa?: SortOrder
    observaciones?: SortOrder
    foto_url?: SortOrder
    foto_adicional_url?: SortOrder
    video_url?: SortOrder
    foto_evidencia?: SortOrder
    firma_evidencia?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizar?: SortOrder
  }

  export type VisitaAvgOrderByAggregateInput = {
    id_visita?: SortOrder
    id_ruta_cliente?: SortOrder
    id_cliente?: SortOrder
    id_asesor?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    monto_recaudado?: SortOrder
  }

  export type VisitaMaxOrderByAggregateInput = {
    id_visita?: SortOrder
    client_sync_id?: SortOrder
    id_ruta_cliente?: SortOrder
    id_cliente?: SortOrder
    id_asesor?: SortOrder
    tipo_visita?: SortOrder
    fecha_hora_checkin?: SortOrder
    fecha_hora_checkout?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    resultado?: SortOrder
    es_efectiva?: SortOrder
    monto_recaudado?: SortOrder
    fecha_promesa?: SortOrder
    observaciones?: SortOrder
    foto_url?: SortOrder
    foto_adicional_url?: SortOrder
    video_url?: SortOrder
    foto_evidencia?: SortOrder
    firma_evidencia?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizar?: SortOrder
  }

  export type VisitaMinOrderByAggregateInput = {
    id_visita?: SortOrder
    client_sync_id?: SortOrder
    id_ruta_cliente?: SortOrder
    id_cliente?: SortOrder
    id_asesor?: SortOrder
    tipo_visita?: SortOrder
    fecha_hora_checkin?: SortOrder
    fecha_hora_checkout?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    resultado?: SortOrder
    es_efectiva?: SortOrder
    monto_recaudado?: SortOrder
    fecha_promesa?: SortOrder
    observaciones?: SortOrder
    foto_url?: SortOrder
    foto_adicional_url?: SortOrder
    video_url?: SortOrder
    foto_evidencia?: SortOrder
    firma_evidencia?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizar?: SortOrder
  }

  export type VisitaSumOrderByAggregateInput = {
    id_visita?: SortOrder
    id_ruta_cliente?: SortOrder
    id_cliente?: SortOrder
    id_asesor?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    monto_recaudado?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type AsesorNullableScalarRelationFilter = {
    is?: AsesorWhereInput | null
    isNot?: AsesorWhereInput | null
  }

  export type UsuarioCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    username?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    email?: SortOrder
    sede?: SortOrder
    password_hash?: SortOrder
    rol?: SortOrder
    estado?: SortOrder
    id_asesor?: SortOrder
    fecha_creacion?: SortOrder
    mfa_habilitado?: SortOrder
    mfa_requerido?: SortOrder
    mfa_exento?: SortOrder
    mfa_secreto?: SortOrder
    mfa_ultimo_uso?: SortOrder
    token_version?: SortOrder
    intentos_fallidos?: SortOrder
    bloqueado_hasta?: SortOrder
    ultimo_acceso?: SortOrder
    password_cambio?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id_asesor?: SortOrder
    token_version?: SortOrder
    intentos_fallidos?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    username?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    email?: SortOrder
    sede?: SortOrder
    password_hash?: SortOrder
    rol?: SortOrder
    estado?: SortOrder
    id_asesor?: SortOrder
    fecha_creacion?: SortOrder
    mfa_habilitado?: SortOrder
    mfa_requerido?: SortOrder
    mfa_exento?: SortOrder
    mfa_secreto?: SortOrder
    mfa_ultimo_uso?: SortOrder
    token_version?: SortOrder
    intentos_fallidos?: SortOrder
    bloqueado_hasta?: SortOrder
    ultimo_acceso?: SortOrder
    password_cambio?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    username?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    email?: SortOrder
    sede?: SortOrder
    password_hash?: SortOrder
    rol?: SortOrder
    estado?: SortOrder
    id_asesor?: SortOrder
    fecha_creacion?: SortOrder
    mfa_habilitado?: SortOrder
    mfa_requerido?: SortOrder
    mfa_exento?: SortOrder
    mfa_secreto?: SortOrder
    mfa_ultimo_uso?: SortOrder
    token_version?: SortOrder
    intentos_fallidos?: SortOrder
    bloqueado_hasta?: SortOrder
    ultimo_acceso?: SortOrder
    password_cambio?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id_asesor?: SortOrder
    token_version?: SortOrder
    intentos_fallidos?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type AuditoriaSeguridadCountOrderByAggregateInput = {
    id_auditoria?: SortOrder
    fecha?: SortOrder
    request_id?: SortOrder
    actor_id?: SortOrder
    actor?: SortOrder
    rol?: SortOrder
    metodo?: SortOrder
    ruta?: SortOrder
    estado_http?: SortOrder
    ip_address?: SortOrder
    ip_hash?: SortOrder
    user_agent?: SortOrder
  }

  export type AuditoriaSeguridadAvgOrderByAggregateInput = {
    estado_http?: SortOrder
  }

  export type AuditoriaSeguridadMaxOrderByAggregateInput = {
    id_auditoria?: SortOrder
    fecha?: SortOrder
    request_id?: SortOrder
    actor_id?: SortOrder
    actor?: SortOrder
    rol?: SortOrder
    metodo?: SortOrder
    ruta?: SortOrder
    estado_http?: SortOrder
    ip_address?: SortOrder
    ip_hash?: SortOrder
    user_agent?: SortOrder
  }

  export type AuditoriaSeguridadMinOrderByAggregateInput = {
    id_auditoria?: SortOrder
    fecha?: SortOrder
    request_id?: SortOrder
    actor_id?: SortOrder
    actor?: SortOrder
    rol?: SortOrder
    metodo?: SortOrder
    ruta?: SortOrder
    estado_http?: SortOrder
    ip_address?: SortOrder
    ip_hash?: SortOrder
    user_agent?: SortOrder
  }

  export type AuditoriaSeguridadSumOrderByAggregateInput = {
    estado_http?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ImportacionMasivaCountOrderByAggregateInput = {
    id_importacion?: SortOrder
    tipo?: SortOrder
    estado?: SortOrder
    archivo?: SortOrder
    ruta_temporal?: SortOrder
    actor_id?: SortOrder
    total_filas?: SortOrder
    procesadas?: SortOrder
    insertadas?: SortOrder
    actualizadas?: SortOrder
    omitidas?: SortOrder
    errores?: SortOrder
    detalle_error?: SortOrder
    fecha_creacion?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
  }

  export type ImportacionMasivaAvgOrderByAggregateInput = {
    total_filas?: SortOrder
    procesadas?: SortOrder
    insertadas?: SortOrder
    actualizadas?: SortOrder
    omitidas?: SortOrder
    errores?: SortOrder
  }

  export type ImportacionMasivaMaxOrderByAggregateInput = {
    id_importacion?: SortOrder
    tipo?: SortOrder
    estado?: SortOrder
    archivo?: SortOrder
    ruta_temporal?: SortOrder
    actor_id?: SortOrder
    total_filas?: SortOrder
    procesadas?: SortOrder
    insertadas?: SortOrder
    actualizadas?: SortOrder
    omitidas?: SortOrder
    errores?: SortOrder
    fecha_creacion?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
  }

  export type ImportacionMasivaMinOrderByAggregateInput = {
    id_importacion?: SortOrder
    tipo?: SortOrder
    estado?: SortOrder
    archivo?: SortOrder
    ruta_temporal?: SortOrder
    actor_id?: SortOrder
    total_filas?: SortOrder
    procesadas?: SortOrder
    insertadas?: SortOrder
    actualizadas?: SortOrder
    omitidas?: SortOrder
    errores?: SortOrder
    fecha_creacion?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
  }

  export type ImportacionMasivaSumOrderByAggregateInput = {
    total_filas?: SortOrder
    procesadas?: SortOrder
    insertadas?: SortOrder
    actualizadas?: SortOrder
    omitidas?: SortOrder
    errores?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type HistorialCalidadListRelationFilter = {
    every?: HistorialCalidadWhereInput
    some?: HistorialCalidadWhereInput
    none?: HistorialCalidadWhereInput
  }

  export type HistorialCalidadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RegistroCalidadCountOrderByAggregateInput = {
    id_registro?: SortOrder
    tipo?: SortOrder
    codigo?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    estado?: SortOrder
    responsable_id?: SortOrder
    responsable?: SortOrder
    fecha_objetivo?: SortOrder
    fecha_cierre?: SortOrder
    clausula_iso?: SortOrder
    indicador?: SortOrder
    meta?: SortOrder
    valor_actual?: SortOrder
    unidad?: SortOrder
    datos?: SortOrder
    evidencia?: SortOrder
    version?: SortOrder
    creado_por?: SortOrder
    actualizado_por?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizar?: SortOrder
  }

  export type RegistroCalidadAvgOrderByAggregateInput = {
    meta?: SortOrder
    valor_actual?: SortOrder
    version?: SortOrder
  }

  export type RegistroCalidadMaxOrderByAggregateInput = {
    id_registro?: SortOrder
    tipo?: SortOrder
    codigo?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    estado?: SortOrder
    responsable_id?: SortOrder
    responsable?: SortOrder
    fecha_objetivo?: SortOrder
    fecha_cierre?: SortOrder
    clausula_iso?: SortOrder
    indicador?: SortOrder
    meta?: SortOrder
    valor_actual?: SortOrder
    unidad?: SortOrder
    version?: SortOrder
    creado_por?: SortOrder
    actualizado_por?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizar?: SortOrder
  }

  export type RegistroCalidadMinOrderByAggregateInput = {
    id_registro?: SortOrder
    tipo?: SortOrder
    codigo?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    estado?: SortOrder
    responsable_id?: SortOrder
    responsable?: SortOrder
    fecha_objetivo?: SortOrder
    fecha_cierre?: SortOrder
    clausula_iso?: SortOrder
    indicador?: SortOrder
    meta?: SortOrder
    valor_actual?: SortOrder
    unidad?: SortOrder
    version?: SortOrder
    creado_por?: SortOrder
    actualizado_por?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizar?: SortOrder
  }

  export type RegistroCalidadSumOrderByAggregateInput = {
    meta?: SortOrder
    valor_actual?: SortOrder
    version?: SortOrder
  }

  export type RegistroCalidadScalarRelationFilter = {
    is?: RegistroCalidadWhereInput
    isNot?: RegistroCalidadWhereInput
  }

  export type HistorialCalidadCountOrderByAggregateInput = {
    id_historial?: SortOrder
    id_registro?: SortOrder
    accion?: SortOrder
    version?: SortOrder
    actor_id?: SortOrder
    actor?: SortOrder
    detalle?: SortOrder
    fecha?: SortOrder
  }

  export type HistorialCalidadAvgOrderByAggregateInput = {
    version?: SortOrder
  }

  export type HistorialCalidadMaxOrderByAggregateInput = {
    id_historial?: SortOrder
    id_registro?: SortOrder
    accion?: SortOrder
    version?: SortOrder
    actor_id?: SortOrder
    actor?: SortOrder
    fecha?: SortOrder
  }

  export type HistorialCalidadMinOrderByAggregateInput = {
    id_historial?: SortOrder
    id_registro?: SortOrder
    accion?: SortOrder
    version?: SortOrder
    actor_id?: SortOrder
    actor?: SortOrder
    fecha?: SortOrder
  }

  export type HistorialCalidadSumOrderByAggregateInput = {
    version?: SortOrder
  }

  export type AdmisionCreateNestedManyWithoutClienteInput = {
    create?: XOR<AdmisionCreateWithoutClienteInput, AdmisionUncheckedCreateWithoutClienteInput> | AdmisionCreateWithoutClienteInput[] | AdmisionUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: AdmisionCreateOrConnectWithoutClienteInput | AdmisionCreateOrConnectWithoutClienteInput[]
    createMany?: AdmisionCreateManyClienteInputEnvelope
    connect?: AdmisionWhereUniqueInput | AdmisionWhereUniqueInput[]
  }

  export type AsignacionClienteCreateNestedManyWithoutClienteInput = {
    create?: XOR<AsignacionClienteCreateWithoutClienteInput, AsignacionClienteUncheckedCreateWithoutClienteInput> | AsignacionClienteCreateWithoutClienteInput[] | AsignacionClienteUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: AsignacionClienteCreateOrConnectWithoutClienteInput | AsignacionClienteCreateOrConnectWithoutClienteInput[]
    createMany?: AsignacionClienteCreateManyClienteInputEnvelope
    connect?: AsignacionClienteWhereUniqueInput | AsignacionClienteWhereUniqueInput[]
  }

  export type RutaClienteCreateNestedManyWithoutClienteInput = {
    create?: XOR<RutaClienteCreateWithoutClienteInput, RutaClienteUncheckedCreateWithoutClienteInput> | RutaClienteCreateWithoutClienteInput[] | RutaClienteUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: RutaClienteCreateOrConnectWithoutClienteInput | RutaClienteCreateOrConnectWithoutClienteInput[]
    createMany?: RutaClienteCreateManyClienteInputEnvelope
    connect?: RutaClienteWhereUniqueInput | RutaClienteWhereUniqueInput[]
  }

  export type VisitaCreateNestedManyWithoutClienteInput = {
    create?: XOR<VisitaCreateWithoutClienteInput, VisitaUncheckedCreateWithoutClienteInput> | VisitaCreateWithoutClienteInput[] | VisitaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: VisitaCreateOrConnectWithoutClienteInput | VisitaCreateOrConnectWithoutClienteInput[]
    createMany?: VisitaCreateManyClienteInputEnvelope
    connect?: VisitaWhereUniqueInput | VisitaWhereUniqueInput[]
  }

  export type AdmisionUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<AdmisionCreateWithoutClienteInput, AdmisionUncheckedCreateWithoutClienteInput> | AdmisionCreateWithoutClienteInput[] | AdmisionUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: AdmisionCreateOrConnectWithoutClienteInput | AdmisionCreateOrConnectWithoutClienteInput[]
    createMany?: AdmisionCreateManyClienteInputEnvelope
    connect?: AdmisionWhereUniqueInput | AdmisionWhereUniqueInput[]
  }

  export type AsignacionClienteUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<AsignacionClienteCreateWithoutClienteInput, AsignacionClienteUncheckedCreateWithoutClienteInput> | AsignacionClienteCreateWithoutClienteInput[] | AsignacionClienteUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: AsignacionClienteCreateOrConnectWithoutClienteInput | AsignacionClienteCreateOrConnectWithoutClienteInput[]
    createMany?: AsignacionClienteCreateManyClienteInputEnvelope
    connect?: AsignacionClienteWhereUniqueInput | AsignacionClienteWhereUniqueInput[]
  }

  export type RutaClienteUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<RutaClienteCreateWithoutClienteInput, RutaClienteUncheckedCreateWithoutClienteInput> | RutaClienteCreateWithoutClienteInput[] | RutaClienteUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: RutaClienteCreateOrConnectWithoutClienteInput | RutaClienteCreateOrConnectWithoutClienteInput[]
    createMany?: RutaClienteCreateManyClienteInputEnvelope
    connect?: RutaClienteWhereUniqueInput | RutaClienteWhereUniqueInput[]
  }

  export type VisitaUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<VisitaCreateWithoutClienteInput, VisitaUncheckedCreateWithoutClienteInput> | VisitaCreateWithoutClienteInput[] | VisitaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: VisitaCreateOrConnectWithoutClienteInput | VisitaCreateOrConnectWithoutClienteInput[]
    createMany?: VisitaCreateManyClienteInputEnvelope
    connect?: VisitaWhereUniqueInput | VisitaWhereUniqueInput[]
  }

  export type EnumTipoDocumentoFieldUpdateOperationsInput = {
    set?: $Enums.TipoDocumento
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type AdmisionUpdateManyWithoutClienteNestedInput = {
    create?: XOR<AdmisionCreateWithoutClienteInput, AdmisionUncheckedCreateWithoutClienteInput> | AdmisionCreateWithoutClienteInput[] | AdmisionUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: AdmisionCreateOrConnectWithoutClienteInput | AdmisionCreateOrConnectWithoutClienteInput[]
    upsert?: AdmisionUpsertWithWhereUniqueWithoutClienteInput | AdmisionUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: AdmisionCreateManyClienteInputEnvelope
    set?: AdmisionWhereUniqueInput | AdmisionWhereUniqueInput[]
    disconnect?: AdmisionWhereUniqueInput | AdmisionWhereUniqueInput[]
    delete?: AdmisionWhereUniqueInput | AdmisionWhereUniqueInput[]
    connect?: AdmisionWhereUniqueInput | AdmisionWhereUniqueInput[]
    update?: AdmisionUpdateWithWhereUniqueWithoutClienteInput | AdmisionUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: AdmisionUpdateManyWithWhereWithoutClienteInput | AdmisionUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: AdmisionScalarWhereInput | AdmisionScalarWhereInput[]
  }

  export type AsignacionClienteUpdateManyWithoutClienteNestedInput = {
    create?: XOR<AsignacionClienteCreateWithoutClienteInput, AsignacionClienteUncheckedCreateWithoutClienteInput> | AsignacionClienteCreateWithoutClienteInput[] | AsignacionClienteUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: AsignacionClienteCreateOrConnectWithoutClienteInput | AsignacionClienteCreateOrConnectWithoutClienteInput[]
    upsert?: AsignacionClienteUpsertWithWhereUniqueWithoutClienteInput | AsignacionClienteUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: AsignacionClienteCreateManyClienteInputEnvelope
    set?: AsignacionClienteWhereUniqueInput | AsignacionClienteWhereUniqueInput[]
    disconnect?: AsignacionClienteWhereUniqueInput | AsignacionClienteWhereUniqueInput[]
    delete?: AsignacionClienteWhereUniqueInput | AsignacionClienteWhereUniqueInput[]
    connect?: AsignacionClienteWhereUniqueInput | AsignacionClienteWhereUniqueInput[]
    update?: AsignacionClienteUpdateWithWhereUniqueWithoutClienteInput | AsignacionClienteUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: AsignacionClienteUpdateManyWithWhereWithoutClienteInput | AsignacionClienteUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: AsignacionClienteScalarWhereInput | AsignacionClienteScalarWhereInput[]
  }

  export type RutaClienteUpdateManyWithoutClienteNestedInput = {
    create?: XOR<RutaClienteCreateWithoutClienteInput, RutaClienteUncheckedCreateWithoutClienteInput> | RutaClienteCreateWithoutClienteInput[] | RutaClienteUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: RutaClienteCreateOrConnectWithoutClienteInput | RutaClienteCreateOrConnectWithoutClienteInput[]
    upsert?: RutaClienteUpsertWithWhereUniqueWithoutClienteInput | RutaClienteUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: RutaClienteCreateManyClienteInputEnvelope
    set?: RutaClienteWhereUniqueInput | RutaClienteWhereUniqueInput[]
    disconnect?: RutaClienteWhereUniqueInput | RutaClienteWhereUniqueInput[]
    delete?: RutaClienteWhereUniqueInput | RutaClienteWhereUniqueInput[]
    connect?: RutaClienteWhereUniqueInput | RutaClienteWhereUniqueInput[]
    update?: RutaClienteUpdateWithWhereUniqueWithoutClienteInput | RutaClienteUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: RutaClienteUpdateManyWithWhereWithoutClienteInput | RutaClienteUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: RutaClienteScalarWhereInput | RutaClienteScalarWhereInput[]
  }

  export type VisitaUpdateManyWithoutClienteNestedInput = {
    create?: XOR<VisitaCreateWithoutClienteInput, VisitaUncheckedCreateWithoutClienteInput> | VisitaCreateWithoutClienteInput[] | VisitaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: VisitaCreateOrConnectWithoutClienteInput | VisitaCreateOrConnectWithoutClienteInput[]
    upsert?: VisitaUpsertWithWhereUniqueWithoutClienteInput | VisitaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: VisitaCreateManyClienteInputEnvelope
    set?: VisitaWhereUniqueInput | VisitaWhereUniqueInput[]
    disconnect?: VisitaWhereUniqueInput | VisitaWhereUniqueInput[]
    delete?: VisitaWhereUniqueInput | VisitaWhereUniqueInput[]
    connect?: VisitaWhereUniqueInput | VisitaWhereUniqueInput[]
    update?: VisitaUpdateWithWhereUniqueWithoutClienteInput | VisitaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: VisitaUpdateManyWithWhereWithoutClienteInput | VisitaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: VisitaScalarWhereInput | VisitaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AdmisionUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<AdmisionCreateWithoutClienteInput, AdmisionUncheckedCreateWithoutClienteInput> | AdmisionCreateWithoutClienteInput[] | AdmisionUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: AdmisionCreateOrConnectWithoutClienteInput | AdmisionCreateOrConnectWithoutClienteInput[]
    upsert?: AdmisionUpsertWithWhereUniqueWithoutClienteInput | AdmisionUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: AdmisionCreateManyClienteInputEnvelope
    set?: AdmisionWhereUniqueInput | AdmisionWhereUniqueInput[]
    disconnect?: AdmisionWhereUniqueInput | AdmisionWhereUniqueInput[]
    delete?: AdmisionWhereUniqueInput | AdmisionWhereUniqueInput[]
    connect?: AdmisionWhereUniqueInput | AdmisionWhereUniqueInput[]
    update?: AdmisionUpdateWithWhereUniqueWithoutClienteInput | AdmisionUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: AdmisionUpdateManyWithWhereWithoutClienteInput | AdmisionUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: AdmisionScalarWhereInput | AdmisionScalarWhereInput[]
  }

  export type AsignacionClienteUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<AsignacionClienteCreateWithoutClienteInput, AsignacionClienteUncheckedCreateWithoutClienteInput> | AsignacionClienteCreateWithoutClienteInput[] | AsignacionClienteUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: AsignacionClienteCreateOrConnectWithoutClienteInput | AsignacionClienteCreateOrConnectWithoutClienteInput[]
    upsert?: AsignacionClienteUpsertWithWhereUniqueWithoutClienteInput | AsignacionClienteUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: AsignacionClienteCreateManyClienteInputEnvelope
    set?: AsignacionClienteWhereUniqueInput | AsignacionClienteWhereUniqueInput[]
    disconnect?: AsignacionClienteWhereUniqueInput | AsignacionClienteWhereUniqueInput[]
    delete?: AsignacionClienteWhereUniqueInput | AsignacionClienteWhereUniqueInput[]
    connect?: AsignacionClienteWhereUniqueInput | AsignacionClienteWhereUniqueInput[]
    update?: AsignacionClienteUpdateWithWhereUniqueWithoutClienteInput | AsignacionClienteUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: AsignacionClienteUpdateManyWithWhereWithoutClienteInput | AsignacionClienteUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: AsignacionClienteScalarWhereInput | AsignacionClienteScalarWhereInput[]
  }

  export type RutaClienteUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<RutaClienteCreateWithoutClienteInput, RutaClienteUncheckedCreateWithoutClienteInput> | RutaClienteCreateWithoutClienteInput[] | RutaClienteUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: RutaClienteCreateOrConnectWithoutClienteInput | RutaClienteCreateOrConnectWithoutClienteInput[]
    upsert?: RutaClienteUpsertWithWhereUniqueWithoutClienteInput | RutaClienteUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: RutaClienteCreateManyClienteInputEnvelope
    set?: RutaClienteWhereUniqueInput | RutaClienteWhereUniqueInput[]
    disconnect?: RutaClienteWhereUniqueInput | RutaClienteWhereUniqueInput[]
    delete?: RutaClienteWhereUniqueInput | RutaClienteWhereUniqueInput[]
    connect?: RutaClienteWhereUniqueInput | RutaClienteWhereUniqueInput[]
    update?: RutaClienteUpdateWithWhereUniqueWithoutClienteInput | RutaClienteUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: RutaClienteUpdateManyWithWhereWithoutClienteInput | RutaClienteUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: RutaClienteScalarWhereInput | RutaClienteScalarWhereInput[]
  }

  export type VisitaUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<VisitaCreateWithoutClienteInput, VisitaUncheckedCreateWithoutClienteInput> | VisitaCreateWithoutClienteInput[] | VisitaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: VisitaCreateOrConnectWithoutClienteInput | VisitaCreateOrConnectWithoutClienteInput[]
    upsert?: VisitaUpsertWithWhereUniqueWithoutClienteInput | VisitaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: VisitaCreateManyClienteInputEnvelope
    set?: VisitaWhereUniqueInput | VisitaWhereUniqueInput[]
    disconnect?: VisitaWhereUniqueInput | VisitaWhereUniqueInput[]
    delete?: VisitaWhereUniqueInput | VisitaWhereUniqueInput[]
    connect?: VisitaWhereUniqueInput | VisitaWhereUniqueInput[]
    update?: VisitaUpdateWithWhereUniqueWithoutClienteInput | VisitaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: VisitaUpdateManyWithWhereWithoutClienteInput | VisitaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: VisitaScalarWhereInput | VisitaScalarWhereInput[]
  }

  export type ClienteCreateNestedOneWithoutAdmisionesInput = {
    create?: XOR<ClienteCreateWithoutAdmisionesInput, ClienteUncheckedCreateWithoutAdmisionesInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutAdmisionesInput
    connect?: ClienteWhereUniqueInput
  }

  export type ClienteUpdateOneRequiredWithoutAdmisionesNestedInput = {
    create?: XOR<ClienteCreateWithoutAdmisionesInput, ClienteUncheckedCreateWithoutAdmisionesInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutAdmisionesInput
    upsert?: ClienteUpsertWithoutAdmisionesInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutAdmisionesInput, ClienteUpdateWithoutAdmisionesInput>, ClienteUncheckedUpdateWithoutAdmisionesInput>
  }

  export type AsignacionClienteCreateNestedManyWithoutAsesorInput = {
    create?: XOR<AsignacionClienteCreateWithoutAsesorInput, AsignacionClienteUncheckedCreateWithoutAsesorInput> | AsignacionClienteCreateWithoutAsesorInput[] | AsignacionClienteUncheckedCreateWithoutAsesorInput[]
    connectOrCreate?: AsignacionClienteCreateOrConnectWithoutAsesorInput | AsignacionClienteCreateOrConnectWithoutAsesorInput[]
    createMany?: AsignacionClienteCreateManyAsesorInputEnvelope
    connect?: AsignacionClienteWhereUniqueInput | AsignacionClienteWhereUniqueInput[]
  }

  export type RutaCreateNestedManyWithoutAsesorInput = {
    create?: XOR<RutaCreateWithoutAsesorInput, RutaUncheckedCreateWithoutAsesorInput> | RutaCreateWithoutAsesorInput[] | RutaUncheckedCreateWithoutAsesorInput[]
    connectOrCreate?: RutaCreateOrConnectWithoutAsesorInput | RutaCreateOrConnectWithoutAsesorInput[]
    createMany?: RutaCreateManyAsesorInputEnvelope
    connect?: RutaWhereUniqueInput | RutaWhereUniqueInput[]
  }

  export type VisitaCreateNestedManyWithoutAsesorInput = {
    create?: XOR<VisitaCreateWithoutAsesorInput, VisitaUncheckedCreateWithoutAsesorInput> | VisitaCreateWithoutAsesorInput[] | VisitaUncheckedCreateWithoutAsesorInput[]
    connectOrCreate?: VisitaCreateOrConnectWithoutAsesorInput | VisitaCreateOrConnectWithoutAsesorInput[]
    createMany?: VisitaCreateManyAsesorInputEnvelope
    connect?: VisitaWhereUniqueInput | VisitaWhereUniqueInput[]
  }

  export type UsuarioCreateNestedOneWithoutAsesorInput = {
    create?: XOR<UsuarioCreateWithoutAsesorInput, UsuarioUncheckedCreateWithoutAsesorInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAsesorInput
    connect?: UsuarioWhereUniqueInput
  }

  export type AsignacionClienteUncheckedCreateNestedManyWithoutAsesorInput = {
    create?: XOR<AsignacionClienteCreateWithoutAsesorInput, AsignacionClienteUncheckedCreateWithoutAsesorInput> | AsignacionClienteCreateWithoutAsesorInput[] | AsignacionClienteUncheckedCreateWithoutAsesorInput[]
    connectOrCreate?: AsignacionClienteCreateOrConnectWithoutAsesorInput | AsignacionClienteCreateOrConnectWithoutAsesorInput[]
    createMany?: AsignacionClienteCreateManyAsesorInputEnvelope
    connect?: AsignacionClienteWhereUniqueInput | AsignacionClienteWhereUniqueInput[]
  }

  export type RutaUncheckedCreateNestedManyWithoutAsesorInput = {
    create?: XOR<RutaCreateWithoutAsesorInput, RutaUncheckedCreateWithoutAsesorInput> | RutaCreateWithoutAsesorInput[] | RutaUncheckedCreateWithoutAsesorInput[]
    connectOrCreate?: RutaCreateOrConnectWithoutAsesorInput | RutaCreateOrConnectWithoutAsesorInput[]
    createMany?: RutaCreateManyAsesorInputEnvelope
    connect?: RutaWhereUniqueInput | RutaWhereUniqueInput[]
  }

  export type VisitaUncheckedCreateNestedManyWithoutAsesorInput = {
    create?: XOR<VisitaCreateWithoutAsesorInput, VisitaUncheckedCreateWithoutAsesorInput> | VisitaCreateWithoutAsesorInput[] | VisitaUncheckedCreateWithoutAsesorInput[]
    connectOrCreate?: VisitaCreateOrConnectWithoutAsesorInput | VisitaCreateOrConnectWithoutAsesorInput[]
    createMany?: VisitaCreateManyAsesorInputEnvelope
    connect?: VisitaWhereUniqueInput | VisitaWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedOneWithoutAsesorInput = {
    create?: XOR<UsuarioCreateWithoutAsesorInput, UsuarioUncheckedCreateWithoutAsesorInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAsesorInput
    connect?: UsuarioWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AsignacionClienteUpdateManyWithoutAsesorNestedInput = {
    create?: XOR<AsignacionClienteCreateWithoutAsesorInput, AsignacionClienteUncheckedCreateWithoutAsesorInput> | AsignacionClienteCreateWithoutAsesorInput[] | AsignacionClienteUncheckedCreateWithoutAsesorInput[]
    connectOrCreate?: AsignacionClienteCreateOrConnectWithoutAsesorInput | AsignacionClienteCreateOrConnectWithoutAsesorInput[]
    upsert?: AsignacionClienteUpsertWithWhereUniqueWithoutAsesorInput | AsignacionClienteUpsertWithWhereUniqueWithoutAsesorInput[]
    createMany?: AsignacionClienteCreateManyAsesorInputEnvelope
    set?: AsignacionClienteWhereUniqueInput | AsignacionClienteWhereUniqueInput[]
    disconnect?: AsignacionClienteWhereUniqueInput | AsignacionClienteWhereUniqueInput[]
    delete?: AsignacionClienteWhereUniqueInput | AsignacionClienteWhereUniqueInput[]
    connect?: AsignacionClienteWhereUniqueInput | AsignacionClienteWhereUniqueInput[]
    update?: AsignacionClienteUpdateWithWhereUniqueWithoutAsesorInput | AsignacionClienteUpdateWithWhereUniqueWithoutAsesorInput[]
    updateMany?: AsignacionClienteUpdateManyWithWhereWithoutAsesorInput | AsignacionClienteUpdateManyWithWhereWithoutAsesorInput[]
    deleteMany?: AsignacionClienteScalarWhereInput | AsignacionClienteScalarWhereInput[]
  }

  export type RutaUpdateManyWithoutAsesorNestedInput = {
    create?: XOR<RutaCreateWithoutAsesorInput, RutaUncheckedCreateWithoutAsesorInput> | RutaCreateWithoutAsesorInput[] | RutaUncheckedCreateWithoutAsesorInput[]
    connectOrCreate?: RutaCreateOrConnectWithoutAsesorInput | RutaCreateOrConnectWithoutAsesorInput[]
    upsert?: RutaUpsertWithWhereUniqueWithoutAsesorInput | RutaUpsertWithWhereUniqueWithoutAsesorInput[]
    createMany?: RutaCreateManyAsesorInputEnvelope
    set?: RutaWhereUniqueInput | RutaWhereUniqueInput[]
    disconnect?: RutaWhereUniqueInput | RutaWhereUniqueInput[]
    delete?: RutaWhereUniqueInput | RutaWhereUniqueInput[]
    connect?: RutaWhereUniqueInput | RutaWhereUniqueInput[]
    update?: RutaUpdateWithWhereUniqueWithoutAsesorInput | RutaUpdateWithWhereUniqueWithoutAsesorInput[]
    updateMany?: RutaUpdateManyWithWhereWithoutAsesorInput | RutaUpdateManyWithWhereWithoutAsesorInput[]
    deleteMany?: RutaScalarWhereInput | RutaScalarWhereInput[]
  }

  export type VisitaUpdateManyWithoutAsesorNestedInput = {
    create?: XOR<VisitaCreateWithoutAsesorInput, VisitaUncheckedCreateWithoutAsesorInput> | VisitaCreateWithoutAsesorInput[] | VisitaUncheckedCreateWithoutAsesorInput[]
    connectOrCreate?: VisitaCreateOrConnectWithoutAsesorInput | VisitaCreateOrConnectWithoutAsesorInput[]
    upsert?: VisitaUpsertWithWhereUniqueWithoutAsesorInput | VisitaUpsertWithWhereUniqueWithoutAsesorInput[]
    createMany?: VisitaCreateManyAsesorInputEnvelope
    set?: VisitaWhereUniqueInput | VisitaWhereUniqueInput[]
    disconnect?: VisitaWhereUniqueInput | VisitaWhereUniqueInput[]
    delete?: VisitaWhereUniqueInput | VisitaWhereUniqueInput[]
    connect?: VisitaWhereUniqueInput | VisitaWhereUniqueInput[]
    update?: VisitaUpdateWithWhereUniqueWithoutAsesorInput | VisitaUpdateWithWhereUniqueWithoutAsesorInput[]
    updateMany?: VisitaUpdateManyWithWhereWithoutAsesorInput | VisitaUpdateManyWithWhereWithoutAsesorInput[]
    deleteMany?: VisitaScalarWhereInput | VisitaScalarWhereInput[]
  }

  export type UsuarioUpdateOneWithoutAsesorNestedInput = {
    create?: XOR<UsuarioCreateWithoutAsesorInput, UsuarioUncheckedCreateWithoutAsesorInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAsesorInput
    upsert?: UsuarioUpsertWithoutAsesorInput
    disconnect?: UsuarioWhereInput | boolean
    delete?: UsuarioWhereInput | boolean
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutAsesorInput, UsuarioUpdateWithoutAsesorInput>, UsuarioUncheckedUpdateWithoutAsesorInput>
  }

  export type AsignacionClienteUncheckedUpdateManyWithoutAsesorNestedInput = {
    create?: XOR<AsignacionClienteCreateWithoutAsesorInput, AsignacionClienteUncheckedCreateWithoutAsesorInput> | AsignacionClienteCreateWithoutAsesorInput[] | AsignacionClienteUncheckedCreateWithoutAsesorInput[]
    connectOrCreate?: AsignacionClienteCreateOrConnectWithoutAsesorInput | AsignacionClienteCreateOrConnectWithoutAsesorInput[]
    upsert?: AsignacionClienteUpsertWithWhereUniqueWithoutAsesorInput | AsignacionClienteUpsertWithWhereUniqueWithoutAsesorInput[]
    createMany?: AsignacionClienteCreateManyAsesorInputEnvelope
    set?: AsignacionClienteWhereUniqueInput | AsignacionClienteWhereUniqueInput[]
    disconnect?: AsignacionClienteWhereUniqueInput | AsignacionClienteWhereUniqueInput[]
    delete?: AsignacionClienteWhereUniqueInput | AsignacionClienteWhereUniqueInput[]
    connect?: AsignacionClienteWhereUniqueInput | AsignacionClienteWhereUniqueInput[]
    update?: AsignacionClienteUpdateWithWhereUniqueWithoutAsesorInput | AsignacionClienteUpdateWithWhereUniqueWithoutAsesorInput[]
    updateMany?: AsignacionClienteUpdateManyWithWhereWithoutAsesorInput | AsignacionClienteUpdateManyWithWhereWithoutAsesorInput[]
    deleteMany?: AsignacionClienteScalarWhereInput | AsignacionClienteScalarWhereInput[]
  }

  export type RutaUncheckedUpdateManyWithoutAsesorNestedInput = {
    create?: XOR<RutaCreateWithoutAsesorInput, RutaUncheckedCreateWithoutAsesorInput> | RutaCreateWithoutAsesorInput[] | RutaUncheckedCreateWithoutAsesorInput[]
    connectOrCreate?: RutaCreateOrConnectWithoutAsesorInput | RutaCreateOrConnectWithoutAsesorInput[]
    upsert?: RutaUpsertWithWhereUniqueWithoutAsesorInput | RutaUpsertWithWhereUniqueWithoutAsesorInput[]
    createMany?: RutaCreateManyAsesorInputEnvelope
    set?: RutaWhereUniqueInput | RutaWhereUniqueInput[]
    disconnect?: RutaWhereUniqueInput | RutaWhereUniqueInput[]
    delete?: RutaWhereUniqueInput | RutaWhereUniqueInput[]
    connect?: RutaWhereUniqueInput | RutaWhereUniqueInput[]
    update?: RutaUpdateWithWhereUniqueWithoutAsesorInput | RutaUpdateWithWhereUniqueWithoutAsesorInput[]
    updateMany?: RutaUpdateManyWithWhereWithoutAsesorInput | RutaUpdateManyWithWhereWithoutAsesorInput[]
    deleteMany?: RutaScalarWhereInput | RutaScalarWhereInput[]
  }

  export type VisitaUncheckedUpdateManyWithoutAsesorNestedInput = {
    create?: XOR<VisitaCreateWithoutAsesorInput, VisitaUncheckedCreateWithoutAsesorInput> | VisitaCreateWithoutAsesorInput[] | VisitaUncheckedCreateWithoutAsesorInput[]
    connectOrCreate?: VisitaCreateOrConnectWithoutAsesorInput | VisitaCreateOrConnectWithoutAsesorInput[]
    upsert?: VisitaUpsertWithWhereUniqueWithoutAsesorInput | VisitaUpsertWithWhereUniqueWithoutAsesorInput[]
    createMany?: VisitaCreateManyAsesorInputEnvelope
    set?: VisitaWhereUniqueInput | VisitaWhereUniqueInput[]
    disconnect?: VisitaWhereUniqueInput | VisitaWhereUniqueInput[]
    delete?: VisitaWhereUniqueInput | VisitaWhereUniqueInput[]
    connect?: VisitaWhereUniqueInput | VisitaWhereUniqueInput[]
    update?: VisitaUpdateWithWhereUniqueWithoutAsesorInput | VisitaUpdateWithWhereUniqueWithoutAsesorInput[]
    updateMany?: VisitaUpdateManyWithWhereWithoutAsesorInput | VisitaUpdateManyWithWhereWithoutAsesorInput[]
    deleteMany?: VisitaScalarWhereInput | VisitaScalarWhereInput[]
  }

  export type UsuarioUncheckedUpdateOneWithoutAsesorNestedInput = {
    create?: XOR<UsuarioCreateWithoutAsesorInput, UsuarioUncheckedCreateWithoutAsesorInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAsesorInput
    upsert?: UsuarioUpsertWithoutAsesorInput
    disconnect?: UsuarioWhereInput | boolean
    delete?: UsuarioWhereInput | boolean
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutAsesorInput, UsuarioUpdateWithoutAsesorInput>, UsuarioUncheckedUpdateWithoutAsesorInput>
  }

  export type ClienteCreateNestedOneWithoutAsignacionesInput = {
    create?: XOR<ClienteCreateWithoutAsignacionesInput, ClienteUncheckedCreateWithoutAsignacionesInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutAsignacionesInput
    connect?: ClienteWhereUniqueInput
  }

  export type AsesorCreateNestedOneWithoutAsignacionesInput = {
    create?: XOR<AsesorCreateWithoutAsignacionesInput, AsesorUncheckedCreateWithoutAsignacionesInput>
    connectOrCreate?: AsesorCreateOrConnectWithoutAsignacionesInput
    connect?: AsesorWhereUniqueInput
  }

  export type ClienteUpdateOneRequiredWithoutAsignacionesNestedInput = {
    create?: XOR<ClienteCreateWithoutAsignacionesInput, ClienteUncheckedCreateWithoutAsignacionesInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutAsignacionesInput
    upsert?: ClienteUpsertWithoutAsignacionesInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutAsignacionesInput, ClienteUpdateWithoutAsignacionesInput>, ClienteUncheckedUpdateWithoutAsignacionesInput>
  }

  export type AsesorUpdateOneRequiredWithoutAsignacionesNestedInput = {
    create?: XOR<AsesorCreateWithoutAsignacionesInput, AsesorUncheckedCreateWithoutAsignacionesInput>
    connectOrCreate?: AsesorCreateOrConnectWithoutAsignacionesInput
    upsert?: AsesorUpsertWithoutAsignacionesInput
    connect?: AsesorWhereUniqueInput
    update?: XOR<XOR<AsesorUpdateToOneWithWhereWithoutAsignacionesInput, AsesorUpdateWithoutAsignacionesInput>, AsesorUncheckedUpdateWithoutAsignacionesInput>
  }

  export type AsesorCreateNestedOneWithoutRutasInput = {
    create?: XOR<AsesorCreateWithoutRutasInput, AsesorUncheckedCreateWithoutRutasInput>
    connectOrCreate?: AsesorCreateOrConnectWithoutRutasInput
    connect?: AsesorWhereUniqueInput
  }

  export type RutaClienteCreateNestedManyWithoutRutaInput = {
    create?: XOR<RutaClienteCreateWithoutRutaInput, RutaClienteUncheckedCreateWithoutRutaInput> | RutaClienteCreateWithoutRutaInput[] | RutaClienteUncheckedCreateWithoutRutaInput[]
    connectOrCreate?: RutaClienteCreateOrConnectWithoutRutaInput | RutaClienteCreateOrConnectWithoutRutaInput[]
    createMany?: RutaClienteCreateManyRutaInputEnvelope
    connect?: RutaClienteWhereUniqueInput | RutaClienteWhereUniqueInput[]
  }

  export type RutaClienteUncheckedCreateNestedManyWithoutRutaInput = {
    create?: XOR<RutaClienteCreateWithoutRutaInput, RutaClienteUncheckedCreateWithoutRutaInput> | RutaClienteCreateWithoutRutaInput[] | RutaClienteUncheckedCreateWithoutRutaInput[]
    connectOrCreate?: RutaClienteCreateOrConnectWithoutRutaInput | RutaClienteCreateOrConnectWithoutRutaInput[]
    createMany?: RutaClienteCreateManyRutaInputEnvelope
    connect?: RutaClienteWhereUniqueInput | RutaClienteWhereUniqueInput[]
  }

  export type AsesorUpdateOneRequiredWithoutRutasNestedInput = {
    create?: XOR<AsesorCreateWithoutRutasInput, AsesorUncheckedCreateWithoutRutasInput>
    connectOrCreate?: AsesorCreateOrConnectWithoutRutasInput
    upsert?: AsesorUpsertWithoutRutasInput
    connect?: AsesorWhereUniqueInput
    update?: XOR<XOR<AsesorUpdateToOneWithWhereWithoutRutasInput, AsesorUpdateWithoutRutasInput>, AsesorUncheckedUpdateWithoutRutasInput>
  }

  export type RutaClienteUpdateManyWithoutRutaNestedInput = {
    create?: XOR<RutaClienteCreateWithoutRutaInput, RutaClienteUncheckedCreateWithoutRutaInput> | RutaClienteCreateWithoutRutaInput[] | RutaClienteUncheckedCreateWithoutRutaInput[]
    connectOrCreate?: RutaClienteCreateOrConnectWithoutRutaInput | RutaClienteCreateOrConnectWithoutRutaInput[]
    upsert?: RutaClienteUpsertWithWhereUniqueWithoutRutaInput | RutaClienteUpsertWithWhereUniqueWithoutRutaInput[]
    createMany?: RutaClienteCreateManyRutaInputEnvelope
    set?: RutaClienteWhereUniqueInput | RutaClienteWhereUniqueInput[]
    disconnect?: RutaClienteWhereUniqueInput | RutaClienteWhereUniqueInput[]
    delete?: RutaClienteWhereUniqueInput | RutaClienteWhereUniqueInput[]
    connect?: RutaClienteWhereUniqueInput | RutaClienteWhereUniqueInput[]
    update?: RutaClienteUpdateWithWhereUniqueWithoutRutaInput | RutaClienteUpdateWithWhereUniqueWithoutRutaInput[]
    updateMany?: RutaClienteUpdateManyWithWhereWithoutRutaInput | RutaClienteUpdateManyWithWhereWithoutRutaInput[]
    deleteMany?: RutaClienteScalarWhereInput | RutaClienteScalarWhereInput[]
  }

  export type RutaClienteUncheckedUpdateManyWithoutRutaNestedInput = {
    create?: XOR<RutaClienteCreateWithoutRutaInput, RutaClienteUncheckedCreateWithoutRutaInput> | RutaClienteCreateWithoutRutaInput[] | RutaClienteUncheckedCreateWithoutRutaInput[]
    connectOrCreate?: RutaClienteCreateOrConnectWithoutRutaInput | RutaClienteCreateOrConnectWithoutRutaInput[]
    upsert?: RutaClienteUpsertWithWhereUniqueWithoutRutaInput | RutaClienteUpsertWithWhereUniqueWithoutRutaInput[]
    createMany?: RutaClienteCreateManyRutaInputEnvelope
    set?: RutaClienteWhereUniqueInput | RutaClienteWhereUniqueInput[]
    disconnect?: RutaClienteWhereUniqueInput | RutaClienteWhereUniqueInput[]
    delete?: RutaClienteWhereUniqueInput | RutaClienteWhereUniqueInput[]
    connect?: RutaClienteWhereUniqueInput | RutaClienteWhereUniqueInput[]
    update?: RutaClienteUpdateWithWhereUniqueWithoutRutaInput | RutaClienteUpdateWithWhereUniqueWithoutRutaInput[]
    updateMany?: RutaClienteUpdateManyWithWhereWithoutRutaInput | RutaClienteUpdateManyWithWhereWithoutRutaInput[]
    deleteMany?: RutaClienteScalarWhereInput | RutaClienteScalarWhereInput[]
  }

  export type RutaCreateNestedOneWithoutRutas_clientesInput = {
    create?: XOR<RutaCreateWithoutRutas_clientesInput, RutaUncheckedCreateWithoutRutas_clientesInput>
    connectOrCreate?: RutaCreateOrConnectWithoutRutas_clientesInput
    connect?: RutaWhereUniqueInput
  }

  export type ClienteCreateNestedOneWithoutRutas_clientesInput = {
    create?: XOR<ClienteCreateWithoutRutas_clientesInput, ClienteUncheckedCreateWithoutRutas_clientesInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutRutas_clientesInput
    connect?: ClienteWhereUniqueInput
  }

  export type VisitaCreateNestedManyWithoutRuta_clienteInput = {
    create?: XOR<VisitaCreateWithoutRuta_clienteInput, VisitaUncheckedCreateWithoutRuta_clienteInput> | VisitaCreateWithoutRuta_clienteInput[] | VisitaUncheckedCreateWithoutRuta_clienteInput[]
    connectOrCreate?: VisitaCreateOrConnectWithoutRuta_clienteInput | VisitaCreateOrConnectWithoutRuta_clienteInput[]
    createMany?: VisitaCreateManyRuta_clienteInputEnvelope
    connect?: VisitaWhereUniqueInput | VisitaWhereUniqueInput[]
  }

  export type VisitaUncheckedCreateNestedManyWithoutRuta_clienteInput = {
    create?: XOR<VisitaCreateWithoutRuta_clienteInput, VisitaUncheckedCreateWithoutRuta_clienteInput> | VisitaCreateWithoutRuta_clienteInput[] | VisitaUncheckedCreateWithoutRuta_clienteInput[]
    connectOrCreate?: VisitaCreateOrConnectWithoutRuta_clienteInput | VisitaCreateOrConnectWithoutRuta_clienteInput[]
    createMany?: VisitaCreateManyRuta_clienteInputEnvelope
    connect?: VisitaWhereUniqueInput | VisitaWhereUniqueInput[]
  }

  export type RutaUpdateOneRequiredWithoutRutas_clientesNestedInput = {
    create?: XOR<RutaCreateWithoutRutas_clientesInput, RutaUncheckedCreateWithoutRutas_clientesInput>
    connectOrCreate?: RutaCreateOrConnectWithoutRutas_clientesInput
    upsert?: RutaUpsertWithoutRutas_clientesInput
    connect?: RutaWhereUniqueInput
    update?: XOR<XOR<RutaUpdateToOneWithWhereWithoutRutas_clientesInput, RutaUpdateWithoutRutas_clientesInput>, RutaUncheckedUpdateWithoutRutas_clientesInput>
  }

  export type ClienteUpdateOneRequiredWithoutRutas_clientesNestedInput = {
    create?: XOR<ClienteCreateWithoutRutas_clientesInput, ClienteUncheckedCreateWithoutRutas_clientesInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutRutas_clientesInput
    upsert?: ClienteUpsertWithoutRutas_clientesInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutRutas_clientesInput, ClienteUpdateWithoutRutas_clientesInput>, ClienteUncheckedUpdateWithoutRutas_clientesInput>
  }

  export type VisitaUpdateManyWithoutRuta_clienteNestedInput = {
    create?: XOR<VisitaCreateWithoutRuta_clienteInput, VisitaUncheckedCreateWithoutRuta_clienteInput> | VisitaCreateWithoutRuta_clienteInput[] | VisitaUncheckedCreateWithoutRuta_clienteInput[]
    connectOrCreate?: VisitaCreateOrConnectWithoutRuta_clienteInput | VisitaCreateOrConnectWithoutRuta_clienteInput[]
    upsert?: VisitaUpsertWithWhereUniqueWithoutRuta_clienteInput | VisitaUpsertWithWhereUniqueWithoutRuta_clienteInput[]
    createMany?: VisitaCreateManyRuta_clienteInputEnvelope
    set?: VisitaWhereUniqueInput | VisitaWhereUniqueInput[]
    disconnect?: VisitaWhereUniqueInput | VisitaWhereUniqueInput[]
    delete?: VisitaWhereUniqueInput | VisitaWhereUniqueInput[]
    connect?: VisitaWhereUniqueInput | VisitaWhereUniqueInput[]
    update?: VisitaUpdateWithWhereUniqueWithoutRuta_clienteInput | VisitaUpdateWithWhereUniqueWithoutRuta_clienteInput[]
    updateMany?: VisitaUpdateManyWithWhereWithoutRuta_clienteInput | VisitaUpdateManyWithWhereWithoutRuta_clienteInput[]
    deleteMany?: VisitaScalarWhereInput | VisitaScalarWhereInput[]
  }

  export type VisitaUncheckedUpdateManyWithoutRuta_clienteNestedInput = {
    create?: XOR<VisitaCreateWithoutRuta_clienteInput, VisitaUncheckedCreateWithoutRuta_clienteInput> | VisitaCreateWithoutRuta_clienteInput[] | VisitaUncheckedCreateWithoutRuta_clienteInput[]
    connectOrCreate?: VisitaCreateOrConnectWithoutRuta_clienteInput | VisitaCreateOrConnectWithoutRuta_clienteInput[]
    upsert?: VisitaUpsertWithWhereUniqueWithoutRuta_clienteInput | VisitaUpsertWithWhereUniqueWithoutRuta_clienteInput[]
    createMany?: VisitaCreateManyRuta_clienteInputEnvelope
    set?: VisitaWhereUniqueInput | VisitaWhereUniqueInput[]
    disconnect?: VisitaWhereUniqueInput | VisitaWhereUniqueInput[]
    delete?: VisitaWhereUniqueInput | VisitaWhereUniqueInput[]
    connect?: VisitaWhereUniqueInput | VisitaWhereUniqueInput[]
    update?: VisitaUpdateWithWhereUniqueWithoutRuta_clienteInput | VisitaUpdateWithWhereUniqueWithoutRuta_clienteInput[]
    updateMany?: VisitaUpdateManyWithWhereWithoutRuta_clienteInput | VisitaUpdateManyWithWhereWithoutRuta_clienteInput[]
    deleteMany?: VisitaScalarWhereInput | VisitaScalarWhereInput[]
  }

  export type RutaClienteCreateNestedOneWithoutVisitasInput = {
    create?: XOR<RutaClienteCreateWithoutVisitasInput, RutaClienteUncheckedCreateWithoutVisitasInput>
    connectOrCreate?: RutaClienteCreateOrConnectWithoutVisitasInput
    connect?: RutaClienteWhereUniqueInput
  }

  export type ClienteCreateNestedOneWithoutVisitasInput = {
    create?: XOR<ClienteCreateWithoutVisitasInput, ClienteUncheckedCreateWithoutVisitasInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutVisitasInput
    connect?: ClienteWhereUniqueInput
  }

  export type AsesorCreateNestedOneWithoutVisitasInput = {
    create?: XOR<AsesorCreateWithoutVisitasInput, AsesorUncheckedCreateWithoutVisitasInput>
    connectOrCreate?: AsesorCreateOrConnectWithoutVisitasInput
    connect?: AsesorWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type RutaClienteUpdateOneWithoutVisitasNestedInput = {
    create?: XOR<RutaClienteCreateWithoutVisitasInput, RutaClienteUncheckedCreateWithoutVisitasInput>
    connectOrCreate?: RutaClienteCreateOrConnectWithoutVisitasInput
    upsert?: RutaClienteUpsertWithoutVisitasInput
    disconnect?: RutaClienteWhereInput | boolean
    delete?: RutaClienteWhereInput | boolean
    connect?: RutaClienteWhereUniqueInput
    update?: XOR<XOR<RutaClienteUpdateToOneWithWhereWithoutVisitasInput, RutaClienteUpdateWithoutVisitasInput>, RutaClienteUncheckedUpdateWithoutVisitasInput>
  }

  export type ClienteUpdateOneRequiredWithoutVisitasNestedInput = {
    create?: XOR<ClienteCreateWithoutVisitasInput, ClienteUncheckedCreateWithoutVisitasInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutVisitasInput
    upsert?: ClienteUpsertWithoutVisitasInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutVisitasInput, ClienteUpdateWithoutVisitasInput>, ClienteUncheckedUpdateWithoutVisitasInput>
  }

  export type AsesorUpdateOneRequiredWithoutVisitasNestedInput = {
    create?: XOR<AsesorCreateWithoutVisitasInput, AsesorUncheckedCreateWithoutVisitasInput>
    connectOrCreate?: AsesorCreateOrConnectWithoutVisitasInput
    upsert?: AsesorUpsertWithoutVisitasInput
    connect?: AsesorWhereUniqueInput
    update?: XOR<XOR<AsesorUpdateToOneWithWhereWithoutVisitasInput, AsesorUpdateWithoutVisitasInput>, AsesorUncheckedUpdateWithoutVisitasInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AsesorCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<AsesorCreateWithoutUsuarioInput, AsesorUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: AsesorCreateOrConnectWithoutUsuarioInput
    connect?: AsesorWhereUniqueInput
  }

  export type AsesorUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<AsesorCreateWithoutUsuarioInput, AsesorUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: AsesorCreateOrConnectWithoutUsuarioInput
    upsert?: AsesorUpsertWithoutUsuarioInput
    disconnect?: AsesorWhereInput | boolean
    delete?: AsesorWhereInput | boolean
    connect?: AsesorWhereUniqueInput
    update?: XOR<XOR<AsesorUpdateToOneWithWhereWithoutUsuarioInput, AsesorUpdateWithoutUsuarioInput>, AsesorUncheckedUpdateWithoutUsuarioInput>
  }

  export type HistorialCalidadCreateNestedManyWithoutRegistroInput = {
    create?: XOR<HistorialCalidadCreateWithoutRegistroInput, HistorialCalidadUncheckedCreateWithoutRegistroInput> | HistorialCalidadCreateWithoutRegistroInput[] | HistorialCalidadUncheckedCreateWithoutRegistroInput[]
    connectOrCreate?: HistorialCalidadCreateOrConnectWithoutRegistroInput | HistorialCalidadCreateOrConnectWithoutRegistroInput[]
    createMany?: HistorialCalidadCreateManyRegistroInputEnvelope
    connect?: HistorialCalidadWhereUniqueInput | HistorialCalidadWhereUniqueInput[]
  }

  export type HistorialCalidadUncheckedCreateNestedManyWithoutRegistroInput = {
    create?: XOR<HistorialCalidadCreateWithoutRegistroInput, HistorialCalidadUncheckedCreateWithoutRegistroInput> | HistorialCalidadCreateWithoutRegistroInput[] | HistorialCalidadUncheckedCreateWithoutRegistroInput[]
    connectOrCreate?: HistorialCalidadCreateOrConnectWithoutRegistroInput | HistorialCalidadCreateOrConnectWithoutRegistroInput[]
    createMany?: HistorialCalidadCreateManyRegistroInputEnvelope
    connect?: HistorialCalidadWhereUniqueInput | HistorialCalidadWhereUniqueInput[]
  }

  export type HistorialCalidadUpdateManyWithoutRegistroNestedInput = {
    create?: XOR<HistorialCalidadCreateWithoutRegistroInput, HistorialCalidadUncheckedCreateWithoutRegistroInput> | HistorialCalidadCreateWithoutRegistroInput[] | HistorialCalidadUncheckedCreateWithoutRegistroInput[]
    connectOrCreate?: HistorialCalidadCreateOrConnectWithoutRegistroInput | HistorialCalidadCreateOrConnectWithoutRegistroInput[]
    upsert?: HistorialCalidadUpsertWithWhereUniqueWithoutRegistroInput | HistorialCalidadUpsertWithWhereUniqueWithoutRegistroInput[]
    createMany?: HistorialCalidadCreateManyRegistroInputEnvelope
    set?: HistorialCalidadWhereUniqueInput | HistorialCalidadWhereUniqueInput[]
    disconnect?: HistorialCalidadWhereUniqueInput | HistorialCalidadWhereUniqueInput[]
    delete?: HistorialCalidadWhereUniqueInput | HistorialCalidadWhereUniqueInput[]
    connect?: HistorialCalidadWhereUniqueInput | HistorialCalidadWhereUniqueInput[]
    update?: HistorialCalidadUpdateWithWhereUniqueWithoutRegistroInput | HistorialCalidadUpdateWithWhereUniqueWithoutRegistroInput[]
    updateMany?: HistorialCalidadUpdateManyWithWhereWithoutRegistroInput | HistorialCalidadUpdateManyWithWhereWithoutRegistroInput[]
    deleteMany?: HistorialCalidadScalarWhereInput | HistorialCalidadScalarWhereInput[]
  }

  export type HistorialCalidadUncheckedUpdateManyWithoutRegistroNestedInput = {
    create?: XOR<HistorialCalidadCreateWithoutRegistroInput, HistorialCalidadUncheckedCreateWithoutRegistroInput> | HistorialCalidadCreateWithoutRegistroInput[] | HistorialCalidadUncheckedCreateWithoutRegistroInput[]
    connectOrCreate?: HistorialCalidadCreateOrConnectWithoutRegistroInput | HistorialCalidadCreateOrConnectWithoutRegistroInput[]
    upsert?: HistorialCalidadUpsertWithWhereUniqueWithoutRegistroInput | HistorialCalidadUpsertWithWhereUniqueWithoutRegistroInput[]
    createMany?: HistorialCalidadCreateManyRegistroInputEnvelope
    set?: HistorialCalidadWhereUniqueInput | HistorialCalidadWhereUniqueInput[]
    disconnect?: HistorialCalidadWhereUniqueInput | HistorialCalidadWhereUniqueInput[]
    delete?: HistorialCalidadWhereUniqueInput | HistorialCalidadWhereUniqueInput[]
    connect?: HistorialCalidadWhereUniqueInput | HistorialCalidadWhereUniqueInput[]
    update?: HistorialCalidadUpdateWithWhereUniqueWithoutRegistroInput | HistorialCalidadUpdateWithWhereUniqueWithoutRegistroInput[]
    updateMany?: HistorialCalidadUpdateManyWithWhereWithoutRegistroInput | HistorialCalidadUpdateManyWithWhereWithoutRegistroInput[]
    deleteMany?: HistorialCalidadScalarWhereInput | HistorialCalidadScalarWhereInput[]
  }

  export type RegistroCalidadCreateNestedOneWithoutHistorialInput = {
    create?: XOR<RegistroCalidadCreateWithoutHistorialInput, RegistroCalidadUncheckedCreateWithoutHistorialInput>
    connectOrCreate?: RegistroCalidadCreateOrConnectWithoutHistorialInput
    connect?: RegistroCalidadWhereUniqueInput
  }

  export type RegistroCalidadUpdateOneRequiredWithoutHistorialNestedInput = {
    create?: XOR<RegistroCalidadCreateWithoutHistorialInput, RegistroCalidadUncheckedCreateWithoutHistorialInput>
    connectOrCreate?: RegistroCalidadCreateOrConnectWithoutHistorialInput
    upsert?: RegistroCalidadUpsertWithoutHistorialInput
    connect?: RegistroCalidadWhereUniqueInput
    update?: XOR<XOR<RegistroCalidadUpdateToOneWithWhereWithoutHistorialInput, RegistroCalidadUpdateWithoutHistorialInput>, RegistroCalidadUncheckedUpdateWithoutHistorialInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumTipoDocumentoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoDocumento | EnumTipoDocumentoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoDocumento[] | ListEnumTipoDocumentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoDocumento[] | ListEnumTipoDocumentoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoDocumentoFilter<$PrismaModel> | $Enums.TipoDocumento
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumTipoDocumentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoDocumento | EnumTipoDocumentoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoDocumento[] | ListEnumTipoDocumentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoDocumento[] | ListEnumTipoDocumentoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoDocumentoWithAggregatesFilter<$PrismaModel> | $Enums.TipoDocumento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoDocumentoFilter<$PrismaModel>
    _max?: NestedEnumTipoDocumentoFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AdmisionCreateWithoutClienteInput = {
    producto?: string | null
    linea_credito?: Decimal | DecimalJsLike | number | string | null
    estado?: string
    fecha?: Date | string | null
  }

  export type AdmisionUncheckedCreateWithoutClienteInput = {
    id_admision?: number
    producto?: string | null
    linea_credito?: Decimal | DecimalJsLike | number | string | null
    estado?: string
    fecha?: Date | string | null
  }

  export type AdmisionCreateOrConnectWithoutClienteInput = {
    where: AdmisionWhereUniqueInput
    create: XOR<AdmisionCreateWithoutClienteInput, AdmisionUncheckedCreateWithoutClienteInput>
  }

  export type AdmisionCreateManyClienteInputEnvelope = {
    data: AdmisionCreateManyClienteInput | AdmisionCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type AsignacionClienteCreateWithoutClienteInput = {
    fecha_asignacion?: Date | string
    fecha_fin?: Date | string | null
    estado?: string
    asesor: AsesorCreateNestedOneWithoutAsignacionesInput
  }

  export type AsignacionClienteUncheckedCreateWithoutClienteInput = {
    id_asignacion?: number
    id_asesor: number
    fecha_asignacion?: Date | string
    fecha_fin?: Date | string | null
    estado?: string
  }

  export type AsignacionClienteCreateOrConnectWithoutClienteInput = {
    where: AsignacionClienteWhereUniqueInput
    create: XOR<AsignacionClienteCreateWithoutClienteInput, AsignacionClienteUncheckedCreateWithoutClienteInput>
  }

  export type AsignacionClienteCreateManyClienteInputEnvelope = {
    data: AsignacionClienteCreateManyClienteInput | AsignacionClienteCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type RutaClienteCreateWithoutClienteInput = {
    secuencia?: number
    estado_visita?: string
    prioridad?: string
    fecha_creacion?: Date | string
    fecha_actualizar?: Date | string
    ruta: RutaCreateNestedOneWithoutRutas_clientesInput
    visitas?: VisitaCreateNestedManyWithoutRuta_clienteInput
  }

  export type RutaClienteUncheckedCreateWithoutClienteInput = {
    id_ruta_cliente?: number
    id_ruta: number
    secuencia?: number
    estado_visita?: string
    prioridad?: string
    fecha_creacion?: Date | string
    fecha_actualizar?: Date | string
    visitas?: VisitaUncheckedCreateNestedManyWithoutRuta_clienteInput
  }

  export type RutaClienteCreateOrConnectWithoutClienteInput = {
    where: RutaClienteWhereUniqueInput
    create: XOR<RutaClienteCreateWithoutClienteInput, RutaClienteUncheckedCreateWithoutClienteInput>
  }

  export type RutaClienteCreateManyClienteInputEnvelope = {
    data: RutaClienteCreateManyClienteInput | RutaClienteCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type VisitaCreateWithoutClienteInput = {
    client_sync_id?: string | null
    tipo_visita?: string
    fecha_hora_checkin: Date | string
    fecha_hora_checkout?: Date | string | null
    latitud: Decimal | DecimalJsLike | number | string
    longitud: Decimal | DecimalJsLike | number | string
    resultado: string
    es_efectiva?: boolean
    monto_recaudado?: Decimal | DecimalJsLike | number | string | null
    fecha_promesa?: Date | string | null
    observaciones?: string | null
    foto_url?: string | null
    foto_adicional_url?: string | null
    video_url?: string | null
    foto_evidencia?: string | null
    firma_evidencia?: string | null
    fecha_creacion?: Date | string
    fecha_actualizar?: Date | string
    ruta_cliente?: RutaClienteCreateNestedOneWithoutVisitasInput
    asesor: AsesorCreateNestedOneWithoutVisitasInput
  }

  export type VisitaUncheckedCreateWithoutClienteInput = {
    id_visita?: number
    client_sync_id?: string | null
    id_ruta_cliente?: number | null
    id_asesor: number
    tipo_visita?: string
    fecha_hora_checkin: Date | string
    fecha_hora_checkout?: Date | string | null
    latitud: Decimal | DecimalJsLike | number | string
    longitud: Decimal | DecimalJsLike | number | string
    resultado: string
    es_efectiva?: boolean
    monto_recaudado?: Decimal | DecimalJsLike | number | string | null
    fecha_promesa?: Date | string | null
    observaciones?: string | null
    foto_url?: string | null
    foto_adicional_url?: string | null
    video_url?: string | null
    foto_evidencia?: string | null
    firma_evidencia?: string | null
    fecha_creacion?: Date | string
    fecha_actualizar?: Date | string
  }

  export type VisitaCreateOrConnectWithoutClienteInput = {
    where: VisitaWhereUniqueInput
    create: XOR<VisitaCreateWithoutClienteInput, VisitaUncheckedCreateWithoutClienteInput>
  }

  export type VisitaCreateManyClienteInputEnvelope = {
    data: VisitaCreateManyClienteInput | VisitaCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type AdmisionUpsertWithWhereUniqueWithoutClienteInput = {
    where: AdmisionWhereUniqueInput
    update: XOR<AdmisionUpdateWithoutClienteInput, AdmisionUncheckedUpdateWithoutClienteInput>
    create: XOR<AdmisionCreateWithoutClienteInput, AdmisionUncheckedCreateWithoutClienteInput>
  }

  export type AdmisionUpdateWithWhereUniqueWithoutClienteInput = {
    where: AdmisionWhereUniqueInput
    data: XOR<AdmisionUpdateWithoutClienteInput, AdmisionUncheckedUpdateWithoutClienteInput>
  }

  export type AdmisionUpdateManyWithWhereWithoutClienteInput = {
    where: AdmisionScalarWhereInput
    data: XOR<AdmisionUpdateManyMutationInput, AdmisionUncheckedUpdateManyWithoutClienteInput>
  }

  export type AdmisionScalarWhereInput = {
    AND?: AdmisionScalarWhereInput | AdmisionScalarWhereInput[]
    OR?: AdmisionScalarWhereInput[]
    NOT?: AdmisionScalarWhereInput | AdmisionScalarWhereInput[]
    id_admision?: IntFilter<"Admision"> | number
    id_cliente?: IntFilter<"Admision"> | number
    producto?: StringNullableFilter<"Admision"> | string | null
    linea_credito?: DecimalNullableFilter<"Admision"> | Decimal | DecimalJsLike | number | string | null
    estado?: StringFilter<"Admision"> | string
    fecha?: DateTimeNullableFilter<"Admision"> | Date | string | null
  }

  export type AsignacionClienteUpsertWithWhereUniqueWithoutClienteInput = {
    where: AsignacionClienteWhereUniqueInput
    update: XOR<AsignacionClienteUpdateWithoutClienteInput, AsignacionClienteUncheckedUpdateWithoutClienteInput>
    create: XOR<AsignacionClienteCreateWithoutClienteInput, AsignacionClienteUncheckedCreateWithoutClienteInput>
  }

  export type AsignacionClienteUpdateWithWhereUniqueWithoutClienteInput = {
    where: AsignacionClienteWhereUniqueInput
    data: XOR<AsignacionClienteUpdateWithoutClienteInput, AsignacionClienteUncheckedUpdateWithoutClienteInput>
  }

  export type AsignacionClienteUpdateManyWithWhereWithoutClienteInput = {
    where: AsignacionClienteScalarWhereInput
    data: XOR<AsignacionClienteUpdateManyMutationInput, AsignacionClienteUncheckedUpdateManyWithoutClienteInput>
  }

  export type AsignacionClienteScalarWhereInput = {
    AND?: AsignacionClienteScalarWhereInput | AsignacionClienteScalarWhereInput[]
    OR?: AsignacionClienteScalarWhereInput[]
    NOT?: AsignacionClienteScalarWhereInput | AsignacionClienteScalarWhereInput[]
    id_asignacion?: IntFilter<"AsignacionCliente"> | number
    id_cliente?: IntFilter<"AsignacionCliente"> | number
    id_asesor?: IntFilter<"AsignacionCliente"> | number
    fecha_asignacion?: DateTimeFilter<"AsignacionCliente"> | Date | string
    fecha_fin?: DateTimeNullableFilter<"AsignacionCliente"> | Date | string | null
    estado?: StringFilter<"AsignacionCliente"> | string
  }

  export type RutaClienteUpsertWithWhereUniqueWithoutClienteInput = {
    where: RutaClienteWhereUniqueInput
    update: XOR<RutaClienteUpdateWithoutClienteInput, RutaClienteUncheckedUpdateWithoutClienteInput>
    create: XOR<RutaClienteCreateWithoutClienteInput, RutaClienteUncheckedCreateWithoutClienteInput>
  }

  export type RutaClienteUpdateWithWhereUniqueWithoutClienteInput = {
    where: RutaClienteWhereUniqueInput
    data: XOR<RutaClienteUpdateWithoutClienteInput, RutaClienteUncheckedUpdateWithoutClienteInput>
  }

  export type RutaClienteUpdateManyWithWhereWithoutClienteInput = {
    where: RutaClienteScalarWhereInput
    data: XOR<RutaClienteUpdateManyMutationInput, RutaClienteUncheckedUpdateManyWithoutClienteInput>
  }

  export type RutaClienteScalarWhereInput = {
    AND?: RutaClienteScalarWhereInput | RutaClienteScalarWhereInput[]
    OR?: RutaClienteScalarWhereInput[]
    NOT?: RutaClienteScalarWhereInput | RutaClienteScalarWhereInput[]
    id_ruta_cliente?: IntFilter<"RutaCliente"> | number
    id_ruta?: IntFilter<"RutaCliente"> | number
    id_cliente?: IntFilter<"RutaCliente"> | number
    secuencia?: IntFilter<"RutaCliente"> | number
    estado_visita?: StringFilter<"RutaCliente"> | string
    prioridad?: StringFilter<"RutaCliente"> | string
    fecha_creacion?: DateTimeFilter<"RutaCliente"> | Date | string
    fecha_actualizar?: DateTimeFilter<"RutaCliente"> | Date | string
  }

  export type VisitaUpsertWithWhereUniqueWithoutClienteInput = {
    where: VisitaWhereUniqueInput
    update: XOR<VisitaUpdateWithoutClienteInput, VisitaUncheckedUpdateWithoutClienteInput>
    create: XOR<VisitaCreateWithoutClienteInput, VisitaUncheckedCreateWithoutClienteInput>
  }

  export type VisitaUpdateWithWhereUniqueWithoutClienteInput = {
    where: VisitaWhereUniqueInput
    data: XOR<VisitaUpdateWithoutClienteInput, VisitaUncheckedUpdateWithoutClienteInput>
  }

  export type VisitaUpdateManyWithWhereWithoutClienteInput = {
    where: VisitaScalarWhereInput
    data: XOR<VisitaUpdateManyMutationInput, VisitaUncheckedUpdateManyWithoutClienteInput>
  }

  export type VisitaScalarWhereInput = {
    AND?: VisitaScalarWhereInput | VisitaScalarWhereInput[]
    OR?: VisitaScalarWhereInput[]
    NOT?: VisitaScalarWhereInput | VisitaScalarWhereInput[]
    id_visita?: IntFilter<"Visita"> | number
    client_sync_id?: StringNullableFilter<"Visita"> | string | null
    id_ruta_cliente?: IntNullableFilter<"Visita"> | number | null
    id_cliente?: IntFilter<"Visita"> | number
    id_asesor?: IntFilter<"Visita"> | number
    tipo_visita?: StringFilter<"Visita"> | string
    fecha_hora_checkin?: DateTimeFilter<"Visita"> | Date | string
    fecha_hora_checkout?: DateTimeNullableFilter<"Visita"> | Date | string | null
    latitud?: DecimalFilter<"Visita"> | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFilter<"Visita"> | Decimal | DecimalJsLike | number | string
    resultado?: StringFilter<"Visita"> | string
    es_efectiva?: BoolFilter<"Visita"> | boolean
    monto_recaudado?: DecimalNullableFilter<"Visita"> | Decimal | DecimalJsLike | number | string | null
    fecha_promesa?: DateTimeNullableFilter<"Visita"> | Date | string | null
    observaciones?: StringNullableFilter<"Visita"> | string | null
    foto_url?: StringNullableFilter<"Visita"> | string | null
    foto_adicional_url?: StringNullableFilter<"Visita"> | string | null
    video_url?: StringNullableFilter<"Visita"> | string | null
    foto_evidencia?: StringNullableFilter<"Visita"> | string | null
    firma_evidencia?: StringNullableFilter<"Visita"> | string | null
    fecha_creacion?: DateTimeFilter<"Visita"> | Date | string
    fecha_actualizar?: DateTimeFilter<"Visita"> | Date | string
  }

  export type ClienteCreateWithoutAdmisionesInput = {
    tipo_documento?: $Enums.TipoDocumento
    numero_documento: string
    telefono?: string | null
    nombres: string
    apellido_paterno: string
    apellido_materno: string
    direccion?: string | null
    distrito?: string | null
    deuda_castigada?: Decimal | DecimalJsLike | number | string
    deuda_vigente?: Decimal | DecimalJsLike | number | string
    otras_deudas?: Decimal | DecimalJsLike | number | string
    estado?: string
    ultima_gestion?: Date | string | null
    latitud?: Decimal | DecimalJsLike | number | string | null
    longitud?: Decimal | DecimalJsLike | number | string | null
    asignaciones?: AsignacionClienteCreateNestedManyWithoutClienteInput
    rutas_clientes?: RutaClienteCreateNestedManyWithoutClienteInput
    visitas?: VisitaCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutAdmisionesInput = {
    id_cliente?: number
    tipo_documento?: $Enums.TipoDocumento
    numero_documento: string
    telefono?: string | null
    nombres: string
    apellido_paterno: string
    apellido_materno: string
    direccion?: string | null
    distrito?: string | null
    deuda_castigada?: Decimal | DecimalJsLike | number | string
    deuda_vigente?: Decimal | DecimalJsLike | number | string
    otras_deudas?: Decimal | DecimalJsLike | number | string
    estado?: string
    ultima_gestion?: Date | string | null
    latitud?: Decimal | DecimalJsLike | number | string | null
    longitud?: Decimal | DecimalJsLike | number | string | null
    asignaciones?: AsignacionClienteUncheckedCreateNestedManyWithoutClienteInput
    rutas_clientes?: RutaClienteUncheckedCreateNestedManyWithoutClienteInput
    visitas?: VisitaUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutAdmisionesInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutAdmisionesInput, ClienteUncheckedCreateWithoutAdmisionesInput>
  }

  export type ClienteUpsertWithoutAdmisionesInput = {
    update: XOR<ClienteUpdateWithoutAdmisionesInput, ClienteUncheckedUpdateWithoutAdmisionesInput>
    create: XOR<ClienteCreateWithoutAdmisionesInput, ClienteUncheckedCreateWithoutAdmisionesInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutAdmisionesInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutAdmisionesInput, ClienteUncheckedUpdateWithoutAdmisionesInput>
  }

  export type ClienteUpdateWithoutAdmisionesInput = {
    tipo_documento?: EnumTipoDocumentoFieldUpdateOperationsInput | $Enums.TipoDocumento
    numero_documento?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    nombres?: StringFieldUpdateOperationsInput | string
    apellido_paterno?: StringFieldUpdateOperationsInput | string
    apellido_materno?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    distrito?: NullableStringFieldUpdateOperationsInput | string | null
    deuda_castigada?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deuda_vigente?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    otras_deudas?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: StringFieldUpdateOperationsInput | string
    ultima_gestion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    asignaciones?: AsignacionClienteUpdateManyWithoutClienteNestedInput
    rutas_clientes?: RutaClienteUpdateManyWithoutClienteNestedInput
    visitas?: VisitaUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutAdmisionesInput = {
    id_cliente?: IntFieldUpdateOperationsInput | number
    tipo_documento?: EnumTipoDocumentoFieldUpdateOperationsInput | $Enums.TipoDocumento
    numero_documento?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    nombres?: StringFieldUpdateOperationsInput | string
    apellido_paterno?: StringFieldUpdateOperationsInput | string
    apellido_materno?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    distrito?: NullableStringFieldUpdateOperationsInput | string | null
    deuda_castigada?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deuda_vigente?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    otras_deudas?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: StringFieldUpdateOperationsInput | string
    ultima_gestion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    asignaciones?: AsignacionClienteUncheckedUpdateManyWithoutClienteNestedInput
    rutas_clientes?: RutaClienteUncheckedUpdateManyWithoutClienteNestedInput
    visitas?: VisitaUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type AsignacionClienteCreateWithoutAsesorInput = {
    fecha_asignacion?: Date | string
    fecha_fin?: Date | string | null
    estado?: string
    cliente: ClienteCreateNestedOneWithoutAsignacionesInput
  }

  export type AsignacionClienteUncheckedCreateWithoutAsesorInput = {
    id_asignacion?: number
    id_cliente: number
    fecha_asignacion?: Date | string
    fecha_fin?: Date | string | null
    estado?: string
  }

  export type AsignacionClienteCreateOrConnectWithoutAsesorInput = {
    where: AsignacionClienteWhereUniqueInput
    create: XOR<AsignacionClienteCreateWithoutAsesorInput, AsignacionClienteUncheckedCreateWithoutAsesorInput>
  }

  export type AsignacionClienteCreateManyAsesorInputEnvelope = {
    data: AsignacionClienteCreateManyAsesorInput | AsignacionClienteCreateManyAsesorInput[]
    skipDuplicates?: boolean
  }

  export type RutaCreateWithoutAsesorInput = {
    fecha_programada: Date | string
    fecha_inicio_real?: Date | string | null
    fecha_fin_real?: Date | string | null
    estado?: string
    fecha_creacion?: Date | string
    fecha_actualizar?: Date | string
    rutas_clientes?: RutaClienteCreateNestedManyWithoutRutaInput
  }

  export type RutaUncheckedCreateWithoutAsesorInput = {
    id_ruta?: number
    fecha_programada: Date | string
    fecha_inicio_real?: Date | string | null
    fecha_fin_real?: Date | string | null
    estado?: string
    fecha_creacion?: Date | string
    fecha_actualizar?: Date | string
    rutas_clientes?: RutaClienteUncheckedCreateNestedManyWithoutRutaInput
  }

  export type RutaCreateOrConnectWithoutAsesorInput = {
    where: RutaWhereUniqueInput
    create: XOR<RutaCreateWithoutAsesorInput, RutaUncheckedCreateWithoutAsesorInput>
  }

  export type RutaCreateManyAsesorInputEnvelope = {
    data: RutaCreateManyAsesorInput | RutaCreateManyAsesorInput[]
    skipDuplicates?: boolean
  }

  export type VisitaCreateWithoutAsesorInput = {
    client_sync_id?: string | null
    tipo_visita?: string
    fecha_hora_checkin: Date | string
    fecha_hora_checkout?: Date | string | null
    latitud: Decimal | DecimalJsLike | number | string
    longitud: Decimal | DecimalJsLike | number | string
    resultado: string
    es_efectiva?: boolean
    monto_recaudado?: Decimal | DecimalJsLike | number | string | null
    fecha_promesa?: Date | string | null
    observaciones?: string | null
    foto_url?: string | null
    foto_adicional_url?: string | null
    video_url?: string | null
    foto_evidencia?: string | null
    firma_evidencia?: string | null
    fecha_creacion?: Date | string
    fecha_actualizar?: Date | string
    ruta_cliente?: RutaClienteCreateNestedOneWithoutVisitasInput
    cliente: ClienteCreateNestedOneWithoutVisitasInput
  }

  export type VisitaUncheckedCreateWithoutAsesorInput = {
    id_visita?: number
    client_sync_id?: string | null
    id_ruta_cliente?: number | null
    id_cliente: number
    tipo_visita?: string
    fecha_hora_checkin: Date | string
    fecha_hora_checkout?: Date | string | null
    latitud: Decimal | DecimalJsLike | number | string
    longitud: Decimal | DecimalJsLike | number | string
    resultado: string
    es_efectiva?: boolean
    monto_recaudado?: Decimal | DecimalJsLike | number | string | null
    fecha_promesa?: Date | string | null
    observaciones?: string | null
    foto_url?: string | null
    foto_adicional_url?: string | null
    video_url?: string | null
    foto_evidencia?: string | null
    firma_evidencia?: string | null
    fecha_creacion?: Date | string
    fecha_actualizar?: Date | string
  }

  export type VisitaCreateOrConnectWithoutAsesorInput = {
    where: VisitaWhereUniqueInput
    create: XOR<VisitaCreateWithoutAsesorInput, VisitaUncheckedCreateWithoutAsesorInput>
  }

  export type VisitaCreateManyAsesorInputEnvelope = {
    data: VisitaCreateManyAsesorInput | VisitaCreateManyAsesorInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioCreateWithoutAsesorInput = {
    id_usuario?: string
    username: string
    nombres?: string | null
    apellidos?: string | null
    email?: string | null
    sede?: string | null
    password_hash: string
    rol: string
    estado?: string
    fecha_creacion?: Date | string
    mfa_habilitado?: boolean
    mfa_requerido?: boolean
    mfa_exento?: boolean
    mfa_secreto?: string | null
    mfa_ultimo_uso?: Date | string | null
    token_version?: number
    intentos_fallidos?: number
    bloqueado_hasta?: Date | string | null
    ultimo_acceso?: Date | string | null
    password_cambio?: Date | string
  }

  export type UsuarioUncheckedCreateWithoutAsesorInput = {
    id_usuario?: string
    username: string
    nombres?: string | null
    apellidos?: string | null
    email?: string | null
    sede?: string | null
    password_hash: string
    rol: string
    estado?: string
    fecha_creacion?: Date | string
    mfa_habilitado?: boolean
    mfa_requerido?: boolean
    mfa_exento?: boolean
    mfa_secreto?: string | null
    mfa_ultimo_uso?: Date | string | null
    token_version?: number
    intentos_fallidos?: number
    bloqueado_hasta?: Date | string | null
    ultimo_acceso?: Date | string | null
    password_cambio?: Date | string
  }

  export type UsuarioCreateOrConnectWithoutAsesorInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutAsesorInput, UsuarioUncheckedCreateWithoutAsesorInput>
  }

  export type AsignacionClienteUpsertWithWhereUniqueWithoutAsesorInput = {
    where: AsignacionClienteWhereUniqueInput
    update: XOR<AsignacionClienteUpdateWithoutAsesorInput, AsignacionClienteUncheckedUpdateWithoutAsesorInput>
    create: XOR<AsignacionClienteCreateWithoutAsesorInput, AsignacionClienteUncheckedCreateWithoutAsesorInput>
  }

  export type AsignacionClienteUpdateWithWhereUniqueWithoutAsesorInput = {
    where: AsignacionClienteWhereUniqueInput
    data: XOR<AsignacionClienteUpdateWithoutAsesorInput, AsignacionClienteUncheckedUpdateWithoutAsesorInput>
  }

  export type AsignacionClienteUpdateManyWithWhereWithoutAsesorInput = {
    where: AsignacionClienteScalarWhereInput
    data: XOR<AsignacionClienteUpdateManyMutationInput, AsignacionClienteUncheckedUpdateManyWithoutAsesorInput>
  }

  export type RutaUpsertWithWhereUniqueWithoutAsesorInput = {
    where: RutaWhereUniqueInput
    update: XOR<RutaUpdateWithoutAsesorInput, RutaUncheckedUpdateWithoutAsesorInput>
    create: XOR<RutaCreateWithoutAsesorInput, RutaUncheckedCreateWithoutAsesorInput>
  }

  export type RutaUpdateWithWhereUniqueWithoutAsesorInput = {
    where: RutaWhereUniqueInput
    data: XOR<RutaUpdateWithoutAsesorInput, RutaUncheckedUpdateWithoutAsesorInput>
  }

  export type RutaUpdateManyWithWhereWithoutAsesorInput = {
    where: RutaScalarWhereInput
    data: XOR<RutaUpdateManyMutationInput, RutaUncheckedUpdateManyWithoutAsesorInput>
  }

  export type RutaScalarWhereInput = {
    AND?: RutaScalarWhereInput | RutaScalarWhereInput[]
    OR?: RutaScalarWhereInput[]
    NOT?: RutaScalarWhereInput | RutaScalarWhereInput[]
    id_ruta?: IntFilter<"Ruta"> | number
    id_asesor?: IntFilter<"Ruta"> | number
    fecha_programada?: DateTimeFilter<"Ruta"> | Date | string
    fecha_inicio_real?: DateTimeNullableFilter<"Ruta"> | Date | string | null
    fecha_fin_real?: DateTimeNullableFilter<"Ruta"> | Date | string | null
    estado?: StringFilter<"Ruta"> | string
    fecha_creacion?: DateTimeFilter<"Ruta"> | Date | string
    fecha_actualizar?: DateTimeFilter<"Ruta"> | Date | string
  }

  export type VisitaUpsertWithWhereUniqueWithoutAsesorInput = {
    where: VisitaWhereUniqueInput
    update: XOR<VisitaUpdateWithoutAsesorInput, VisitaUncheckedUpdateWithoutAsesorInput>
    create: XOR<VisitaCreateWithoutAsesorInput, VisitaUncheckedCreateWithoutAsesorInput>
  }

  export type VisitaUpdateWithWhereUniqueWithoutAsesorInput = {
    where: VisitaWhereUniqueInput
    data: XOR<VisitaUpdateWithoutAsesorInput, VisitaUncheckedUpdateWithoutAsesorInput>
  }

  export type VisitaUpdateManyWithWhereWithoutAsesorInput = {
    where: VisitaScalarWhereInput
    data: XOR<VisitaUpdateManyMutationInput, VisitaUncheckedUpdateManyWithoutAsesorInput>
  }

  export type UsuarioUpsertWithoutAsesorInput = {
    update: XOR<UsuarioUpdateWithoutAsesorInput, UsuarioUncheckedUpdateWithoutAsesorInput>
    create: XOR<UsuarioCreateWithoutAsesorInput, UsuarioUncheckedCreateWithoutAsesorInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutAsesorInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutAsesorInput, UsuarioUncheckedUpdateWithoutAsesorInput>
  }

  export type UsuarioUpdateWithoutAsesorInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    nombres?: NullableStringFieldUpdateOperationsInput | string | null
    apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    sede?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    mfa_habilitado?: BoolFieldUpdateOperationsInput | boolean
    mfa_requerido?: BoolFieldUpdateOperationsInput | boolean
    mfa_exento?: BoolFieldUpdateOperationsInput | boolean
    mfa_secreto?: NullableStringFieldUpdateOperationsInput | string | null
    mfa_ultimo_uso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token_version?: IntFieldUpdateOperationsInput | number
    intentos_fallidos?: IntFieldUpdateOperationsInput | number
    bloqueado_hasta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultimo_acceso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password_cambio?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateWithoutAsesorInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    nombres?: NullableStringFieldUpdateOperationsInput | string | null
    apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    sede?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    mfa_habilitado?: BoolFieldUpdateOperationsInput | boolean
    mfa_requerido?: BoolFieldUpdateOperationsInput | boolean
    mfa_exento?: BoolFieldUpdateOperationsInput | boolean
    mfa_secreto?: NullableStringFieldUpdateOperationsInput | string | null
    mfa_ultimo_uso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token_version?: IntFieldUpdateOperationsInput | number
    intentos_fallidos?: IntFieldUpdateOperationsInput | number
    bloqueado_hasta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultimo_acceso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password_cambio?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteCreateWithoutAsignacionesInput = {
    tipo_documento?: $Enums.TipoDocumento
    numero_documento: string
    telefono?: string | null
    nombres: string
    apellido_paterno: string
    apellido_materno: string
    direccion?: string | null
    distrito?: string | null
    deuda_castigada?: Decimal | DecimalJsLike | number | string
    deuda_vigente?: Decimal | DecimalJsLike | number | string
    otras_deudas?: Decimal | DecimalJsLike | number | string
    estado?: string
    ultima_gestion?: Date | string | null
    latitud?: Decimal | DecimalJsLike | number | string | null
    longitud?: Decimal | DecimalJsLike | number | string | null
    admisiones?: AdmisionCreateNestedManyWithoutClienteInput
    rutas_clientes?: RutaClienteCreateNestedManyWithoutClienteInput
    visitas?: VisitaCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutAsignacionesInput = {
    id_cliente?: number
    tipo_documento?: $Enums.TipoDocumento
    numero_documento: string
    telefono?: string | null
    nombres: string
    apellido_paterno: string
    apellido_materno: string
    direccion?: string | null
    distrito?: string | null
    deuda_castigada?: Decimal | DecimalJsLike | number | string
    deuda_vigente?: Decimal | DecimalJsLike | number | string
    otras_deudas?: Decimal | DecimalJsLike | number | string
    estado?: string
    ultima_gestion?: Date | string | null
    latitud?: Decimal | DecimalJsLike | number | string | null
    longitud?: Decimal | DecimalJsLike | number | string | null
    admisiones?: AdmisionUncheckedCreateNestedManyWithoutClienteInput
    rutas_clientes?: RutaClienteUncheckedCreateNestedManyWithoutClienteInput
    visitas?: VisitaUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutAsignacionesInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutAsignacionesInput, ClienteUncheckedCreateWithoutAsignacionesInput>
  }

  export type AsesorCreateWithoutAsignacionesInput = {
    dni: string
    nombres: string
    apellido_paterno: string
    apellido_materno: string
    telefono?: string | null
    correo?: string | null
    distrito?: string | null
    estado?: string
    latitud?: Decimal | DecimalJsLike | number | string | null
    longitud?: Decimal | DecimalJsLike | number | string | null
    fecha_creacion?: Date | string
    fecha_actualizar?: Date | string
    rutas?: RutaCreateNestedManyWithoutAsesorInput
    visitas?: VisitaCreateNestedManyWithoutAsesorInput
    usuario?: UsuarioCreateNestedOneWithoutAsesorInput
  }

  export type AsesorUncheckedCreateWithoutAsignacionesInput = {
    id_asesor?: number
    dni: string
    nombres: string
    apellido_paterno: string
    apellido_materno: string
    telefono?: string | null
    correo?: string | null
    distrito?: string | null
    estado?: string
    latitud?: Decimal | DecimalJsLike | number | string | null
    longitud?: Decimal | DecimalJsLike | number | string | null
    fecha_creacion?: Date | string
    fecha_actualizar?: Date | string
    rutas?: RutaUncheckedCreateNestedManyWithoutAsesorInput
    visitas?: VisitaUncheckedCreateNestedManyWithoutAsesorInput
    usuario?: UsuarioUncheckedCreateNestedOneWithoutAsesorInput
  }

  export type AsesorCreateOrConnectWithoutAsignacionesInput = {
    where: AsesorWhereUniqueInput
    create: XOR<AsesorCreateWithoutAsignacionesInput, AsesorUncheckedCreateWithoutAsignacionesInput>
  }

  export type ClienteUpsertWithoutAsignacionesInput = {
    update: XOR<ClienteUpdateWithoutAsignacionesInput, ClienteUncheckedUpdateWithoutAsignacionesInput>
    create: XOR<ClienteCreateWithoutAsignacionesInput, ClienteUncheckedCreateWithoutAsignacionesInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutAsignacionesInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutAsignacionesInput, ClienteUncheckedUpdateWithoutAsignacionesInput>
  }

  export type ClienteUpdateWithoutAsignacionesInput = {
    tipo_documento?: EnumTipoDocumentoFieldUpdateOperationsInput | $Enums.TipoDocumento
    numero_documento?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    nombres?: StringFieldUpdateOperationsInput | string
    apellido_paterno?: StringFieldUpdateOperationsInput | string
    apellido_materno?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    distrito?: NullableStringFieldUpdateOperationsInput | string | null
    deuda_castigada?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deuda_vigente?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    otras_deudas?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: StringFieldUpdateOperationsInput | string
    ultima_gestion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    admisiones?: AdmisionUpdateManyWithoutClienteNestedInput
    rutas_clientes?: RutaClienteUpdateManyWithoutClienteNestedInput
    visitas?: VisitaUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutAsignacionesInput = {
    id_cliente?: IntFieldUpdateOperationsInput | number
    tipo_documento?: EnumTipoDocumentoFieldUpdateOperationsInput | $Enums.TipoDocumento
    numero_documento?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    nombres?: StringFieldUpdateOperationsInput | string
    apellido_paterno?: StringFieldUpdateOperationsInput | string
    apellido_materno?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    distrito?: NullableStringFieldUpdateOperationsInput | string | null
    deuda_castigada?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deuda_vigente?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    otras_deudas?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: StringFieldUpdateOperationsInput | string
    ultima_gestion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    admisiones?: AdmisionUncheckedUpdateManyWithoutClienteNestedInput
    rutas_clientes?: RutaClienteUncheckedUpdateManyWithoutClienteNestedInput
    visitas?: VisitaUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type AsesorUpsertWithoutAsignacionesInput = {
    update: XOR<AsesorUpdateWithoutAsignacionesInput, AsesorUncheckedUpdateWithoutAsignacionesInput>
    create: XOR<AsesorCreateWithoutAsignacionesInput, AsesorUncheckedCreateWithoutAsignacionesInput>
    where?: AsesorWhereInput
  }

  export type AsesorUpdateToOneWithWhereWithoutAsignacionesInput = {
    where?: AsesorWhereInput
    data: XOR<AsesorUpdateWithoutAsignacionesInput, AsesorUncheckedUpdateWithoutAsignacionesInput>
  }

  export type AsesorUpdateWithoutAsignacionesInput = {
    dni?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellido_paterno?: StringFieldUpdateOperationsInput | string
    apellido_materno?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    distrito?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    latitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizar?: DateTimeFieldUpdateOperationsInput | Date | string
    rutas?: RutaUpdateManyWithoutAsesorNestedInput
    visitas?: VisitaUpdateManyWithoutAsesorNestedInput
    usuario?: UsuarioUpdateOneWithoutAsesorNestedInput
  }

  export type AsesorUncheckedUpdateWithoutAsignacionesInput = {
    id_asesor?: IntFieldUpdateOperationsInput | number
    dni?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellido_paterno?: StringFieldUpdateOperationsInput | string
    apellido_materno?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    distrito?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    latitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizar?: DateTimeFieldUpdateOperationsInput | Date | string
    rutas?: RutaUncheckedUpdateManyWithoutAsesorNestedInput
    visitas?: VisitaUncheckedUpdateManyWithoutAsesorNestedInput
    usuario?: UsuarioUncheckedUpdateOneWithoutAsesorNestedInput
  }

  export type AsesorCreateWithoutRutasInput = {
    dni: string
    nombres: string
    apellido_paterno: string
    apellido_materno: string
    telefono?: string | null
    correo?: string | null
    distrito?: string | null
    estado?: string
    latitud?: Decimal | DecimalJsLike | number | string | null
    longitud?: Decimal | DecimalJsLike | number | string | null
    fecha_creacion?: Date | string
    fecha_actualizar?: Date | string
    asignaciones?: AsignacionClienteCreateNestedManyWithoutAsesorInput
    visitas?: VisitaCreateNestedManyWithoutAsesorInput
    usuario?: UsuarioCreateNestedOneWithoutAsesorInput
  }

  export type AsesorUncheckedCreateWithoutRutasInput = {
    id_asesor?: number
    dni: string
    nombres: string
    apellido_paterno: string
    apellido_materno: string
    telefono?: string | null
    correo?: string | null
    distrito?: string | null
    estado?: string
    latitud?: Decimal | DecimalJsLike | number | string | null
    longitud?: Decimal | DecimalJsLike | number | string | null
    fecha_creacion?: Date | string
    fecha_actualizar?: Date | string
    asignaciones?: AsignacionClienteUncheckedCreateNestedManyWithoutAsesorInput
    visitas?: VisitaUncheckedCreateNestedManyWithoutAsesorInput
    usuario?: UsuarioUncheckedCreateNestedOneWithoutAsesorInput
  }

  export type AsesorCreateOrConnectWithoutRutasInput = {
    where: AsesorWhereUniqueInput
    create: XOR<AsesorCreateWithoutRutasInput, AsesorUncheckedCreateWithoutRutasInput>
  }

  export type RutaClienteCreateWithoutRutaInput = {
    secuencia?: number
    estado_visita?: string
    prioridad?: string
    fecha_creacion?: Date | string
    fecha_actualizar?: Date | string
    cliente: ClienteCreateNestedOneWithoutRutas_clientesInput
    visitas?: VisitaCreateNestedManyWithoutRuta_clienteInput
  }

  export type RutaClienteUncheckedCreateWithoutRutaInput = {
    id_ruta_cliente?: number
    id_cliente: number
    secuencia?: number
    estado_visita?: string
    prioridad?: string
    fecha_creacion?: Date | string
    fecha_actualizar?: Date | string
    visitas?: VisitaUncheckedCreateNestedManyWithoutRuta_clienteInput
  }

  export type RutaClienteCreateOrConnectWithoutRutaInput = {
    where: RutaClienteWhereUniqueInput
    create: XOR<RutaClienteCreateWithoutRutaInput, RutaClienteUncheckedCreateWithoutRutaInput>
  }

  export type RutaClienteCreateManyRutaInputEnvelope = {
    data: RutaClienteCreateManyRutaInput | RutaClienteCreateManyRutaInput[]
    skipDuplicates?: boolean
  }

  export type AsesorUpsertWithoutRutasInput = {
    update: XOR<AsesorUpdateWithoutRutasInput, AsesorUncheckedUpdateWithoutRutasInput>
    create: XOR<AsesorCreateWithoutRutasInput, AsesorUncheckedCreateWithoutRutasInput>
    where?: AsesorWhereInput
  }

  export type AsesorUpdateToOneWithWhereWithoutRutasInput = {
    where?: AsesorWhereInput
    data: XOR<AsesorUpdateWithoutRutasInput, AsesorUncheckedUpdateWithoutRutasInput>
  }

  export type AsesorUpdateWithoutRutasInput = {
    dni?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellido_paterno?: StringFieldUpdateOperationsInput | string
    apellido_materno?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    distrito?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    latitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizar?: DateTimeFieldUpdateOperationsInput | Date | string
    asignaciones?: AsignacionClienteUpdateManyWithoutAsesorNestedInput
    visitas?: VisitaUpdateManyWithoutAsesorNestedInput
    usuario?: UsuarioUpdateOneWithoutAsesorNestedInput
  }

  export type AsesorUncheckedUpdateWithoutRutasInput = {
    id_asesor?: IntFieldUpdateOperationsInput | number
    dni?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellido_paterno?: StringFieldUpdateOperationsInput | string
    apellido_materno?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    distrito?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    latitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizar?: DateTimeFieldUpdateOperationsInput | Date | string
    asignaciones?: AsignacionClienteUncheckedUpdateManyWithoutAsesorNestedInput
    visitas?: VisitaUncheckedUpdateManyWithoutAsesorNestedInput
    usuario?: UsuarioUncheckedUpdateOneWithoutAsesorNestedInput
  }

  export type RutaClienteUpsertWithWhereUniqueWithoutRutaInput = {
    where: RutaClienteWhereUniqueInput
    update: XOR<RutaClienteUpdateWithoutRutaInput, RutaClienteUncheckedUpdateWithoutRutaInput>
    create: XOR<RutaClienteCreateWithoutRutaInput, RutaClienteUncheckedCreateWithoutRutaInput>
  }

  export type RutaClienteUpdateWithWhereUniqueWithoutRutaInput = {
    where: RutaClienteWhereUniqueInput
    data: XOR<RutaClienteUpdateWithoutRutaInput, RutaClienteUncheckedUpdateWithoutRutaInput>
  }

  export type RutaClienteUpdateManyWithWhereWithoutRutaInput = {
    where: RutaClienteScalarWhereInput
    data: XOR<RutaClienteUpdateManyMutationInput, RutaClienteUncheckedUpdateManyWithoutRutaInput>
  }

  export type RutaCreateWithoutRutas_clientesInput = {
    fecha_programada: Date | string
    fecha_inicio_real?: Date | string | null
    fecha_fin_real?: Date | string | null
    estado?: string
    fecha_creacion?: Date | string
    fecha_actualizar?: Date | string
    asesor: AsesorCreateNestedOneWithoutRutasInput
  }

  export type RutaUncheckedCreateWithoutRutas_clientesInput = {
    id_ruta?: number
    id_asesor: number
    fecha_programada: Date | string
    fecha_inicio_real?: Date | string | null
    fecha_fin_real?: Date | string | null
    estado?: string
    fecha_creacion?: Date | string
    fecha_actualizar?: Date | string
  }

  export type RutaCreateOrConnectWithoutRutas_clientesInput = {
    where: RutaWhereUniqueInput
    create: XOR<RutaCreateWithoutRutas_clientesInput, RutaUncheckedCreateWithoutRutas_clientesInput>
  }

  export type ClienteCreateWithoutRutas_clientesInput = {
    tipo_documento?: $Enums.TipoDocumento
    numero_documento: string
    telefono?: string | null
    nombres: string
    apellido_paterno: string
    apellido_materno: string
    direccion?: string | null
    distrito?: string | null
    deuda_castigada?: Decimal | DecimalJsLike | number | string
    deuda_vigente?: Decimal | DecimalJsLike | number | string
    otras_deudas?: Decimal | DecimalJsLike | number | string
    estado?: string
    ultima_gestion?: Date | string | null
    latitud?: Decimal | DecimalJsLike | number | string | null
    longitud?: Decimal | DecimalJsLike | number | string | null
    admisiones?: AdmisionCreateNestedManyWithoutClienteInput
    asignaciones?: AsignacionClienteCreateNestedManyWithoutClienteInput
    visitas?: VisitaCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutRutas_clientesInput = {
    id_cliente?: number
    tipo_documento?: $Enums.TipoDocumento
    numero_documento: string
    telefono?: string | null
    nombres: string
    apellido_paterno: string
    apellido_materno: string
    direccion?: string | null
    distrito?: string | null
    deuda_castigada?: Decimal | DecimalJsLike | number | string
    deuda_vigente?: Decimal | DecimalJsLike | number | string
    otras_deudas?: Decimal | DecimalJsLike | number | string
    estado?: string
    ultima_gestion?: Date | string | null
    latitud?: Decimal | DecimalJsLike | number | string | null
    longitud?: Decimal | DecimalJsLike | number | string | null
    admisiones?: AdmisionUncheckedCreateNestedManyWithoutClienteInput
    asignaciones?: AsignacionClienteUncheckedCreateNestedManyWithoutClienteInput
    visitas?: VisitaUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutRutas_clientesInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutRutas_clientesInput, ClienteUncheckedCreateWithoutRutas_clientesInput>
  }

  export type VisitaCreateWithoutRuta_clienteInput = {
    client_sync_id?: string | null
    tipo_visita?: string
    fecha_hora_checkin: Date | string
    fecha_hora_checkout?: Date | string | null
    latitud: Decimal | DecimalJsLike | number | string
    longitud: Decimal | DecimalJsLike | number | string
    resultado: string
    es_efectiva?: boolean
    monto_recaudado?: Decimal | DecimalJsLike | number | string | null
    fecha_promesa?: Date | string | null
    observaciones?: string | null
    foto_url?: string | null
    foto_adicional_url?: string | null
    video_url?: string | null
    foto_evidencia?: string | null
    firma_evidencia?: string | null
    fecha_creacion?: Date | string
    fecha_actualizar?: Date | string
    cliente: ClienteCreateNestedOneWithoutVisitasInput
    asesor: AsesorCreateNestedOneWithoutVisitasInput
  }

  export type VisitaUncheckedCreateWithoutRuta_clienteInput = {
    id_visita?: number
    client_sync_id?: string | null
    id_cliente: number
    id_asesor: number
    tipo_visita?: string
    fecha_hora_checkin: Date | string
    fecha_hora_checkout?: Date | string | null
    latitud: Decimal | DecimalJsLike | number | string
    longitud: Decimal | DecimalJsLike | number | string
    resultado: string
    es_efectiva?: boolean
    monto_recaudado?: Decimal | DecimalJsLike | number | string | null
    fecha_promesa?: Date | string | null
    observaciones?: string | null
    foto_url?: string | null
    foto_adicional_url?: string | null
    video_url?: string | null
    foto_evidencia?: string | null
    firma_evidencia?: string | null
    fecha_creacion?: Date | string
    fecha_actualizar?: Date | string
  }

  export type VisitaCreateOrConnectWithoutRuta_clienteInput = {
    where: VisitaWhereUniqueInput
    create: XOR<VisitaCreateWithoutRuta_clienteInput, VisitaUncheckedCreateWithoutRuta_clienteInput>
  }

  export type VisitaCreateManyRuta_clienteInputEnvelope = {
    data: VisitaCreateManyRuta_clienteInput | VisitaCreateManyRuta_clienteInput[]
    skipDuplicates?: boolean
  }

  export type RutaUpsertWithoutRutas_clientesInput = {
    update: XOR<RutaUpdateWithoutRutas_clientesInput, RutaUncheckedUpdateWithoutRutas_clientesInput>
    create: XOR<RutaCreateWithoutRutas_clientesInput, RutaUncheckedCreateWithoutRutas_clientesInput>
    where?: RutaWhereInput
  }

  export type RutaUpdateToOneWithWhereWithoutRutas_clientesInput = {
    where?: RutaWhereInput
    data: XOR<RutaUpdateWithoutRutas_clientesInput, RutaUncheckedUpdateWithoutRutas_clientesInput>
  }

  export type RutaUpdateWithoutRutas_clientesInput = {
    fecha_programada?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_inicio_real?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_fin_real?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizar?: DateTimeFieldUpdateOperationsInput | Date | string
    asesor?: AsesorUpdateOneRequiredWithoutRutasNestedInput
  }

  export type RutaUncheckedUpdateWithoutRutas_clientesInput = {
    id_ruta?: IntFieldUpdateOperationsInput | number
    id_asesor?: IntFieldUpdateOperationsInput | number
    fecha_programada?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_inicio_real?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_fin_real?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizar?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteUpsertWithoutRutas_clientesInput = {
    update: XOR<ClienteUpdateWithoutRutas_clientesInput, ClienteUncheckedUpdateWithoutRutas_clientesInput>
    create: XOR<ClienteCreateWithoutRutas_clientesInput, ClienteUncheckedCreateWithoutRutas_clientesInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutRutas_clientesInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutRutas_clientesInput, ClienteUncheckedUpdateWithoutRutas_clientesInput>
  }

  export type ClienteUpdateWithoutRutas_clientesInput = {
    tipo_documento?: EnumTipoDocumentoFieldUpdateOperationsInput | $Enums.TipoDocumento
    numero_documento?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    nombres?: StringFieldUpdateOperationsInput | string
    apellido_paterno?: StringFieldUpdateOperationsInput | string
    apellido_materno?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    distrito?: NullableStringFieldUpdateOperationsInput | string | null
    deuda_castigada?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deuda_vigente?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    otras_deudas?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: StringFieldUpdateOperationsInput | string
    ultima_gestion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    admisiones?: AdmisionUpdateManyWithoutClienteNestedInput
    asignaciones?: AsignacionClienteUpdateManyWithoutClienteNestedInput
    visitas?: VisitaUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutRutas_clientesInput = {
    id_cliente?: IntFieldUpdateOperationsInput | number
    tipo_documento?: EnumTipoDocumentoFieldUpdateOperationsInput | $Enums.TipoDocumento
    numero_documento?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    nombres?: StringFieldUpdateOperationsInput | string
    apellido_paterno?: StringFieldUpdateOperationsInput | string
    apellido_materno?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    distrito?: NullableStringFieldUpdateOperationsInput | string | null
    deuda_castigada?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deuda_vigente?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    otras_deudas?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: StringFieldUpdateOperationsInput | string
    ultima_gestion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    admisiones?: AdmisionUncheckedUpdateManyWithoutClienteNestedInput
    asignaciones?: AsignacionClienteUncheckedUpdateManyWithoutClienteNestedInput
    visitas?: VisitaUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type VisitaUpsertWithWhereUniqueWithoutRuta_clienteInput = {
    where: VisitaWhereUniqueInput
    update: XOR<VisitaUpdateWithoutRuta_clienteInput, VisitaUncheckedUpdateWithoutRuta_clienteInput>
    create: XOR<VisitaCreateWithoutRuta_clienteInput, VisitaUncheckedCreateWithoutRuta_clienteInput>
  }

  export type VisitaUpdateWithWhereUniqueWithoutRuta_clienteInput = {
    where: VisitaWhereUniqueInput
    data: XOR<VisitaUpdateWithoutRuta_clienteInput, VisitaUncheckedUpdateWithoutRuta_clienteInput>
  }

  export type VisitaUpdateManyWithWhereWithoutRuta_clienteInput = {
    where: VisitaScalarWhereInput
    data: XOR<VisitaUpdateManyMutationInput, VisitaUncheckedUpdateManyWithoutRuta_clienteInput>
  }

  export type RutaClienteCreateWithoutVisitasInput = {
    secuencia?: number
    estado_visita?: string
    prioridad?: string
    fecha_creacion?: Date | string
    fecha_actualizar?: Date | string
    ruta: RutaCreateNestedOneWithoutRutas_clientesInput
    cliente: ClienteCreateNestedOneWithoutRutas_clientesInput
  }

  export type RutaClienteUncheckedCreateWithoutVisitasInput = {
    id_ruta_cliente?: number
    id_ruta: number
    id_cliente: number
    secuencia?: number
    estado_visita?: string
    prioridad?: string
    fecha_creacion?: Date | string
    fecha_actualizar?: Date | string
  }

  export type RutaClienteCreateOrConnectWithoutVisitasInput = {
    where: RutaClienteWhereUniqueInput
    create: XOR<RutaClienteCreateWithoutVisitasInput, RutaClienteUncheckedCreateWithoutVisitasInput>
  }

  export type ClienteCreateWithoutVisitasInput = {
    tipo_documento?: $Enums.TipoDocumento
    numero_documento: string
    telefono?: string | null
    nombres: string
    apellido_paterno: string
    apellido_materno: string
    direccion?: string | null
    distrito?: string | null
    deuda_castigada?: Decimal | DecimalJsLike | number | string
    deuda_vigente?: Decimal | DecimalJsLike | number | string
    otras_deudas?: Decimal | DecimalJsLike | number | string
    estado?: string
    ultima_gestion?: Date | string | null
    latitud?: Decimal | DecimalJsLike | number | string | null
    longitud?: Decimal | DecimalJsLike | number | string | null
    admisiones?: AdmisionCreateNestedManyWithoutClienteInput
    asignaciones?: AsignacionClienteCreateNestedManyWithoutClienteInput
    rutas_clientes?: RutaClienteCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutVisitasInput = {
    id_cliente?: number
    tipo_documento?: $Enums.TipoDocumento
    numero_documento: string
    telefono?: string | null
    nombres: string
    apellido_paterno: string
    apellido_materno: string
    direccion?: string | null
    distrito?: string | null
    deuda_castigada?: Decimal | DecimalJsLike | number | string
    deuda_vigente?: Decimal | DecimalJsLike | number | string
    otras_deudas?: Decimal | DecimalJsLike | number | string
    estado?: string
    ultima_gestion?: Date | string | null
    latitud?: Decimal | DecimalJsLike | number | string | null
    longitud?: Decimal | DecimalJsLike | number | string | null
    admisiones?: AdmisionUncheckedCreateNestedManyWithoutClienteInput
    asignaciones?: AsignacionClienteUncheckedCreateNestedManyWithoutClienteInput
    rutas_clientes?: RutaClienteUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutVisitasInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutVisitasInput, ClienteUncheckedCreateWithoutVisitasInput>
  }

  export type AsesorCreateWithoutVisitasInput = {
    dni: string
    nombres: string
    apellido_paterno: string
    apellido_materno: string
    telefono?: string | null
    correo?: string | null
    distrito?: string | null
    estado?: string
    latitud?: Decimal | DecimalJsLike | number | string | null
    longitud?: Decimal | DecimalJsLike | number | string | null
    fecha_creacion?: Date | string
    fecha_actualizar?: Date | string
    asignaciones?: AsignacionClienteCreateNestedManyWithoutAsesorInput
    rutas?: RutaCreateNestedManyWithoutAsesorInput
    usuario?: UsuarioCreateNestedOneWithoutAsesorInput
  }

  export type AsesorUncheckedCreateWithoutVisitasInput = {
    id_asesor?: number
    dni: string
    nombres: string
    apellido_paterno: string
    apellido_materno: string
    telefono?: string | null
    correo?: string | null
    distrito?: string | null
    estado?: string
    latitud?: Decimal | DecimalJsLike | number | string | null
    longitud?: Decimal | DecimalJsLike | number | string | null
    fecha_creacion?: Date | string
    fecha_actualizar?: Date | string
    asignaciones?: AsignacionClienteUncheckedCreateNestedManyWithoutAsesorInput
    rutas?: RutaUncheckedCreateNestedManyWithoutAsesorInput
    usuario?: UsuarioUncheckedCreateNestedOneWithoutAsesorInput
  }

  export type AsesorCreateOrConnectWithoutVisitasInput = {
    where: AsesorWhereUniqueInput
    create: XOR<AsesorCreateWithoutVisitasInput, AsesorUncheckedCreateWithoutVisitasInput>
  }

  export type RutaClienteUpsertWithoutVisitasInput = {
    update: XOR<RutaClienteUpdateWithoutVisitasInput, RutaClienteUncheckedUpdateWithoutVisitasInput>
    create: XOR<RutaClienteCreateWithoutVisitasInput, RutaClienteUncheckedCreateWithoutVisitasInput>
    where?: RutaClienteWhereInput
  }

  export type RutaClienteUpdateToOneWithWhereWithoutVisitasInput = {
    where?: RutaClienteWhereInput
    data: XOR<RutaClienteUpdateWithoutVisitasInput, RutaClienteUncheckedUpdateWithoutVisitasInput>
  }

  export type RutaClienteUpdateWithoutVisitasInput = {
    secuencia?: IntFieldUpdateOperationsInput | number
    estado_visita?: StringFieldUpdateOperationsInput | string
    prioridad?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizar?: DateTimeFieldUpdateOperationsInput | Date | string
    ruta?: RutaUpdateOneRequiredWithoutRutas_clientesNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutRutas_clientesNestedInput
  }

  export type RutaClienteUncheckedUpdateWithoutVisitasInput = {
    id_ruta_cliente?: IntFieldUpdateOperationsInput | number
    id_ruta?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    secuencia?: IntFieldUpdateOperationsInput | number
    estado_visita?: StringFieldUpdateOperationsInput | string
    prioridad?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizar?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteUpsertWithoutVisitasInput = {
    update: XOR<ClienteUpdateWithoutVisitasInput, ClienteUncheckedUpdateWithoutVisitasInput>
    create: XOR<ClienteCreateWithoutVisitasInput, ClienteUncheckedCreateWithoutVisitasInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutVisitasInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutVisitasInput, ClienteUncheckedUpdateWithoutVisitasInput>
  }

  export type ClienteUpdateWithoutVisitasInput = {
    tipo_documento?: EnumTipoDocumentoFieldUpdateOperationsInput | $Enums.TipoDocumento
    numero_documento?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    nombres?: StringFieldUpdateOperationsInput | string
    apellido_paterno?: StringFieldUpdateOperationsInput | string
    apellido_materno?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    distrito?: NullableStringFieldUpdateOperationsInput | string | null
    deuda_castigada?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deuda_vigente?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    otras_deudas?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: StringFieldUpdateOperationsInput | string
    ultima_gestion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    admisiones?: AdmisionUpdateManyWithoutClienteNestedInput
    asignaciones?: AsignacionClienteUpdateManyWithoutClienteNestedInput
    rutas_clientes?: RutaClienteUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutVisitasInput = {
    id_cliente?: IntFieldUpdateOperationsInput | number
    tipo_documento?: EnumTipoDocumentoFieldUpdateOperationsInput | $Enums.TipoDocumento
    numero_documento?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    nombres?: StringFieldUpdateOperationsInput | string
    apellido_paterno?: StringFieldUpdateOperationsInput | string
    apellido_materno?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    distrito?: NullableStringFieldUpdateOperationsInput | string | null
    deuda_castigada?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deuda_vigente?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    otras_deudas?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: StringFieldUpdateOperationsInput | string
    ultima_gestion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    admisiones?: AdmisionUncheckedUpdateManyWithoutClienteNestedInput
    asignaciones?: AsignacionClienteUncheckedUpdateManyWithoutClienteNestedInput
    rutas_clientes?: RutaClienteUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type AsesorUpsertWithoutVisitasInput = {
    update: XOR<AsesorUpdateWithoutVisitasInput, AsesorUncheckedUpdateWithoutVisitasInput>
    create: XOR<AsesorCreateWithoutVisitasInput, AsesorUncheckedCreateWithoutVisitasInput>
    where?: AsesorWhereInput
  }

  export type AsesorUpdateToOneWithWhereWithoutVisitasInput = {
    where?: AsesorWhereInput
    data: XOR<AsesorUpdateWithoutVisitasInput, AsesorUncheckedUpdateWithoutVisitasInput>
  }

  export type AsesorUpdateWithoutVisitasInput = {
    dni?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellido_paterno?: StringFieldUpdateOperationsInput | string
    apellido_materno?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    distrito?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    latitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizar?: DateTimeFieldUpdateOperationsInput | Date | string
    asignaciones?: AsignacionClienteUpdateManyWithoutAsesorNestedInput
    rutas?: RutaUpdateManyWithoutAsesorNestedInput
    usuario?: UsuarioUpdateOneWithoutAsesorNestedInput
  }

  export type AsesorUncheckedUpdateWithoutVisitasInput = {
    id_asesor?: IntFieldUpdateOperationsInput | number
    dni?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellido_paterno?: StringFieldUpdateOperationsInput | string
    apellido_materno?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    distrito?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    latitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizar?: DateTimeFieldUpdateOperationsInput | Date | string
    asignaciones?: AsignacionClienteUncheckedUpdateManyWithoutAsesorNestedInput
    rutas?: RutaUncheckedUpdateManyWithoutAsesorNestedInput
    usuario?: UsuarioUncheckedUpdateOneWithoutAsesorNestedInput
  }

  export type AsesorCreateWithoutUsuarioInput = {
    dni: string
    nombres: string
    apellido_paterno: string
    apellido_materno: string
    telefono?: string | null
    correo?: string | null
    distrito?: string | null
    estado?: string
    latitud?: Decimal | DecimalJsLike | number | string | null
    longitud?: Decimal | DecimalJsLike | number | string | null
    fecha_creacion?: Date | string
    fecha_actualizar?: Date | string
    asignaciones?: AsignacionClienteCreateNestedManyWithoutAsesorInput
    rutas?: RutaCreateNestedManyWithoutAsesorInput
    visitas?: VisitaCreateNestedManyWithoutAsesorInput
  }

  export type AsesorUncheckedCreateWithoutUsuarioInput = {
    id_asesor?: number
    dni: string
    nombres: string
    apellido_paterno: string
    apellido_materno: string
    telefono?: string | null
    correo?: string | null
    distrito?: string | null
    estado?: string
    latitud?: Decimal | DecimalJsLike | number | string | null
    longitud?: Decimal | DecimalJsLike | number | string | null
    fecha_creacion?: Date | string
    fecha_actualizar?: Date | string
    asignaciones?: AsignacionClienteUncheckedCreateNestedManyWithoutAsesorInput
    rutas?: RutaUncheckedCreateNestedManyWithoutAsesorInput
    visitas?: VisitaUncheckedCreateNestedManyWithoutAsesorInput
  }

  export type AsesorCreateOrConnectWithoutUsuarioInput = {
    where: AsesorWhereUniqueInput
    create: XOR<AsesorCreateWithoutUsuarioInput, AsesorUncheckedCreateWithoutUsuarioInput>
  }

  export type AsesorUpsertWithoutUsuarioInput = {
    update: XOR<AsesorUpdateWithoutUsuarioInput, AsesorUncheckedUpdateWithoutUsuarioInput>
    create: XOR<AsesorCreateWithoutUsuarioInput, AsesorUncheckedCreateWithoutUsuarioInput>
    where?: AsesorWhereInput
  }

  export type AsesorUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: AsesorWhereInput
    data: XOR<AsesorUpdateWithoutUsuarioInput, AsesorUncheckedUpdateWithoutUsuarioInput>
  }

  export type AsesorUpdateWithoutUsuarioInput = {
    dni?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellido_paterno?: StringFieldUpdateOperationsInput | string
    apellido_materno?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    distrito?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    latitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizar?: DateTimeFieldUpdateOperationsInput | Date | string
    asignaciones?: AsignacionClienteUpdateManyWithoutAsesorNestedInput
    rutas?: RutaUpdateManyWithoutAsesorNestedInput
    visitas?: VisitaUpdateManyWithoutAsesorNestedInput
  }

  export type AsesorUncheckedUpdateWithoutUsuarioInput = {
    id_asesor?: IntFieldUpdateOperationsInput | number
    dni?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellido_paterno?: StringFieldUpdateOperationsInput | string
    apellido_materno?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    distrito?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    latitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizar?: DateTimeFieldUpdateOperationsInput | Date | string
    asignaciones?: AsignacionClienteUncheckedUpdateManyWithoutAsesorNestedInput
    rutas?: RutaUncheckedUpdateManyWithoutAsesorNestedInput
    visitas?: VisitaUncheckedUpdateManyWithoutAsesorNestedInput
  }

  export type HistorialCalidadCreateWithoutRegistroInput = {
    id_historial?: string
    accion: string
    version: number
    actor_id?: string | null
    actor?: string | null
    detalle?: NullableJsonNullValueInput | InputJsonValue
    fecha?: Date | string
  }

  export type HistorialCalidadUncheckedCreateWithoutRegistroInput = {
    id_historial?: string
    accion: string
    version: number
    actor_id?: string | null
    actor?: string | null
    detalle?: NullableJsonNullValueInput | InputJsonValue
    fecha?: Date | string
  }

  export type HistorialCalidadCreateOrConnectWithoutRegistroInput = {
    where: HistorialCalidadWhereUniqueInput
    create: XOR<HistorialCalidadCreateWithoutRegistroInput, HistorialCalidadUncheckedCreateWithoutRegistroInput>
  }

  export type HistorialCalidadCreateManyRegistroInputEnvelope = {
    data: HistorialCalidadCreateManyRegistroInput | HistorialCalidadCreateManyRegistroInput[]
    skipDuplicates?: boolean
  }

  export type HistorialCalidadUpsertWithWhereUniqueWithoutRegistroInput = {
    where: HistorialCalidadWhereUniqueInput
    update: XOR<HistorialCalidadUpdateWithoutRegistroInput, HistorialCalidadUncheckedUpdateWithoutRegistroInput>
    create: XOR<HistorialCalidadCreateWithoutRegistroInput, HistorialCalidadUncheckedCreateWithoutRegistroInput>
  }

  export type HistorialCalidadUpdateWithWhereUniqueWithoutRegistroInput = {
    where: HistorialCalidadWhereUniqueInput
    data: XOR<HistorialCalidadUpdateWithoutRegistroInput, HistorialCalidadUncheckedUpdateWithoutRegistroInput>
  }

  export type HistorialCalidadUpdateManyWithWhereWithoutRegistroInput = {
    where: HistorialCalidadScalarWhereInput
    data: XOR<HistorialCalidadUpdateManyMutationInput, HistorialCalidadUncheckedUpdateManyWithoutRegistroInput>
  }

  export type HistorialCalidadScalarWhereInput = {
    AND?: HistorialCalidadScalarWhereInput | HistorialCalidadScalarWhereInput[]
    OR?: HistorialCalidadScalarWhereInput[]
    NOT?: HistorialCalidadScalarWhereInput | HistorialCalidadScalarWhereInput[]
    id_historial?: UuidFilter<"HistorialCalidad"> | string
    id_registro?: UuidFilter<"HistorialCalidad"> | string
    accion?: StringFilter<"HistorialCalidad"> | string
    version?: IntFilter<"HistorialCalidad"> | number
    actor_id?: UuidNullableFilter<"HistorialCalidad"> | string | null
    actor?: StringNullableFilter<"HistorialCalidad"> | string | null
    detalle?: JsonNullableFilter<"HistorialCalidad">
    fecha?: DateTimeFilter<"HistorialCalidad"> | Date | string
  }

  export type RegistroCalidadCreateWithoutHistorialInput = {
    id_registro?: string
    tipo: string
    codigo: string
    titulo: string
    descripcion?: string | null
    estado?: string
    responsable_id?: string | null
    responsable?: string | null
    fecha_objetivo?: Date | string | null
    fecha_cierre?: Date | string | null
    clausula_iso?: string | null
    indicador?: string | null
    meta?: Decimal | DecimalJsLike | number | string | null
    valor_actual?: Decimal | DecimalJsLike | number | string | null
    unidad?: string | null
    datos?: NullableJsonNullValueInput | InputJsonValue
    evidencia?: NullableJsonNullValueInput | InputJsonValue
    version?: number
    creado_por?: string | null
    actualizado_por?: string | null
    fecha_creacion?: Date | string
    fecha_actualizar?: Date | string
  }

  export type RegistroCalidadUncheckedCreateWithoutHistorialInput = {
    id_registro?: string
    tipo: string
    codigo: string
    titulo: string
    descripcion?: string | null
    estado?: string
    responsable_id?: string | null
    responsable?: string | null
    fecha_objetivo?: Date | string | null
    fecha_cierre?: Date | string | null
    clausula_iso?: string | null
    indicador?: string | null
    meta?: Decimal | DecimalJsLike | number | string | null
    valor_actual?: Decimal | DecimalJsLike | number | string | null
    unidad?: string | null
    datos?: NullableJsonNullValueInput | InputJsonValue
    evidencia?: NullableJsonNullValueInput | InputJsonValue
    version?: number
    creado_por?: string | null
    actualizado_por?: string | null
    fecha_creacion?: Date | string
    fecha_actualizar?: Date | string
  }

  export type RegistroCalidadCreateOrConnectWithoutHistorialInput = {
    where: RegistroCalidadWhereUniqueInput
    create: XOR<RegistroCalidadCreateWithoutHistorialInput, RegistroCalidadUncheckedCreateWithoutHistorialInput>
  }

  export type RegistroCalidadUpsertWithoutHistorialInput = {
    update: XOR<RegistroCalidadUpdateWithoutHistorialInput, RegistroCalidadUncheckedUpdateWithoutHistorialInput>
    create: XOR<RegistroCalidadCreateWithoutHistorialInput, RegistroCalidadUncheckedCreateWithoutHistorialInput>
    where?: RegistroCalidadWhereInput
  }

  export type RegistroCalidadUpdateToOneWithWhereWithoutHistorialInput = {
    where?: RegistroCalidadWhereInput
    data: XOR<RegistroCalidadUpdateWithoutHistorialInput, RegistroCalidadUncheckedUpdateWithoutHistorialInput>
  }

  export type RegistroCalidadUpdateWithoutHistorialInput = {
    id_registro?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    responsable_id?: NullableStringFieldUpdateOperationsInput | string | null
    responsable?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_objetivo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_cierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clausula_iso?: NullableStringFieldUpdateOperationsInput | string | null
    indicador?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    valor_actual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    unidad?: NullableStringFieldUpdateOperationsInput | string | null
    datos?: NullableJsonNullValueInput | InputJsonValue
    evidencia?: NullableJsonNullValueInput | InputJsonValue
    version?: IntFieldUpdateOperationsInput | number
    creado_por?: NullableStringFieldUpdateOperationsInput | string | null
    actualizado_por?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizar?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroCalidadUncheckedUpdateWithoutHistorialInput = {
    id_registro?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    responsable_id?: NullableStringFieldUpdateOperationsInput | string | null
    responsable?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_objetivo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_cierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clausula_iso?: NullableStringFieldUpdateOperationsInput | string | null
    indicador?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    valor_actual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    unidad?: NullableStringFieldUpdateOperationsInput | string | null
    datos?: NullableJsonNullValueInput | InputJsonValue
    evidencia?: NullableJsonNullValueInput | InputJsonValue
    version?: IntFieldUpdateOperationsInput | number
    creado_por?: NullableStringFieldUpdateOperationsInput | string | null
    actualizado_por?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizar?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdmisionCreateManyClienteInput = {
    id_admision?: number
    producto?: string | null
    linea_credito?: Decimal | DecimalJsLike | number | string | null
    estado?: string
    fecha?: Date | string | null
  }

  export type AsignacionClienteCreateManyClienteInput = {
    id_asignacion?: number
    id_asesor: number
    fecha_asignacion?: Date | string
    fecha_fin?: Date | string | null
    estado?: string
  }

  export type RutaClienteCreateManyClienteInput = {
    id_ruta_cliente?: number
    id_ruta: number
    secuencia?: number
    estado_visita?: string
    prioridad?: string
    fecha_creacion?: Date | string
    fecha_actualizar?: Date | string
  }

  export type VisitaCreateManyClienteInput = {
    id_visita?: number
    client_sync_id?: string | null
    id_ruta_cliente?: number | null
    id_asesor: number
    tipo_visita?: string
    fecha_hora_checkin: Date | string
    fecha_hora_checkout?: Date | string | null
    latitud: Decimal | DecimalJsLike | number | string
    longitud: Decimal | DecimalJsLike | number | string
    resultado: string
    es_efectiva?: boolean
    monto_recaudado?: Decimal | DecimalJsLike | number | string | null
    fecha_promesa?: Date | string | null
    observaciones?: string | null
    foto_url?: string | null
    foto_adicional_url?: string | null
    video_url?: string | null
    foto_evidencia?: string | null
    firma_evidencia?: string | null
    fecha_creacion?: Date | string
    fecha_actualizar?: Date | string
  }

  export type AdmisionUpdateWithoutClienteInput = {
    producto?: NullableStringFieldUpdateOperationsInput | string | null
    linea_credito?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estado?: StringFieldUpdateOperationsInput | string
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AdmisionUncheckedUpdateWithoutClienteInput = {
    id_admision?: IntFieldUpdateOperationsInput | number
    producto?: NullableStringFieldUpdateOperationsInput | string | null
    linea_credito?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estado?: StringFieldUpdateOperationsInput | string
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AdmisionUncheckedUpdateManyWithoutClienteInput = {
    id_admision?: IntFieldUpdateOperationsInput | number
    producto?: NullableStringFieldUpdateOperationsInput | string | null
    linea_credito?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estado?: StringFieldUpdateOperationsInput | string
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AsignacionClienteUpdateWithoutClienteInput = {
    fecha_asignacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
    asesor?: AsesorUpdateOneRequiredWithoutAsignacionesNestedInput
  }

  export type AsignacionClienteUncheckedUpdateWithoutClienteInput = {
    id_asignacion?: IntFieldUpdateOperationsInput | number
    id_asesor?: IntFieldUpdateOperationsInput | number
    fecha_asignacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type AsignacionClienteUncheckedUpdateManyWithoutClienteInput = {
    id_asignacion?: IntFieldUpdateOperationsInput | number
    id_asesor?: IntFieldUpdateOperationsInput | number
    fecha_asignacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type RutaClienteUpdateWithoutClienteInput = {
    secuencia?: IntFieldUpdateOperationsInput | number
    estado_visita?: StringFieldUpdateOperationsInput | string
    prioridad?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizar?: DateTimeFieldUpdateOperationsInput | Date | string
    ruta?: RutaUpdateOneRequiredWithoutRutas_clientesNestedInput
    visitas?: VisitaUpdateManyWithoutRuta_clienteNestedInput
  }

  export type RutaClienteUncheckedUpdateWithoutClienteInput = {
    id_ruta_cliente?: IntFieldUpdateOperationsInput | number
    id_ruta?: IntFieldUpdateOperationsInput | number
    secuencia?: IntFieldUpdateOperationsInput | number
    estado_visita?: StringFieldUpdateOperationsInput | string
    prioridad?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizar?: DateTimeFieldUpdateOperationsInput | Date | string
    visitas?: VisitaUncheckedUpdateManyWithoutRuta_clienteNestedInput
  }

  export type RutaClienteUncheckedUpdateManyWithoutClienteInput = {
    id_ruta_cliente?: IntFieldUpdateOperationsInput | number
    id_ruta?: IntFieldUpdateOperationsInput | number
    secuencia?: IntFieldUpdateOperationsInput | number
    estado_visita?: StringFieldUpdateOperationsInput | string
    prioridad?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizar?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitaUpdateWithoutClienteInput = {
    client_sync_id?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_visita?: StringFieldUpdateOperationsInput | string
    fecha_hora_checkin?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_checkout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resultado?: StringFieldUpdateOperationsInput | string
    es_efectiva?: BoolFieldUpdateOperationsInput | boolean
    monto_recaudado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_promesa?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
    foto_adicional_url?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    foto_evidencia?: NullableStringFieldUpdateOperationsInput | string | null
    firma_evidencia?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizar?: DateTimeFieldUpdateOperationsInput | Date | string
    ruta_cliente?: RutaClienteUpdateOneWithoutVisitasNestedInput
    asesor?: AsesorUpdateOneRequiredWithoutVisitasNestedInput
  }

  export type VisitaUncheckedUpdateWithoutClienteInput = {
    id_visita?: IntFieldUpdateOperationsInput | number
    client_sync_id?: NullableStringFieldUpdateOperationsInput | string | null
    id_ruta_cliente?: NullableIntFieldUpdateOperationsInput | number | null
    id_asesor?: IntFieldUpdateOperationsInput | number
    tipo_visita?: StringFieldUpdateOperationsInput | string
    fecha_hora_checkin?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_checkout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resultado?: StringFieldUpdateOperationsInput | string
    es_efectiva?: BoolFieldUpdateOperationsInput | boolean
    monto_recaudado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_promesa?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
    foto_adicional_url?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    foto_evidencia?: NullableStringFieldUpdateOperationsInput | string | null
    firma_evidencia?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizar?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitaUncheckedUpdateManyWithoutClienteInput = {
    id_visita?: IntFieldUpdateOperationsInput | number
    client_sync_id?: NullableStringFieldUpdateOperationsInput | string | null
    id_ruta_cliente?: NullableIntFieldUpdateOperationsInput | number | null
    id_asesor?: IntFieldUpdateOperationsInput | number
    tipo_visita?: StringFieldUpdateOperationsInput | string
    fecha_hora_checkin?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_checkout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resultado?: StringFieldUpdateOperationsInput | string
    es_efectiva?: BoolFieldUpdateOperationsInput | boolean
    monto_recaudado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_promesa?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
    foto_adicional_url?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    foto_evidencia?: NullableStringFieldUpdateOperationsInput | string | null
    firma_evidencia?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizar?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsignacionClienteCreateManyAsesorInput = {
    id_asignacion?: number
    id_cliente: number
    fecha_asignacion?: Date | string
    fecha_fin?: Date | string | null
    estado?: string
  }

  export type RutaCreateManyAsesorInput = {
    id_ruta?: number
    fecha_programada: Date | string
    fecha_inicio_real?: Date | string | null
    fecha_fin_real?: Date | string | null
    estado?: string
    fecha_creacion?: Date | string
    fecha_actualizar?: Date | string
  }

  export type VisitaCreateManyAsesorInput = {
    id_visita?: number
    client_sync_id?: string | null
    id_ruta_cliente?: number | null
    id_cliente: number
    tipo_visita?: string
    fecha_hora_checkin: Date | string
    fecha_hora_checkout?: Date | string | null
    latitud: Decimal | DecimalJsLike | number | string
    longitud: Decimal | DecimalJsLike | number | string
    resultado: string
    es_efectiva?: boolean
    monto_recaudado?: Decimal | DecimalJsLike | number | string | null
    fecha_promesa?: Date | string | null
    observaciones?: string | null
    foto_url?: string | null
    foto_adicional_url?: string | null
    video_url?: string | null
    foto_evidencia?: string | null
    firma_evidencia?: string | null
    fecha_creacion?: Date | string
    fecha_actualizar?: Date | string
  }

  export type AsignacionClienteUpdateWithoutAsesorInput = {
    fecha_asignacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
    cliente?: ClienteUpdateOneRequiredWithoutAsignacionesNestedInput
  }

  export type AsignacionClienteUncheckedUpdateWithoutAsesorInput = {
    id_asignacion?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    fecha_asignacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type AsignacionClienteUncheckedUpdateManyWithoutAsesorInput = {
    id_asignacion?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    fecha_asignacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type RutaUpdateWithoutAsesorInput = {
    fecha_programada?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_inicio_real?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_fin_real?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizar?: DateTimeFieldUpdateOperationsInput | Date | string
    rutas_clientes?: RutaClienteUpdateManyWithoutRutaNestedInput
  }

  export type RutaUncheckedUpdateWithoutAsesorInput = {
    id_ruta?: IntFieldUpdateOperationsInput | number
    fecha_programada?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_inicio_real?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_fin_real?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizar?: DateTimeFieldUpdateOperationsInput | Date | string
    rutas_clientes?: RutaClienteUncheckedUpdateManyWithoutRutaNestedInput
  }

  export type RutaUncheckedUpdateManyWithoutAsesorInput = {
    id_ruta?: IntFieldUpdateOperationsInput | number
    fecha_programada?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_inicio_real?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_fin_real?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizar?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitaUpdateWithoutAsesorInput = {
    client_sync_id?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_visita?: StringFieldUpdateOperationsInput | string
    fecha_hora_checkin?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_checkout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resultado?: StringFieldUpdateOperationsInput | string
    es_efectiva?: BoolFieldUpdateOperationsInput | boolean
    monto_recaudado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_promesa?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
    foto_adicional_url?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    foto_evidencia?: NullableStringFieldUpdateOperationsInput | string | null
    firma_evidencia?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizar?: DateTimeFieldUpdateOperationsInput | Date | string
    ruta_cliente?: RutaClienteUpdateOneWithoutVisitasNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutVisitasNestedInput
  }

  export type VisitaUncheckedUpdateWithoutAsesorInput = {
    id_visita?: IntFieldUpdateOperationsInput | number
    client_sync_id?: NullableStringFieldUpdateOperationsInput | string | null
    id_ruta_cliente?: NullableIntFieldUpdateOperationsInput | number | null
    id_cliente?: IntFieldUpdateOperationsInput | number
    tipo_visita?: StringFieldUpdateOperationsInput | string
    fecha_hora_checkin?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_checkout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resultado?: StringFieldUpdateOperationsInput | string
    es_efectiva?: BoolFieldUpdateOperationsInput | boolean
    monto_recaudado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_promesa?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
    foto_adicional_url?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    foto_evidencia?: NullableStringFieldUpdateOperationsInput | string | null
    firma_evidencia?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizar?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitaUncheckedUpdateManyWithoutAsesorInput = {
    id_visita?: IntFieldUpdateOperationsInput | number
    client_sync_id?: NullableStringFieldUpdateOperationsInput | string | null
    id_ruta_cliente?: NullableIntFieldUpdateOperationsInput | number | null
    id_cliente?: IntFieldUpdateOperationsInput | number
    tipo_visita?: StringFieldUpdateOperationsInput | string
    fecha_hora_checkin?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_checkout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resultado?: StringFieldUpdateOperationsInput | string
    es_efectiva?: BoolFieldUpdateOperationsInput | boolean
    monto_recaudado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_promesa?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
    foto_adicional_url?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    foto_evidencia?: NullableStringFieldUpdateOperationsInput | string | null
    firma_evidencia?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizar?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RutaClienteCreateManyRutaInput = {
    id_ruta_cliente?: number
    id_cliente: number
    secuencia?: number
    estado_visita?: string
    prioridad?: string
    fecha_creacion?: Date | string
    fecha_actualizar?: Date | string
  }

  export type RutaClienteUpdateWithoutRutaInput = {
    secuencia?: IntFieldUpdateOperationsInput | number
    estado_visita?: StringFieldUpdateOperationsInput | string
    prioridad?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizar?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutRutas_clientesNestedInput
    visitas?: VisitaUpdateManyWithoutRuta_clienteNestedInput
  }

  export type RutaClienteUncheckedUpdateWithoutRutaInput = {
    id_ruta_cliente?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    secuencia?: IntFieldUpdateOperationsInput | number
    estado_visita?: StringFieldUpdateOperationsInput | string
    prioridad?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizar?: DateTimeFieldUpdateOperationsInput | Date | string
    visitas?: VisitaUncheckedUpdateManyWithoutRuta_clienteNestedInput
  }

  export type RutaClienteUncheckedUpdateManyWithoutRutaInput = {
    id_ruta_cliente?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    secuencia?: IntFieldUpdateOperationsInput | number
    estado_visita?: StringFieldUpdateOperationsInput | string
    prioridad?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizar?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitaCreateManyRuta_clienteInput = {
    id_visita?: number
    client_sync_id?: string | null
    id_cliente: number
    id_asesor: number
    tipo_visita?: string
    fecha_hora_checkin: Date | string
    fecha_hora_checkout?: Date | string | null
    latitud: Decimal | DecimalJsLike | number | string
    longitud: Decimal | DecimalJsLike | number | string
    resultado: string
    es_efectiva?: boolean
    monto_recaudado?: Decimal | DecimalJsLike | number | string | null
    fecha_promesa?: Date | string | null
    observaciones?: string | null
    foto_url?: string | null
    foto_adicional_url?: string | null
    video_url?: string | null
    foto_evidencia?: string | null
    firma_evidencia?: string | null
    fecha_creacion?: Date | string
    fecha_actualizar?: Date | string
  }

  export type VisitaUpdateWithoutRuta_clienteInput = {
    client_sync_id?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_visita?: StringFieldUpdateOperationsInput | string
    fecha_hora_checkin?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_checkout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resultado?: StringFieldUpdateOperationsInput | string
    es_efectiva?: BoolFieldUpdateOperationsInput | boolean
    monto_recaudado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_promesa?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
    foto_adicional_url?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    foto_evidencia?: NullableStringFieldUpdateOperationsInput | string | null
    firma_evidencia?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizar?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutVisitasNestedInput
    asesor?: AsesorUpdateOneRequiredWithoutVisitasNestedInput
  }

  export type VisitaUncheckedUpdateWithoutRuta_clienteInput = {
    id_visita?: IntFieldUpdateOperationsInput | number
    client_sync_id?: NullableStringFieldUpdateOperationsInput | string | null
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_asesor?: IntFieldUpdateOperationsInput | number
    tipo_visita?: StringFieldUpdateOperationsInput | string
    fecha_hora_checkin?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_checkout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resultado?: StringFieldUpdateOperationsInput | string
    es_efectiva?: BoolFieldUpdateOperationsInput | boolean
    monto_recaudado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_promesa?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
    foto_adicional_url?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    foto_evidencia?: NullableStringFieldUpdateOperationsInput | string | null
    firma_evidencia?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizar?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitaUncheckedUpdateManyWithoutRuta_clienteInput = {
    id_visita?: IntFieldUpdateOperationsInput | number
    client_sync_id?: NullableStringFieldUpdateOperationsInput | string | null
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_asesor?: IntFieldUpdateOperationsInput | number
    tipo_visita?: StringFieldUpdateOperationsInput | string
    fecha_hora_checkin?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_checkout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resultado?: StringFieldUpdateOperationsInput | string
    es_efectiva?: BoolFieldUpdateOperationsInput | boolean
    monto_recaudado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_promesa?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
    foto_adicional_url?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    foto_evidencia?: NullableStringFieldUpdateOperationsInput | string | null
    firma_evidencia?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizar?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistorialCalidadCreateManyRegistroInput = {
    id_historial?: string
    accion: string
    version: number
    actor_id?: string | null
    actor?: string | null
    detalle?: NullableJsonNullValueInput | InputJsonValue
    fecha?: Date | string
  }

  export type HistorialCalidadUpdateWithoutRegistroInput = {
    id_historial?: StringFieldUpdateOperationsInput | string
    accion?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    actor_id?: NullableStringFieldUpdateOperationsInput | string | null
    actor?: NullableStringFieldUpdateOperationsInput | string | null
    detalle?: NullableJsonNullValueInput | InputJsonValue
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistorialCalidadUncheckedUpdateWithoutRegistroInput = {
    id_historial?: StringFieldUpdateOperationsInput | string
    accion?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    actor_id?: NullableStringFieldUpdateOperationsInput | string | null
    actor?: NullableStringFieldUpdateOperationsInput | string | null
    detalle?: NullableJsonNullValueInput | InputJsonValue
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistorialCalidadUncheckedUpdateManyWithoutRegistroInput = {
    id_historial?: StringFieldUpdateOperationsInput | string
    accion?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    actor_id?: NullableStringFieldUpdateOperationsInput | string | null
    actor?: NullableStringFieldUpdateOperationsInput | string | null
    detalle?: NullableJsonNullValueInput | InputJsonValue
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}