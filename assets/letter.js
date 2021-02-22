const twoColumnPreview = (img1, img2) => `
<table id="templateColumns" border="0" width="100%" cellspacing="0" cellpadding="0">
  <tbody>
    <tr style="height: 253px;">
    <!-- ||||||||||| --> <!-- LEFT COLUMN --> <!-- ||||||||||| -->
    <td class="templateColumnContainer" style="padding: 10px; height: 300px;" align="right" valign="top">
        <img class="columnImage" style="height: 100%;" src="${img1}" />
    </td>
    <!-- |||||||||||| --> <!-- RIGHT COLUMN --> <!-- |||||||||||| -->
    <td class="templateColumnContainer" style="padding: 10px; height: 300px;" align="left" valign="top">
        <img class="columnImage" style="height: 100%; " src="${img2}" />
    </td>
    </tr>
  </tbody>
</table>
`;

const oneColumnPreview = (img) => `
<table id="templateColumns" border="0" width="100%" cellspacing="0" cellpadding="0">
  <tbody>
    <tr style="height: 253px;">
    <!-- ||||||||||| --> <!-- LEFT COLUMN --> <!-- ||||||||||| -->
    <td class="templateColumnContainer" style="padding: 10px; height: 300px;" align="center" valign="top">
        <img class="columnImage" style="height: 100%;" src="${img}" />
    </td>
    </tr>
  </tbody>
</table>
`;

export const getLetter = (images) => {
    let letter = null;
    if (images.length == 2) letter = twoColumnPreview(images[0], images[1]);
    if (images.length == 1) letter = oneColumnPreview(images[0]);

    return letter;
};
