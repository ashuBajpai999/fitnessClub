import treadmill from "../../images/product_1.webp";
import cablerop from "../../images/product_2.webp";
import wheyProtein from "../../images/product_3.webp";
import mbWhey from "../../images/product_4.webp";
import ladduDumble from "../../images/ladduDumble.webp";
import optionMachine from "../../images/optionMachine.webp";
import dumble from "../../images/dumble.webp";
import skipingRope from "../../images/skippingRope.webp";
import rodWithPlate from "../../images/rodWithPlate.webp";
import yogaPad from "../../images/yogaPads.webp";
import plate from "../../images/plates.webp";
import chinupsCircle from "../../images/chinupsCircle.webp";
import boxingBag from "../../images/boxingBag.webp";
import laduuAndAll from "../../images/product_5.webp";
import gloves from "../../images/gloves.webp";
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
     for a variety of exercises. They are also known as tricep ropes and are made from
      a thick rope with dual handles. The cable rope handle’s design looks like large knobs,
       but you can also find cable or tricep ropes with stirrup handles depending on the
        brand. Cable rope exercises offer lots of benefits and are great for building muscle
         in your rear deltoids (and side delts), shoulders, upper arms, and forearms. Cable rope
          exercises can be done using different variations of hand grips and elbow angles to
           target different muscle groups. They offer an incredibly diverse range of benefits
            to every lifter and are potent tools to optimize hypertrophy training. `,
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
    athletes and fitness enthusiasts to support muscle growth and recovery after workouts. It is
     made from whey, which is the liquid that separates from milk during cheese production. The whey
      is then filtered, refined, and spray-dried into whey protein powder. Gold Standard Whey
       Protein is available in various forms, including whey protein isolate, concentrate, or
        hydrolyzate, with varying amounts of BCAAs (branched-chain amino acids), glutamine, and
         other ingredients 1. It is designed to provide high-quality whey protein that supports
          muscle growth and recovery after workouts.  It is an advanced bodybuilding supplement
           that delivers 25 g of fast-absorbing protein. The protein content in this supplement
            is derived from whey protein concentrate and whey protein isolate`,
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
    offers a range of products to help you achieve your fitness goals. Their products are designed to
     cater to different fitness goals such as bodybuilding, weight loss, lean muscle mass, bulking up,
      and more. The protein content in this supplement is derived from whey protein concentrate and
       whey protein isolate .MB Whey Protein powder is available in various flavors such as rich chocolate,
        vanilla, strawberry, and more. MuscleBlaze products are tested and certified by Trustified
         for 100% label accuracy & purity from heavy metals, chemicals & amino spiking.
          The protein content in this supplement is derived from whey protein concentrate 
          and whey protein isolate`,
    description: `MuscleBlaze Whey Protein is a popular bodybuilding supplement brand in India that 
    offers a range......`,
    href: `TreadmillDescription?index=${3}`,
  },
  {
    name: "Skiping Rope",
    index: 4,
    id: "skipingRope",
    path: skipingRope,
    fullDescription: `A skipping rope is a versatile fitness tool used for cardio workouts
     and improving agility. It consists of a rope with handles on both ends. To use it, hold
      the handles, swing the rope over your body, and jump over it as it passes under your feet.
       It's an excellent way to elevate your heart rate, burn calories, and enhance coordination.
        Its benefits include a full-body workout, portability, cost-effectiveness,
         and versatility in catering to different fitness levels and goals. It's a
          simple yet effective way to improve cardiovascular health and overall fitness,
           and it's easy to incorporate into any exercise routine. Regular skipping rope
            workouts can contribute significantly to overall fitness and can be a fun
             addition to any exercise routine.`,
    description: `A skipping rope is a versatile fitness tool used for cardio workouts
     and improving agility. It consists......`,
    href: `TreadmillDescription?index=${4}`,
  },
  {
    name: "Gloves",
    index: 5,
    id: "gloves",
    path: gloves,
    fullDescription: `Gym gloves are typically made of leather, synthetic materials,
     or a combination of both. They feature padding on the palm and sometimes on the
      fingers for comfort and protection. These gloves often have an open-back
       design for breathability and adjustable wrist closures for a secure fit.
        Gym gloves protect your hands from calluses, blisters, and abrasions that
         may occur from gripping weights or using gym equipment. Provides stability
          and support to the wrists during lifting exercises. Minimizes hand pain 
          and discomfort associated with weightlifting. Gym gloves are favored by many 
          weightlifters, fitness enthusiasts, and gym-goers for the comfort, protection,
           and support they offer during strength training workouts. They're particularly
            useful for individuals looking to protect their hands and wrists while improving
             their lifting performance.`,
    description: `Gym gloves are typically made of leather, synthetic materials,
     or a combination of both. They feature......`,
    href: `TreadmillDescription?index=${5}`,
  },
  {
    name: "Plates",
    index: 6,
    id: "plate",
    path: plate,
    fullDescription: `Weight plates are flat, circular discs made from materials like cast
     iron, steel, or rubber. They come in various sizes, usually ranging from a few pounds
      (or kilograms) to over 45 pounds (20 kilograms). These plates have a central hole that
       fits onto the barbell's sleeves or the weight machine's weight pegs. Allows for
        incremental increases in resistance, enabling users to gradually challenge and
         strengthen muscles.  Users can adjust the weight according to their strength
          levels and workout goals. Fit onto different types of bars and machines, making
           them widely adaptable for various workouts. Weight plates are fundamental
            tools in strength training, allowing individuals to incrementally increase
             resistance as they progress in their fitness journey. They're versatile,
              adaptable, and essential for a wide range of exercises to build strength and muscle mass.`,
    description: `Weight plates are flat, circular discs made from materials like cast
     iron, steel, or rubber. They come......`,
    href: `TreadmillDescription?index=${6}`,
  },
  {
    name: "All-In-One Machine",
    index: 7,
    id: "optionMachine",
    path: optionMachine,
    fullDescription: `A multipurpose machine, also known as a multi-gym or an all-in-one gym,
     combines various exercise stations into a single unit. These machines often feature a
      framework with pulleys, cables, weight stacks, and adjustable components, allowing users
       to perform multiple exercises targeting different muscle groups. Set the machine to the
        desired settings and adjust the attachments or components for the specific exercise
         you want to perform. Depending on the machine's design, you can perform exercises
          such as chest presses, lat pulldowns, leg curls, leg extensions, cable rows, and more.
           Combines various workout stations into a single, compact unit, suitable for home
            gyms or spaces with limited room. Multipurpose machines are popular in both commercial
             gyms and home setups due to their convenience, versatility, and space-saving design.`,
    description: `A multipurpose machine, also known as a multi-gym or an all-in-one gym,
     combines various exercise stations......`,
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
