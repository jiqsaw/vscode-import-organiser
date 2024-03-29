'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "import-organiser" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.sayHello', () => {
        // The code you place here will be executed every time your command is executed

        let editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; // No open text editor
        }

        const arrText = editor.document.getText().split('\n');

        console.log(arrText);
        let arrImports: string[] = [];

        for (let i of arrText) {
            i = i.trim();
            if ((/^\s*$/.test(i)) || (i.startsWith('import ')) || (i.startsWith('import{'))) {
                arrImports = [...arrImports, i];
            } else {
                break;
            }
        }
        console.log(arrImports)

        // let range = new vscode.Range(new vscode.Position(0, 0), new vscode.Position(10, 20));

        editor.edit(mutator => {
            // mutator.replace(range, 'nooo');

        }).then((success) => {
            if (!success) {
                vscode.window.showErrorMessage('Failed1');
            }
        });

        // vscode.window.showInformationMessage('Selected characters: ' + text.length);
    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}