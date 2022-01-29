import { Component, Input } from '@angular/core'
import { Book } from '../../book'

@Component({
    selector: "detail-book",
    templateUrl: "./details.html",
    styleUrls: ["./details.style.css"]
})
export class DetailsComponent {
    // @Inputをつけたプロパティには外から値を渡せる
    @Input() item: Book

    // // 属性とプロパティ名が異なる場合
    // @Input('data') item: Book
    // @Input('item') item: Book

    // 値を保持するためのプライベート変数 - 「_」は必須みたい
    private _pItem: Book

    // プライベート変数に値を設定するためのセッター
    @Input()
    set pItem(_pItem: Book){
        this._pItem = _pItem
    }

    // プライベート変数の値を取得するためのゲッター
    get pItem(){
        return this._pItem
    }
}