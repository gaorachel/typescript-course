import React, { useRef } from "react";

interface ShoppingListFormProps {
  onAddItem: (item: string, quantity: number) => void;
}

export function ShoppingListFrom({ onAddItem }: ShoppingListFormProps): JSX.Element {
  const productInputRef = useRef<HTMLInputElement>(null);
  const quantityInputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newProduct = productInputRef.current!.value;
    const newQuantity = parseInt(quantityInputRef.current!.value);
    onAddItem(newProduct, newQuantity);
    productInputRef.current!.value = "";
    quantityInputRef.current!.value = "1";
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Product Name" ref={productInputRef} />
      <input type="number" defaultValue={1} min={1} ref={quantityInputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}
