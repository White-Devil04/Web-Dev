function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
  Assests/male0001.png
  Assests/male0002.png
  Assests/male0003.png
  Assests/male0004.png
  Assests/male0005.png
  Assests/male0006.png
  Assests/male0007.png
  Assests/male0008.png
  Assests/male0009.png
  Assests/male0010.png
  Assests/male0011.png
  Assests/male0012.png
  Assests/male0013.png
  Assests/male0014.png
  Assests/male0015.png
  Assests/male0016.png
  Assests/male0017.png
  Assests/male0018.png
  Assests/male0019.png
  Assests/male0020.png
  Assests/male0021.png
  Assests/male0022.png
  Assests/male0023.png
  Assests/male0024.png
  Assests/male0025.png
  Assests/male0026.png
  Assests/male0027.png
  Assests/male0028.png
  Assests/male0029.png
  Assests/male0030.png
  Assests/male0031.png
  Assests/male0032.png
  Assests/male0033.png
  Assests/male0034.png
  Assests/male0035.png
  Assests/male0036.png
  Assests/male0037.png
  Assests/male0038.png
  Assests/male0039.png
  Assests/male0040.png
  Assests/male0041.png
  Assests/male0042.png
  Assests/male0043.png
  Assests/male0044.png
  Assests/male0045.png
  Assests/male0046.png
  Assests/male0047.png
  Assests/male0048.png
  Assests/male0049.png
  Assests/male0050.png
  Assests/male0051.png
  Assests/male0052.png
  Assests/male0053.png
  Assests/male0054.png
  Assests/male0055.png
  Assests/male0056.png
  Assests/male0057.png
  Assests/male0058.png
  Assests/male0059.png
  Assests/male0060.png
  Assests/male0061.png
  Assests/male0062.png
  Assests/male0063.png
  Assests/male0064.png
  Assests/male0065.png
  Assests/male0066.png
  Assests/male0067.png
  Assests/male0068.png
  Assests/male0069.png
  Assests/male0070.png
  Assests/male0071.png
  Assests/male0072.png
  Assests/male0073.png
  Assests/male0074.png
  Assests/male0075.png
  Assests/male0076.png
  Assests/male0077.png
  Assests/male0078.png
  Assests/male0079.png
  Assests/male0080.png
  Assests/male0081.png
  Assests/male0082.png
  Assests/male0083.png
  Assests/male0084.png
  Assests/male0085.png
  Assests/male0086.png
  Assests/male0087.png
  Assests/male0088.png
  Assests/male0089.png
  Assests/male0090.png
  Assests/male0091.png
  Assests/male0092.png
  Assests/male0093.png
  Assests/male0094.png
  Assests/male0095.png
  Assests/male0096.png
  Assests/male0097.png
  Assests/male0098.png
  Assests/male0099.png
  Assests/male0100.png
  Assests/male0101.png
  Assests/male0102.png
  Assests/male0103.png
  Assests/male0104.png
  Assests/male0105.png
  Assests/male0106.png
  Assests/male0107.png
  Assests/male0108.png
  Assests/male0109.png
  Assests/male0110.png
  Assests/male0111.png
  Assests/male0112.png
  Assests/male0113.png
  Assests/male0114.png
  Assests/male0115.png
  Assests/male0116.png
  Assests/male0117.png
  Assests/male0118.png
  Assests/male0119.png
  Assests/male0120.png
  Assests/male0121.png
  Assests/male0122.png
  Assests/male0123.png
  Assests/male0124.png
  Assests/male0125.png
  Assests/male0126.png
  Assests/male0127.png
  Assests/male0128.png
  Assests/male0129.png
  Assests/male0130.png
  Assests/male0131.png
  Assests/male0132.png
  Assests/male0133.png
  Assests/male0134.png
  Assests/male0135.png
  Assests/male0136.png
  Assests/male0137.png
  Assests/male0138.png
  Assests/male0139.png
  Assests/male0140.png
  Assests/male0141.png
  Assests/male0142.png
  Assests/male0143.png
  Assests/male0144.png
  Assests/male0145.png
  Assests/male0146.png
  Assests/male0147.png
  Assests/male0148.png
  Assests/male0149.png
  Assests/male0150.png
  Assests/male0151.png
  Assests/male0152.png
  Assests/male0153.png
  Assests/male0154.png
  Assests/male0155.png
  Assests/male0156.png
  Assests/male0157.png
  Assests/male0158.png
  Assests/male0159.png
  Assests/male0160.png
  Assests/male0161.png
  Assests/male0162.png
  Assests/male0163.png
  Assests/male0164.png
  Assests/male0165.png
  Assests/male0166.png
  Assests/male0167.png
  Assests/male0168.png
  Assests/male0169.png
  Assests/male0170.png
  Assests/male0171.png
  Assests/male0172.png
  Assests/male0173.png
  Assests/male0174.png
  Assests/male0175.png
  Assests/male0176.png
  Assests/male0177.png
  Assests/male0178.png
  Assests/male0179.png
  Assests/male0180.png
  Assests/male0181.png
  Assests/male0182.png
  Assests/male0183.png
  Assests/male0184.png
  Assests/male0185.png
  Assests/male0186.png
  Assests/male0187.png
  Assests/male0188.png
  Assests/male0189.png
  Assests/male0190.png
  Assests/male0191.png
  Assests/male0192.png
  Assests/male0193.png
  Assests/male0194.png
  Assests/male0195.png
  Assests/male0196.png
  Assests/male0197.png
  Assests/male0198.png
  Assests/male0199.png
  Assests/male0200.png
  Assests/male0201.png
  Assests/male0202.png
  Assests/male0203.png
  Assests/male0204.png
  Assests/male0205.png
  Assests/male0206.png
  Assests/male0207.png
  Assests/male0208.png
  Assests/male0209.png
  Assests/male0210.png
  Assests/male0211.png
  Assests/male0212.png
  Assests/male0213.png
  Assests/male0214.png
  Assests/male0215.png
  Assests/male0216.png
  Assests/male0217.png
  Assests/male0218.png
  Assests/male0219.png
  Assests/male0220.png
  Assests/male0221.png
  Assests/male0222.png
  Assests/male0223.png
  Assests/male0224.png
  Assests/male0225.png
  Assests/male0226.png
  Assests/male0227.png
  Assests/male0228.png
  Assests/male0229.png
  Assests/male0230.png
  Assests/male0231.png
  Assests/male0232.png
  Assests/male0233.png
  Assests/male0234.png
  Assests/male0235.png
  Assests/male0236.png
  Assests/male0237.png
  Assests/male0238.png
  Assests/male0239.png
  Assests/male0240.png
  Assests/male0241.png
  Assests/male0242.png
  Assests/male0243.png
  Assests/male0244.png
  Assests/male0245.png
  Assests/male0246.png
  Assests/male0247.png
  Assests/male0248.png
  Assests/male0249.png
  Assests/male0250.png
  Assests/male0251.png
  Assests/male0252.png
  Assests/male0253.png
  Assests/male0254.png
  Assests/male0255.png
  Assests/male0256.png
  Assests/male0257.png
  Assests/male0258.png
  Assests/male0259.png
  Assests/male0260.png
  Assests/male0261.png
  Assests/male0262.png
  Assests/male0263.png
  Assests/male0264.png
  Assests/male0265.png
  Assests/male0266.png
  Assests/male0267.png
  Assests/male0268.png
  Assests/male0269.png
  Assests/male0270.png
  Assests/male0271.png
  Assests/male0272.png
  Assests/male0273.png
  Assests/male0274.png
  Assests/male0275.png
  Assests/male0276.png
  Assests/male0277.png
  Assests/male0278.png
  Assests/male0279.png
  Assests/male0280.png
  Assests/male0281.png
  Assests/male0282.png
  Assests/male0283.png
  Assests/male0284.png
  Assests/male0285.png
  Assests/male0286.png
  Assests/male0287.png
  Assests/male0288.png
  Assests/male0289.png
  Assests/male0290.png
  Assests/male0291.png
  Assests/male0292.png
  Assests/male0293.png
  Assests/male0294.png
  Assests/male0295.png
  Assests/male0296.png
  Assests/male0297.png
  Assests/male0298.png
  Assests/male0299.png
  Assests/male0300.png
 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});
