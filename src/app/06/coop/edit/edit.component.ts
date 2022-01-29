import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Book } from "../../book"

@Component({
    selector: "edit-book",
    templateUrl: "./edit.html",
    styleUrls: ["./edit.style.css"]
})
export class EditComponent {
    // 親コンポーネントから渡される。htmlのプロパティバインディング構文で変数名に指定する
    // →[editItem]="selected"のところ
    @Input() editItem: Book

    // 引数名が親コンポーネントのイベント発火との対応付けに使われる
    // →htmlの()="" の()に指定する
    // →""の$eventに引数が引き渡される
    // →(edited)="onsubmited()"のところ
    @Output() edited = new EventEmitter<Book>()

    // サブミット時にeditedイベントを発生（$eventにはBookオブジェクトを代入）
    onsubmit(){
        // 引数は、EventEmitter宣言時の型と一致している必要がある
        this.edited.emit(this.editItem)
    }


    // イベント名とプロパティ名が異なる場合
    @Output("changeBook") editedChange = new EventEmitter<Book>()

    onsubmitChange(){
        this.editedChange.emit(this.editItem)
    }

}