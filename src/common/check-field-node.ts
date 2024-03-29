/* eslint-disable prettier/prettier */
function doesPathExist(nodes, path: string[]) {
  if (!nodes) {
    return false;
  }

  const node = nodes.find((x) => x.name.value === path[0]);

  if (!node) {
    return false;
  }

  if (path.length === 1) {
    return true;
  }

  return doesPathExist(node.selectionSet.selections, path.slice(1));
}

export default doesPathExist