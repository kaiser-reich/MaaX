import { openFolder, openExternal, saveTempJson } from '@main/utils/path'
import { moveComponentBaseDir } from '@main/componentManager/utils/path'

export default function usePathHooks(): void {
  globalThis.main.Util = {
    openFolder,
    openExternal,
    saveTempJson,
    moveComponentBaseDir,
  }
}
