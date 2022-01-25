import { Component } from '@angular/core'
// import { Http, Headers, RequestOptions} from '@angular/http'
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { validateConfig } from '@angular/router/src/config'


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

    max = 140 // 入力可能な最大長
    tweet = '' // テキストエリアの初期値
    count = this.max // 入力可能な残り文字数
    myStyle = { // 残り文字数のスタイル
        color: '#00f', fontWeight: 'normal'
    }

    // テキストエリアの変更を監視
    selector(){
        // 残り文字数を反映
        this.count = this.max - this.tweet.length
        // 残り文字数に応じてスタイルを変更
        if(this.count > 10){
            this.myStyle = {
                color: '#00f', fontWeight: 'normal'
            }
        } else if(this.count > 0){
            this.myStyle = {
                color: '#f0f', fontWeight: 'normal'
            }
        } else {
            this.myStyle = {
                color: '#f00', fontWeight: 'bold'
            }

        }
    }

    emails: String[] = []


    // // Httpサービスを有効化
    // constructor(private http: Http){}

    // ファイルを選択したらアップロードを実行
    upload(list: any){
        // アップロードファイルがなければ処理を中止
        if(list.length <= 0){return}

        // アップロードファイルを準備
        let f = list[0]
        let data = new FormData()
        data.append('upFile', f, f.name)

        // サーバーにデータを送信
        // this.http.post('app/this.upload.php', data)
        //     // 成功／失敗時にはそれぞれ結果をログに表示
        //     .subscribe(
        //         data => console.log(data),
        //         error => console.log(error)
        //     ) 
    }


    // 個々の入力要素（初期値と検証ルール）を宣言
    mail = new FormControl('hoge@example.com', [
        Validators.required,
        Validators.email
    ])
    passwd = new FormControl('', [
        Validators.required,
        Validators.minLength(6)
    ])
    name = new FormControl('ななし', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10)
    ])
    memo = new FormControl('メモ', [
        Validators.maxLength(10)
    ])

    // FormGroupオブジェクトを生成
    myGroupForm = this.builder.group({
        mail: this.mail,
        passwd: this.passwd,
        name: this.name,
        memo: this.memo
    })

    // FormBuilderオブジェクトを生成
    constructor(private builder: FormBuilder){}

    // サブミット時に入力値を反映
    showGroup(){
        console.log(this.mail.value)
        console.log(this.passwd.value)
        console.log(this.name.value)
        console.log(this.memo.value)
        console.log(this.myGroupForm.value)
    }
}

