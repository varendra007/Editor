class Model:
    def __init__(self):
        self.logs=[]
    def getlogs(self):
        return self.logs
    def setlogs(self,logs):
        self.logs=logs

class ModelMaker:
    def __init__(self):
        self.md=Model()
    def getModel(self):
        return self.md
    def setModel(self,model):
        self.md=model

ModelMaker()