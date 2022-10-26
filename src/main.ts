import path from 'node:path';
import { BrowserWindow, app } from 'electron';

// 開発モードの場合はホットリロードする
if (process.env.NODE_ENV === 'development') {
  require('electron-nice-auto-reload')({
    // 'dist' フォルダ以下を監視して…
    rootPath: path.join(process.cwd(), 'dist'),
    // 変更を検知したらアプリを再起動
    rules: [{ action: 'app.relaunch' }],
  });
}

// アプリの起動イベント発火で BrowserWindow インスタンスを作成
app.whenReady().then(() => {
  // レンダラープロセスをロード
  new BrowserWindow().loadFile('dist/index.html')
});

// すべてのウィンドウが閉じられたらアプリを終了する
app.once('window-all-closed', () => app.quit());
