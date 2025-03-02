# created from response - used to create database and project
#  should run without error
#  if not, check for decimal, indent, or import issues

import decimal

import logging



logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

import sqlalchemy



from sqlalchemy.sql import func  # end imports from system/genai/create_db_models_inserts/create_db_models_prefix.py

from logic_bank.logic_bank import Rule

from sqlalchemy import create_engine, Column, Integer, String, Float, ForeignKey, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import datetime

Base = declarative_base()

class Organism(Base):
    """
    description: Represents different organisms in a database, such as animals or humans.
    """
    __tablename__ = 'organism'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    species = Column(String)

class Bone(Base):
    """
    description: Represents bones within an organism, detailing its characteristics.
    """
    __tablename__ = 'bone'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    length = Column(Float)
    organism_id = Column(Integer, ForeignKey('organism.id'))

class Joint(Base):
    """
    description: Represents joints connecting different bones.
    """
    __tablename__ = 'joint'
    id = Column(Integer, primary_key=True, autoincrement=True)
    type = Column(String)
    connecting_bone_1_id = Column(Integer, ForeignKey('bone.id'))
    connecting_bone_2_id = Column(Integer, ForeignKey('bone.id'))

class Muscle(Base):
    """
    description: Represents muscles in the organism, associated with certain bones.
    """
    __tablename__ = 'muscle'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String)
    strength = Column(Float)
    bone_id = Column(Integer, ForeignKey('bone.id'))

class Tissue(Base):
    """
    description: Represents various tissue types in organisms.
    """
    __tablename__ = 'tissue'
    id = Column(Integer, primary_key=True, autoincrement=True)
    type = Column(String)
    coverage_area = Column(Float)
    organism_id = Column(Integer, ForeignKey('organism.id'))

class OrganSystem(Base):
    """
    description: Represents systems within the organism comprising various tissues.
    """
    __tablename__ = 'organ_system'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String)
    function = Column(String)
    organism_id = Column(Integer, ForeignKey('organism.id'))

class Organ(Base):
    """
    description: Represents organs forming part of the organ systems.
    """
    __tablename__ = 'organ'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String)
    size = Column(Float)
    system_id = Column(Integer, ForeignKey('organ_system.id'))

class Cell(Base):
    """
    description: Represents cells within tissues, detailing their functions.
    """
    __tablename__ = 'cell'
    id = Column(Integer, primary_key=True, autoincrement=True)
    type = Column(String)
    function = Column(String)
    tissue_id = Column(Integer, ForeignKey('tissue.id'))

class Nerve(Base):
    """
    description: Represents nerves connecting different organs for signal transmission.
    """
    __tablename__ = 'nerve'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String)
    path = Column(String)
    organ_id = Column(Integer, ForeignKey('organ.id'))

class BloodVessel(Base):
    """
    description: Represents blood vessels connecting organs for nutrient transport.
    """
    __tablename__ = 'blood_vessel'
    id = Column(Integer, primary_key=True, autoincrement=True)
    type = Column(String)
    diameter = Column(Float)
    organ_id = Column(Integer, ForeignKey('organ.id'))

class Limb(Base):
    """
    description: Represents limbs of organisms, composed of bones and muscles.
    """
    __tablename__ = 'limb'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String)
    strength = Column(Float)
    organism_id = Column(Integer, ForeignKey('organism.id'))

class SenseOrgan(Base):
    """
    description: Represents sense organs linked to nerve systems.
    """
    __tablename__ = 'sense_organ'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String)
    sensitivity = Column(Float)
    nerve_id = Column(Integer, ForeignKey('nerve.id'))

# Create the database and tables
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base.metadata.create_all(engine)

# Create a new session
Session = sessionmaker(bind=engine)
session = Session()

# Insert sample data
organism1 = Organism(name="Human", species="Homo sapiens")
organism2 = Organism(name="Dog", species="Canis lupus familiaris")

bone1 = Bone(name="Femur", length=50.5, organism_id=1)
bone2 = Bone(name="Humerus", length=38.2, organism_id=1)
bone3 = Bone(name="Tibia", length=40.0, organism_id=2)

joint1 = Joint(type="Ball-and-socket", connecting_bone_1_id=1, connecting_bone_2_id=2)
joint2 = Joint(type="Hinge", connecting_bone_1_id=2, connecting_bone_2_id=3)

muscle1 = Muscle(name="Bicep", strength=200.0, bone_id=2)
muscle2 = Muscle(name="Quadriceps", strength=300.0, bone_id=1)

tissue1 = Tissue(type="Epithelial", coverage_area=150.0, organism_id=2)
tissue2 = Tissue(type="Connective", coverage_area=200.0, organism_id=1)

organ_system1 = OrganSystem(name="Digestive System", function="Digestion", organism_id=1)
organ_system2 = OrganSystem(name="Nervous System", function="Signal transmission", organism_id=2)

organ1 = Organ(name="Stomach", size=2.0, system_id=1)
organ2 = Organ(name="Brain", size=1.5, system_id=2)

cell1 = Cell(type="Neuron", function="Signal reception", tissue_id=2)
cell2 = Cell(type="Epithelial", function="Protection", tissue_id=1)

nerve1 = Nerve(name="Sciatic Nerve", path="Lower body to spine", organ_id=1)
nerve2 = Nerve(name="Optic Nerve", path="Eye to brain", organ_id=2)

blood_vessel1 = BloodVessel(type="Artery", diameter=0.5, organ_id=1)
blood_vessel2 = BloodVessel(type="Vein", diameter=0.3, organ_id=2)

limb1 = Limb(name="Arm", strength=150.0, organism_id=1)
limb2 = Limb(name="Leg", strength=250.0, organism_id=2)

sense_organ1 = SenseOrgan(name="Eye", sensitivity=0.9, nerve_id=2)
sense_organ2 = SenseOrgan(name="Ear", sensitivity=0.7, nerve_id=1)

# Add all instances to the session
entities = [organism1, organism2, bone1, bone2, bone3, joint1, joint2, muscle1, muscle2,
            tissue1, tissue2, organ_system1, organ_system2, organ1, organ2, cell1, cell2,
            nerve1, nerve2, blood_vessel1, blood_vessel2, limb1, limb2, sense_organ1, sense_organ2]

session.add_all(entities)
session.commit()
session.close()
