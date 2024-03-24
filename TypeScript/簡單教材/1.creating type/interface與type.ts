//  表示數組
type Names = string[];

interface Names {
  [index: number]: string;
}

// 聯合類型
type Status = "pending" | "working" | "complete";
// 介面不能表示聯合類型


// 對象
// 介面的優勢在於表示物件
type Name = {
  firstName: string;
  lastName: string;
};
type PhoneNumber = {
  landline: string;
  mobile: string;
};
type Contact = Name & PhoneNumber;
interface Name {
  firstName: string;
  lastName: string;
}
interface PhoneNumber {
  landline: string;
  mobile: string;
}
interface Contact extends Name, PhoneNumber {}