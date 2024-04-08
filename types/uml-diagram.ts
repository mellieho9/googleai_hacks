export type UMLDiagram = {
  id: string;
  name: string;
  uml_code: string;
  description: string;
  document_id: string;
  filepath: string;
  is_deleted: boolean;
  created_on: Date;
  updated_on: Date;
};

export type CreateUMLDiagramParams = {
  name: string;
  uml_code: string;
  description: string;
  document_id: string;
  filepath: string;
};
