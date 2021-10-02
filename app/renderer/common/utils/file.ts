// renderer/common/utils/file.ts
// 👇 先打印一下Node版本
console.log(`Node Version：${process.versions.node}`);

import fs, { promises as fsPromiseAPIs } from 'fs';

const fileAction = {
  read: (path: string, encoding: BufferEncoding = 'utf8'): Promise<string> => {
    return fsPromiseAPIs.readFile(path, encoding);
  },
  write: (path: string, content: string, encoding: BufferEncoding): Promise<void> => {
    return fsPromiseAPIs.writeFile(path, content, encoding);
  },
  rename: (oldPath: string, newPath: string) => {
    return fsPromiseAPIs.rename(oldPath, newPath);
  },
  delete: (path: string) => {
    return fsPromiseAPIs.unlink(path);
  },
  hasFile: (path: string) => {
    return fsPromiseAPIs.access(path, fs.constants.F_OK);
  },
  canWrite: (path: string) => {
    return fsPromiseAPIs.access(path, fs.constants.W_OK);
  },
  canRead: (path: string) => {
    return fsPromiseAPIs.access(path, fs.constants.R_OK);
  },
};

export default fileAction;
