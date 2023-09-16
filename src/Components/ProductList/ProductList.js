import treadmill from "../../images/product_1.jpg";
import cablerop from "../../images/product_2.jpg";
import wheyProtein from "../../images/product_3.jpg";
import mbWhey from "../../images/product_4.png";
import ladduDumble from "../../images/ladduDumble.jpg";
import optionMachine from "../../images/optionMachine.jpg";
import dumble from "../../images/dumble.jpg";
import skipingRope from "../../images/skippingRope.jpg";
import rodWithPlate from "../../images/rodWithPlate.jpg";
import yogaPad from "../../images/yogaPads.jpg";
import plate from "../../images/plates.jpg";
import chinupsCircle from "../../images/chinupsCircle.jpg";
import boxingBag from "../../images/boxingBag.jpg";
import laduuAndAll from "../../images/product_5.jpg";
import gloves from "../../images/gloves.jpg";
const imageList = [
  {
    name: "Treadmill",
    index: 0,
    id: "treadmill",
    path: treadmill,
    fullDescription: `A treadmill is a stationary exercise machine that features a
                  walking or running belt designed for indoor cardio
                  exercise.Outdoor running is high impact, which can lead to
                  back, knee, and ankle problems over time. Treadmills prevent
                  this by offering cushioned running surfaces for shock
                  absorption.Aerobic exercises, like running or walking on a
                  treadmill, may make you feel better—whether that’s by making
                  your heart stronger, helping with weight loss, or lowering
                  blood pressure.Exercising on a treadmill builds leg muscles
                  and improves core strength. It also strengthens your heart and
                  helps prevent osteoporosis by allowing your body to build
                  strong bones through low impact exercise.`,
    description: `Treadmills are generally used for walking, running, or
                      climbing while staying in the same place......`,
    href: `TreadmillDescription?index=${0}`,
  },
  {
    name: "Cable Rope",
    index: 1,
    id: "cableRope",
    path: cablerop,
    fullDescription: `Cable ropes are a versatile piece of equipment that can be used
     for a variety of exercises. They are also known as tricep ropes and are made from a thick rope with dual handles. The cable rope handle’s design looks like large knobs, but you can also find cable or tricep ropes with stirrup handles depending on the brand 1. Cable rope exercises offer lots of benefits and are great for building muscle in your rear deltoids (and side delts), shoulders, upper arms, and forearms. Cable rope exercises can be done using different variations of hand grips and elbow angles to target different muscle groups 4. They offer an incredibly diverse range of benefits to every lifter and are potent tools to optimize hypertrophy training. `,
    description: `Cable ropes are a versatile piece of equipment that can be used
     for a variety of exercises. They are also......`,
    href: `TreadmillDescription?index=${1}`,
  },
  {
    name: "Whey Protein",
    index: 2,
    id: "whyeProtein",
    path: wheyProtein,
    fullDescription: `Gold Standard Whey Protein is a popular protein supplement that is used by 
    athletes and fitness enthusiasts to support muscle growth and recovery after workouts. It is made from whey, which is the liquid that separates from milk during cheese production. The whey is then filtered, refined, and spray-dried into whey protein powder. Gold Standard Whey Protein is available in various forms, including whey protein isolate, concentrate, or hydrolyzate, with varying amounts of BCAAs (branched-chain amino acids), glutamine, and other ingredients 1. It is designed to provide high-quality whey protein that supports muscle growth and recovery after workouts.  It is an advanced bodybuilding supplement that delivers 25 g of fast-absorbing protein. The protein content in this supplement is derived from whey protein concentrate and whey protein isolate`,
    description: `Gold Standard Whey Protein is a popular protein supplement that is used by 
    athletes and......`,
    href: `TreadmillDescription?index=${2}`,
  },
  {
    name: "MB Whey",
    index: 3,
    id: "mbWhey",
    path: mbWhey,
    fullDescription: `MuscleBlaze Whey Protein is a popular bodybuilding supplement brand in India that 
    offers a range of products to help you achieve your fitness goals. Their products are designed to cater to different fitness goals such as bodybuilding, weight loss, lean muscle mass, bulking up, and more. The protein content in this supplement is derived from whey protein concentrate and whey protein isolate .MB Whey Protein powder is available in various flavors such as rich chocolate, vanilla, strawberry, and more. MuscleBlaze products are tested and certified by Trustified for 100% label accuracy & purity from heavy metals, chemicals & amino spiking.  The protein content in this supplement is derived from whey protein concentrate and whey protein isolate`,
    description: `MuscleBlaze Whey Protein is a popular bodybuilding supplement brand in India that 
    offers a range......`,
    href: `TreadmillDescription?index=${3}`,
  },
  {
    name: "Skiping Rope",
    index: 4,
    id: "skipingRope",
    path: skipingRope,
    fullDescription: ``,
    description: `Treadmills are generally used for walking, running, or
                      climbing while staying in the same place......`,
    href: `TreadmillDescription?index=${4}`,
  },
  {
    name: "Gloves",
    index: 5,
    id: "gloves",
    path: gloves,
    fullDescription: ``,
    description: `Treadmills are generally used for walking, running, or
                      climbing while staying in the same place......`,
    href: `TreadmillDescription?index=${5}`,
  },
  {
    name: "Plates",
    index: 6,
    id: "plate",
    path: plate,
    fullDescription: ``,
    description: `Treadmills are generally used for walking, running, or
                      climbing while staying in the same place......`,
    href: `TreadmillDescription?index=${6}`,
  },
  {
    name: "Multipurpose Machine",
    index: 7,
    id: "optionMachine",
    path: optionMachine,
    fullDescription: ``,
    description: `Treadmills are generally used for walking, running, or
                      climbing while staying in the same place......`,
    href: `TreadmillDescription?index=${7}`,
  },
  {
    name: "Small Dumble",
    index: 8,
    id: "ladduDumble",
    path: ladduDumble,
    fullDescription: ``,
    description: `Treadmills are generally used for walking, running, or
                      climbing while staying in the same place......`,
    href: `TreadmillDescription?index=${8}`,
  },
  {
    name: "Chin Ups Circle",
    index: 9,
    id: "chinupsCircle",
    path: chinupsCircle,
    fullDescription: ``,
    description: `Treadmills are generally used for walking, running, or
                      climbing while staying in the same place......`,
    href: `TreadmillDescription?index=${9}`,
  },
  {
    name: "Dumble",
    index: 10,
    id: "dumble",
    path: dumble,
    fullDescription: ``,
    description: `Treadmills are generally used for walking, running, or
                      climbing while staying in the same place......`,
    href: `TreadmillDescription?index=${10}`,
  },
  {
    name: "Yoga Pad",
    index: 11,
    id: "yogaPad",
    path: yogaPad,
    fullDescription: ``,
    description: `Treadmills are generally used for walking, running, or
                      climbing while staying in the same place......`,
    href: `TreadmillDescription?index=${11}`,
  },
  {
    name: "Rod With Plates",
    index: 12,
    id: "rodWithPlate",
    path: rodWithPlate,
    fullDescription: ``,
    description: `Treadmills are generally used for walking, running, or
                      climbing while staying in the same place......`,
    href: `TreadmillDescription?index=${12}`,
  },
  {
    name: "Combo",
    index: 13,
    id: "laduuAndAll",
    path: laduuAndAll,
    fullDescription: ``,
    description: `Treadmills are generally used for walking, running, or
                      climbing while staying in the same place......`,
    href: `TreadmillDescription?index=${13}`,
  },
  {
    name: "Boxing Bag",
    index: 14,
    id: "boxingBag",
    path: boxingBag,
    fullDescription: ``,
    description: `Treadmills are generally used for walking, running, or
                      climbing while staying in the same place......`,
    href: `TreadmillDescription?index=${14}`,
  },
];
export default imageList;
