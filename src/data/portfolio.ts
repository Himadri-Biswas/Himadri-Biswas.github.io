export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
  videoUrl?: string;
}

export const portfolioData: Portfolio[] = [
  {
  title: "Amazon — Full-Stack E-Commerce Platform",
  description:
    "A production-grade e-commerce marketplace with dual customer and seller interfaces, built on NestJS and React. The backend follows NestJS's feature-module pattern with Controllers, Services, Mongoose schemas, and globally applied class-validator DTOs. Authentication uses Clerk: a custom ClerkAuthGuard verifies JWTs on every protected route, while a SellerGuard extends it to check publicMetadata.role from the signed token — making role enforcement cryptographically backed, not just a client-side check. Payments run through Stripe Checkout Sessions created server-side; after redirect, a verify endpoint atomically updates order status and appends to an append-only statusHistory audit array in a single findByIdAndUpdate. Notable schema decisions: Clerk's userId doubles as MongoDB's _id on the users collection, a compound text index powers product search, and a unique {userId, productId} index enforces one-review-per-product at the database level. The frontend uses React Context with optimistic cart updates and URL-synced filters. Deployed serverlessly on Vercel with a GitHub Actions CI pipeline.",
  technologies: [
    "NestJS",
    "TypeScript",
    "React",
    "MongoDB",
    "Mongoose",
    "Stripe",
    "Clerk",
    "Tailwind CSS",
    "Vite",
    "REST API",
    "Vercel",
    "GitHub Actions",
  ],
  imageUrl: "/assets/images/portfolio/amazon1.png",
  projectUrl: "https://amazon-frontend-rosy.vercel.app/",
  codeUrl: "https://github.com/Himadri-Biswas/CSE-326-ISD-Sessional/tree/main/Deployed%20Demo",
  },
  {
  title: "Emotion-Aware Image Caption Generator",
  description:
    "A three-stage image captioning pipeline that goes beyond describing visual content to capture the emotional atmosphere of a scene. A pretrained ViT-Base encoder extracts a 512-dimensional global image representation, which a custom-built GPT-2 decoder attends to via cross-attention at every token generation step to produce a base caption. In parallel, DeepFace runs facial expression recognition across 7 emotion categories. An NLTK POS-tagger then grammatically inserts the corresponding emotion adjective before the subject noun — transforming 'a boy walks in the snow' into 'a joyful boy walks in the snow.' Trained on Flickr30k (31k images, 20-epoch two-phase strategy) achieving BLEU-1 40.59% and METEOR 44.18%. Deployed as a live full-stack web app with a FastAPI backend on HuggingFace Spaces and a React frontend on Vercel.",
  technologies: [
    "Python",
    "PyTorch",
    "Vision Transformer (ViT)",
    "GPT-2",
    "DeepFace",
    "NLTK",
    "FastAPI",
    "React",
    "HuggingFace",
    "Deep Learning",
    "NLP",
  ],
  imageUrl: "/assets/images/portfolio/emotion1.png",
  codeUrl: "https://github.com/Himadri-Biswas/CSE-330-Machine-Learning-Sessional/tree/main/Project",
  projectUrl: "https://emotion-caption-frontend.vercel.app",
  },
  {
  title: "8-Bit MIPS Processor — Logisim Simulation",
  description:
    "Designed and simulated a fully functional 8-bit single-cycle MIPS processor from the ground up in Logisim. The datapath includes a microprogrammed Control Unit (opcode → control word via ROM lookup), a custom 8-bit ALU, a 7-register file ($zero, $t0–$t4, $sp), 256-byte data/stack RAM, and a 20-bit instruction memory. Supports 16 instructions across R, I, and J formats with group-specific opcode assignments. Built a complete software toolchain: a C++ assembler that resolves labels and encodes MIPS assembly into hex machine code, and a Python script that patches the hex directly into the Logisim circuit file's XML — enabling a write-assemble-simulate workflow with no manual ROM editing.",
  technologies: [
    "Logisim",
    "MIPS ISA",
    "C++",
    "Python",
    "Computer Architecture",
    "Digital Circuit Design",
    "Assembly",
  ],
  imageUrl: "/assets/images/portfolio/mips1.png",
  codeUrl: "https://github.com/Himadri-Biswas/CSE-210-Computer-Architecture-Sessional/tree/main/Assignment%203%20MIPS%20Processor",
  },
  {
  title: "4-Bit ALU — Design, Simulation & Hardware Implementation",
  description:
    "Designed and physically built a 4-bit ALU supporting 6 operations (Add, Sub, AND, XOR, Complement A, NEG A) selected by a 3-bit control word. The core insight: every operation — arithmetic and logical alike — is unified through a dual 4-bit adder (7483) datapath by pre-processing inputs through a dual 4×1 MUX (74153) for the first operand and a 2×1 MUX (74157) for the second. All five intermediate control signals (S₁, S₂, S₃, en₃, C_in) were derived via Karnaugh map minimization. The Overflow Flag is computed as C₃ ⊕ C_out — requiring two cascaded adders to expose the otherwise-internal C₃ carry. The final hardware used only 12 TTL ICs, down from an initial 13, by replacing a 7432+7404 pair with a single 7402 NOR IC. Simulated in Logisim 2.7.1 at IC level, then built on breadboard and verified against the full truth table.",
  technologies: [
    "Logisim",
    "Digital Circuit Design",
    "Boolean Algebra",
    "K-map Minimization",
    "TTL ICs (74xx Series)",
    "Computer Architecture",
    "Hardware Implementation",
  ],
  imageUrl: "/assets/images/portfolio/ALU1.jpg",
  codeUrl: "https://github.com/Himadri-Biswas/CSE-210-Computer-Architecture-Sessional/tree/main/Assignment%201%20ALU",
  },
  {
  title: "GesturePhonic — Gesture-Based Mini Piano",
  description:
    "A touchless, gesture-controlled mini piano built on two ATmega32 microcontrollers — one dedicated to audio synthesis and melody management, the other to real-time LCD display. Twelve IR proximity sensors map to the full chromatic scale (C through B); hovering a finger over a sensor triggers the corresponding musical note, synthesized as a software-generated square wave on the audio output pin at precisely calculated half-period delays. The system supports four-level octave shifting, interrupt-driven mode switching between live performance and melody playback (hardware INT0/INT1 on rising edges), and EEPROM-backed recording — storing note IDs and 16-bit duration counts over I2C/TWI to a 24C64 chip for multi-melody replay. The entire circuit was first designed and validated in Proteus before physical hardware implementation.",
  technologies: [
    "ATmega32",
    "AVR C",
    "I2C / TWI",
    "IR Sensors",
    "LCD",
    "Audio Synthesis",
    "Proteus",
    "Embedded Systems",
  ],
  imageUrl: "/assets/images/portfolio/gesture1.png",
  codeUrl: "https://github.com/Himadri-Biswas/CSE-316-Microprocessors-Microcontrollers-and-Embedded-Systems-Sessional/tree/main/Project",
  videoUrl: "https://drive.google.com/drive/folders/1F9Vxhf9jp6pYflYpu_Zhs9rTqN32__Az",
  },
  {
    title: "CUBIC-FIT congestion control: implementation, evaluation and modification in NS-3",
    description:
      "Implemented CUBIC-FIT, a flow-aware extension of TCP CUBIC, directly in the NS-3 3.45 simulator by modifying the ns3::TcpCubic source. The algorithm dynamically estimates competing flow count (Nₜ) to scale the cubic growth factor K, multiplicative decrease β, and window update rate, improving fairness under multi-flow contention. Evaluated against standard CUBIC and a personal variant across three topologies: a high-rate 802.11 wireless network, a wired CSMA dumbbell, and an IEEE 802.15.4 star network — measuring throughput, end-to-end delay, PDR, Jain's fairness index, and energy consumption.",
    technologies: [
      "NS-3",
      "C++",
      "TCP",
      "Congestion Control",
      "802.15.4",
      "SixLowPan",
      "Python",
      "Computer Networks",
    ],
    imageUrl: "/assets/images/portfolio/cubic_fit2.png",
    codeUrl: "https://github.com/Himadri-Biswas/CSE-322-Computer-Networks-Sessional/tree/main/NS3%20Project",
  },
  {
  title: "C to x86 Assembly Compiler",
  description:
    "Built a fully functional compiler from scratch that translates a C-like language into runnable 8086 assembly code, executed in emu8086. Implemented across four progressive phases: a hash-table based symbol table with separate chaining and nested scope management; a FLEX-powered lexical analyzer that tokenizes C source with full error detection for malformed literals and unclosed constructs; an ANTLR4-driven syntactic and semantic analyzer that validates type compatibility, scope resolution, array indexing, and function signatures; and a code generation backend that emits real x86 assembly with stack-based expression evaluation, proper function call conventions (BP-relative locals and parameters), and a multi-pass peephole optimizer that eliminates redundant MOV pairs, dead PUSH/POP sequences, and identity arithmetic.",
  technologies: ["C++", "ANTLR4", "FLEX", "x86 Assembly", "Compiler Design"],
  imageUrl: "/assets/images/portfolio/Compiler1.png",
  codeUrl: "https://github.com/Himadri-Biswas/CSE-310-Compiler-Lab",
  },
];
