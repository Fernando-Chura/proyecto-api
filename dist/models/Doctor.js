"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _Clinica = _interopRequireDefault(require("./Clinica"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// modulo
//conexion de la bd
var Doctor = _database.sequelize.define('doctors', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nomdoctor: {
    type: _sequelize["default"].STRING(100),
    allowNull: false
  },
  apelldoctor: {
    type: _sequelize["default"].STRING(100),
    allowNull: false
  },
  dnidoctor: {
    type: _sequelize["default"].STRING(8),
    allowNull: false
  },
  teldoctor: {
    type: _sequelize["default"].STRING(12),
    allowNull: true
  },
  emaildoctor: {
    type: _sequelize["default"].STRING(50),
    allowNull: true
  },
  dirdoctor: {
    type: _sequelize["default"].STRING(100),
    allowNull: true
  },
  espdoctor: {
    type: _sequelize["default"].STRING(100),
    allowNull: true
  }
}, {
  timestamps: false
});

_Clinica["default"].hasMany(Doctor, {
  foreignKey: 'clinicaid',
  sourceKey: 'id',
  as: "doctors"
});

Doctor.belongsTo(_Clinica["default"], {
  foreignKey: "clinicaid",
  sourceKey: 'id',
  as: "clinica"
});
var _default = Doctor;
exports["default"] = _default;