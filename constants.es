
export const exp = {
  1: 0,
  2: 100,
  3: 300,
  4: 600,
  5: 1000,
  6: 1500,
  7: 2100,
  8: 2800,
  9: 3600,
  10: 4500,
  11: 5500,
  12: 6600,
  13: 7800,
  14: 9100,
  15: 10500,
  16: 12000,
  17: 13600,
  18: 15300,
  19: 17100,
  20: 19000,
  21: 21000,
  22: 23100,
  23: 25300,
  24: 27600,
  25: 30000,
  26: 32500,
  27: 35100,
  28: 37800,
  29: 40600,
  30: 43500,
  31: 46500,
  32: 49600,
  33: 52800,
  34: 56100,
  35: 59500,
  36: 63000,
  37: 66600,
  38: 70300,
  39: 74100,
  40: 78000,
  41: 82000,
  42: 86100,
  43: 90300,
  44: 94600,
  45: 99000,
  46: 103500,
  47: 108100,
  48: 112800,
  49: 117600,
  50: 122500,
  51: 127500,
  52: 132700,
  53: 138100,
  54: 143700,
  55: 149500,
  56: 155500,
  57: 161700,
  58: 168100,
  59: 174700,
  60: 181500,
  61: 188500,
  62: 195800,
  63: 203400,
  64: 211300,
  65: 219500,
  66: 228000,
  67: 236800,
  68: 245900,
  69: 255300,
  70: 265000,
  71: 275000,
  72: 285400,
  73: 296200,
  74: 307400,
  75: 319000,
  76: 331000,
  77: 343400,
  78: 356200,
  79: 369400,
  80: 383000,
  81: 397000,
  82: 411500,
  83: 426500,
  84: 442000,
  85: 458000,
  86: 474500,
  87: 491500,
  88: 509000,
  89: 527000,
  90: 545500,
  91: 564500,
  92: 584500,
  93: 606500,
  94: 631500,
  95: 661500,
  96: 701500,
  97: 761500,
  98: 851500,
  99: 1000000,
  100: 1000000,
  101: 1010000,
  102: 1011000,
  103: 1013000,
  104: 1016000,
  105: 1020000,
  106: 1025000,
  107: 1031000,
  108: 1038000,
  109: 1046000,
  110: 1055000,
  111: 1065000,
  112: 1077000,
  113: 1091000,
  114: 1107000,
  115: 1125000,
  116: 1145000,
  117: 1168000,
  118: 1194000,
  119: 1223000,
  120: 1255000,
  121: 1290000,
  122: 1329000,
  123: 1372000,
  124: 1419000,
  125: 1470000,
  126: 1525000,
  127: 1584000,
  128: 1647000,
  129: 1714000,
  130: 1785000,
  131: 1860000,
  132: 1940000,
  133: 2025000,
  134: 2115000,
  135: 2210000,
  136: 2310000,
  137: 2415000,
  138: 2525000,
  139: 2640000,
  140: 2760000,
  141: 2887000,
  142: 3021000,
  143: 3162000,
  144: 3310000,
  145: 3465000,
  146: 3628000,
  147: 3799000,
  148: 3978000,
  149: 4165000,
  150: 4360000,
  151: 4564000,
  152: 4777000,
  153: 4999000,
  154: 5230000,
  155: 5470000,
  156: 5720000,
  157: 5780000,
  158: 5860000,
  159: 5970000,
  160: 6120000,
  161: 6320000,
  162: 6580000,
  163: 6910000,
  164: 7320000,
  165: 7820000,
}

export const expMap = {
  11: 30,
  12: 50,
  13: 80,
  14: 100,
  15: 150,
  16: 50,
  21: 120,
  22: 150,
  23: 200,
  24: 300,
  25: 250,
  31: 310,
  32: 320,
  33: 330,
  34: 350,
  35: 400,
  41: 310,
  42: 320,
  43: 330,
  44: 340,
  45: 200,
  51: 360,
  52: 380,
  53: 400,
  54: 420,
  55: 450,
  61: 380,
  62: 420,
}

// ship types dated 20170106, beginning with id=1
// const shipTypes = ["海防艦", "駆逐艦", "軽巡洋艦", "重雷装巡洋艦",
// "重巡洋艦", "航空巡洋艦", "軽空母", "戦艦", "戦艦", "航空戦艦", "正規空母",
// "超弩級戦艦", "潜水艦", "潜水空母", "補給艦", "水上機母艦", "揚陸艦", "装甲空母",
// "工作艦", "潜水母艦", "練習巡洋艦", "補給艦"]
// attention, shipCat uses api_id

export const shipCat = [
  {
    name: 'DD',
    id: [2],
  },
  {
    name: 'CL',
    id: [3, 4, 21],
  },
  {
    name: 'CA',
    id: [5, 6],
  },
  {
    name: 'BB',
    id: [8, 9, 10, 12],
  },
  {
    name: 'CV',
    id: [7, 11, 18],
  },
  {
    name: 'SS',
    id: [13, 14],
  },
  {
    name: 'Others',
    id: [1, 15, 16, 17, 19, 20, 22],
  },
]
