import * as vscode from 'vscode';


export function activate(context: vscode.ExtensionContext) {


	console.log('Congratulations, your extension "pebble" is now active!');

	let disposable = vscode.commands.registerCommand('pebble.test', () => {

		vscode.window.showInformationMessage('hi from pebble!');
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
