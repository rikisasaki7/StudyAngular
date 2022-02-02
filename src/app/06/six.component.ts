import { Component } from "@angular/core";
import { Book } from "./book";

@Component({
  selector: "my-app-six",
  templateUrl: "./six.html",
  styleUrls: ["./six.style.css"],
})
export class SixComponent {
  // リスト側で選択された書籍
  selected: Book;
  // 書籍情報を準備
  books = [
    {
      isbn: "978-4-7741-8411-1",
      title: "改訂新版JavaScript本格入門",
      price: 2980,
      publisher: "技術評論社",
    },
    {
      isbn: "978-4-7980-4853-6",
      title: "はじめてのAndroidアプリ開発 第2版",
      price: 3200,
      publisher: "秀和システム",
    },
    {
      isbn: "978-4-7741-8030-4",
      title: "［改訂新版］Javaポケットリファレンス",
      price: 2680,
      publisher: "技術評論社",
    },
    {
      isbn: "978-4-7981-3547-2",
      title: "独習PHP 第3版",
      price: 3200,
      publisher: "翔泳社",
    },
    {
      isbn: "978-4-8222-9893-7",
      title: "基礎からしっかり学ぶC++の教科書",
      price: 2800,
      publisher: "日経BP社",
    },
    {
      isbn: "978-4-7741-8883-6",
      title: "Ruby on Rails 5アプリケーションプログラミング",
      price: 3600,
      publisher: "技術評論社",
    },
    {
      isbn: "978-4-7981-5081-9",
      title: "デザインサンプルで学ぶCSSによる実践スタイリング入門  ",
      price: 1600,
      publisher: "翔泳社",
    },
  ];

  // リンククリック時に選択された書籍情報をselectedプロパティに保存
  onclick(book: Book) {
    this.selected = book;
  }

  // アクセサを使用してみる
  selectedAccesser: Book;
  onclickAccesser(b: Book) {
    this.selectedAccesser = b;
  }

  // editedイベントが発生したタイミングで実行
  onedited(book: Book) {
    // 引数bookで対応する配列booksを更新
    for (let item of this.books) {
      if (item.isbn === book.isbn) {
        item.title = book.title;
        item.price = book.price;
        item.publisher = book.publisher;
      }
    }

    // 選択された書籍情報を空に（＝フォームを非表示にする）
    this.selected = null;
  }
}
