import React from "react";

// // #1
//   export function Greeter(props: {person: string}): JSX.Element {
//     return <h1>Hello!, {props.person}</h1>;
//   }

// // #2
// interface GreeterProps {
//   person: string;
// }

// export function Greeter(props: GreeterProps): JSX.Element {
//   return <h1>Hello!, {props.person}</h1>;
// }

// #3
interface GreeterProps {
  person: string;
}

export function Greeter({ person }: GreeterProps): JSX.Element {
  return <h1>Hello! {person}</h1>;
}
