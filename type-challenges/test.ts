type User = {
    name: string;
    password: string;
    address: string;
    phone: string;
    keep: boolean
}

type MyPartial<T> = {
    readonly [P in keyof T]?: T[P]
}

type MyUserPartial = MyPartial<User>;

type unReadonlyUserPartial<T> = {
    -readonly [P in keyof T]-?: T[P]
}

type ttt = unReadonlyUserPartial<MyUserPartial>

type UserPartial = {
    readonly[P in keyof User]: User[P]
}

type test = keyof User;


// Key Remapping
type MappedTypeWithNewKeys<T> = {
    [K in keyof T as string]: T[K]; 
}

type Getters<T> = {
    [K in keyof T as `get${Capitalize<string & K>}`]: (name:T[K]) => T[K];
}

type g1 = Getters<User>


type RemoveKindField<T> = {
    [K in keyof T as Exclude<K, "kind">]: T[K];
}

type rr1 = Exclude<keyof Circle, "kind">

type RemoveKindField2<T> = {
    [K in keyof T]: T[K];
}

interface Circle {
    kind: "circle";
    kind2: "circle";
    radius: number;
}

type r1 = RemoveKindField<Circle>

// type vs interface
// 1. type 类型别名
// 可以给基本类型或联合类型霍元祖类型定义别名, 接口不行

// 2. interface 接口
// 只能用于定义对象类型

// 相同点
// 类型别名和接口都可以用来描述对象或函数
// 类型别名和接口都支持扩展, 类型别名通过&交叉运算符扩展, 接口通过extends扩展

// 不同点
// 同名接口会自动合并, 而类型别名不会

// 使用类型别名type的场景:
// 定义基本类型的别名, 定义元祖类型/函数类型/联合类型/映射类型

// 使用接口的场景:
// 需要利用接口自动合并特性的时候, 使用interface
// 定义对象类型且无需使用 type 的时候, 使用 interface
