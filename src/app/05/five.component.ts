import { Component } from '@angular/core'

@Component({
    selector: "my-app-five",
    templateUrl: "./five.html",
    styleUrls: ["./five.style.css"]
})
export class FiveComponent {
    // ユーザー情報の初期値
    user = {
        mail: 'hoge@example.com',
        passwd: '',
        name: 'ななし',
        memo: 'メモ'
    }

    show(){
        console.log(this.user.name)
        console.log(this.user.memo)
    }

    selectItem = 'hamster'
    data = [
        { label: '犬', value: 'dog', selected: false, disabled: false},
        { label: '猫', value: 'cat', selected: false, disabled: false},
        { label: 'ハムスター', value: 'hamster', selected: true, disabled: false},
        { label: '金魚', value: 'fish', selected: false, disabled: true},
        { label: '亀', value: 'turtle', selected: false, disabled: false},
    ]

    // ラジオボタンの変更時に現在地をログに出力
    showRadio(i: number){
        console.log('現在値（ラベル）：' + this.data[i].label)
        console.log('現在値：' + this.data[i].value)
        console.log('現在値：' + this.selectItem)
    }

    // チェックをオンオフしたタイミングで現在の状態をログ出力
    showCheck(){
        console.log(this.data)

    }

    selectOptItem = 'fish'
    // 選択ボックスを変更したタイミングでその選択値をログ出力
    showSelect(){
        console.log('現在値：' + this.selectOptItem)
        console.log(this.data)
    }


    selectOptGroupItem = 'turtle'

    dataGroup = {
        '哺乳類' : [
            { label: '犬', value: 'dog', selected: false, disabled: false},
            { label: '猫', value: 'cat', selected: false, disabled: false},
            { label: 'ハムスター', value: 'hamster', selected: true, disabled: false},
            { label: '金魚', value: 'fish', selected: false, disabled: true},
            { label: '亀', value: 'turtle', selected: false, disabled: false},
        ], 
        '魚類' : [
            { label: 'a', value: 'a', selected: false, disabled: false},
            { label: 'b', value: 'b', selected: false, disabled: false},
            { label: 'c', value: 'c', selected: true, disabled: false},
            { label: 'e', value: 'e', selected: false, disabled: true},
            { label: 'd', value: 'd', selected: false, disabled: false},
        ], 
    }

    // 与えられたハッシュのキーを配列として取得
    keys(obj: Object){
        return Object.keys(obj)
    }
    // 選択ボックスを変更したタイミングでその選択値をログ出力
    showGroupSelect(){
        console.log('現在値：' + this.selectOptGroupItem)
        console.log(this.dataGroup)

    }
}

