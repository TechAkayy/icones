import { basePath as base } from '../env'

export const isElectron = import.meta.env.MODE === 'electron'
export const isVSCode = location.protocol === 'vscode-webview:'
export const isLocalMode = isElectron || isVSCode

export const basePath = isVSCode ? window.baseURI : base
export const staticPath = isVSCode
  ? window.staticURI
  : base
