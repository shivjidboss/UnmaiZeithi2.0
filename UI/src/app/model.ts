
export interface Preview {
    data : Data,
    hash : string
}
export interface Data  {
    image : string,
    title : string,
    author : string,
    publisher : string,
    description : string,
    content : string
}

export interface Article {
    _aRank:     string;
    _artHash:   string;
    _author:    string;
    _dVote:     string;
    _link:      string;
    _publisher: string;
    _timestamp: string;
    _uVote:     string;
}

export interface Acnt {
    address:    string;
    privateKey: string;
}

export interface ContractJSON {
    contractName:      string;
    abi:               ABI[];
    metadata:          string;
    bytecode:          string;
    deployedBytecode:  string;
    sourceMap:         string;
    deployedSourceMap: string;
    source:            string;
    sourcePath:        string;
    ast:               AST;
    legacyAST:         AST;
    compiler:          Compiler;
    networks:          Networks;
    schemaVersion:     string;
    updatedAt:         string;
    devdoc:            Doc;
    userdoc:           Doc;
}

export interface ABI {
    constant?:       boolean;
    inputs:          Put[];
    name?:           string;
    outputs?:        Put[];
    payable:         boolean;
    stateMutability: StateMutability;
    type:            Type;
}

export interface Put {
    name: string;
    type: string;
}

export enum StateMutability {
    Nonpayable = "nonpayable",
    Payable = "payable",
    Pure = "pure",
    View = "view",
}

export enum Type {
    Constructor = "constructor",
    Function = "function",
}

export interface AST {
    absolutePath:    string;
    exportedSymbols: ExportedSymbols;
    id:              number;
    nodeType:        string;
    nodes:           ASTNode[];
    src:             string;
}

export interface ExportedSymbols {
    Main: number[];
}

export interface ASTNode {
    id:                       number;
    literals?:                string[];
    nodeType:                 string;
    src:                      string;
    absolutePath?:            string;
    file?:                    string;
    scope?:                   number;
    sourceUnit?:              number;
    symbolAliases?:           any[];
    unitAlias?:               string;
    baseContracts?:           BaseContract[];
    contractDependencies?:    number[];
    contractKind?:            string;
    documentation?:           null;
    fullyImplemented?:        boolean;
    linearizedBaseContracts?: number[];
    name?:                    string;
    nodes?:                   NodeNode[];
}

export interface BaseContract {
    arguments: null;
    baseName:  BaseName;
    id:        number;
    nodeType:  string;
    src:       string;
}

export interface BaseName {
    contractScope?:          null;
    id:                      number;
    name:                    string;
    nodeType:                BaseNameNodeType;
    referencedDeclaration:   number;
    src:                     string;
    typeDescriptions:        TypeDescriptions;
    argumentTypes?:          TypeDescriptions[] | null;
    overloadedDeclarations?: any[];
}

export interface TypeDescriptions {
    typeIdentifier: string;
    typeString:     string;
}

export enum BaseNameNodeType {
    Identifier = "Identifier",
    UserDefinedTypeName = "UserDefinedTypeName",
}

export interface NodeNode {
    body:             Body;
    documentation:    null;
    id:               number;
    implemented:      boolean;
    kind:             Type;
    modifiers:        any[];
    name:             string;
    nodeType:         string;
    parameters:       Body;
    returnParameters: Body;
    scope:            number;
    src:              string;
    stateMutability:  StateMutability;
    superFunction:    null;
    visibility:       string;
}

export interface Body {
    id:          number;
    nodeType:    BodyNodeType;
    src:         string;
    statements?: Body[];
    expression?: Expression;
    parameters?: Parameter[];
}

export interface Expression {
    argumentTypes:    null;
    id:               number;
    isConstant:       boolean;
    isLValue:         boolean;
    isPure:           boolean;
    lValueRequested:  boolean;
    leftHandSide?:    LeftHandSide;
    nodeType:         string;
    operator?:        string;
    rightHandSide?:   RightHandSide;
    src:              string;
    typeDescriptions: TypeDescriptions;
    arguments?:       Argument[];
    expression?:      BaseName;
    kind?:            string;
    names?:           any[];
}

export interface Argument {
    argumentTypes:           null;
    expression?:             BaseName;
    id:                      number;
    isConstant?:             boolean;
    isLValue?:               boolean;
    isPure?:                 boolean;
    lValueRequested?:        boolean;
    memberName?:             string;
    nodeType:                string;
    referencedDeclaration:   number | null;
    src:                     string;
    typeDescriptions:        TypeDescriptions;
    name?:                   string;
    overloadedDeclarations?: any[];
}

export interface LeftHandSide {
    argumentTypes:          null;
    baseExpression?:        BaseName;
    id:                     number;
    indexExpression?:       IndexExpression;
    isConstant:             boolean;
    isLValue:               boolean;
    isPure:                 boolean;
    lValueRequested:        boolean;
    nodeType:               string;
    src:                    string;
    typeDescriptions:       TypeDescriptions;
    expression?:            BaseName;
    memberName?:            string;
    referencedDeclaration?: null;
}

export interface IndexExpression {
    argumentTypes:         null;
    expression:            BaseName;
    id:                    number;
    isConstant:            boolean;
    isLValue:              boolean;
    isPure:                boolean;
    lValueRequested:       boolean;
    memberName:            string;
    nodeType:              string;
    referencedDeclaration: null;
    src:                   string;
    typeDescriptions:      TypeDescriptions;
}

export interface RightHandSide {
    argumentTypes:    null;
    hexValue:         string;
    id:               number;
    isConstant:       boolean;
    isLValue:         boolean;
    isPure:           boolean;
    kind:             string;
    lValueRequested:  boolean;
    nodeType:         string;
    src:              string;
    subdenomination:  null;
    typeDescriptions: TypeDescriptions;
    value:            string;
}

export enum BodyNodeType {
    Block = "Block",
    ExpressionStatement = "ExpressionStatement",
    ParameterList = "ParameterList",
}

export interface Parameter {
    constant:         boolean;
    id:               number;
    name:             string;
    nodeType:         string;
    scope:            number;
    src:              string;
    stateVariable:    boolean;
    storageLocation:  string;
    typeDescriptions: TypeDescriptions;
    typeName:         TypeName;
    value:            null;
    visibility:       string;
}

export interface TypeName {
    id:               number;
    name:             string;
    nodeType:         string;
    src:              string;
    typeDescriptions: TypeDescriptions;
}

export interface Compiler {
    name:    string;
    version: string;
}

export interface Doc {
    methods: Methods;
}

export interface Methods {
}

export interface Networks {
    "4002": The4002;
}

export interface The4002 {
    events:          Methods;
    links:           Methods;
    address:         string;
    transactionHash: string;
}

// [2.0]

export interface notifi {
    time: String;
    status: String;
    statCode: Number;
    msg: String;
    txHash: String;
    msgHist: [{}];
}
