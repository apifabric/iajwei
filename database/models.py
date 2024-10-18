# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, Float, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  October 18, 2024 22:05:00
# Database: sqlite:////tmp/tmp.vGJ96CQ0Mx/iajwei/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Organism(SAFRSBaseX, Base):
    """
    description: Represents different organisms in a database, such as animals or humans.
    """
    __tablename__ = 'organism'
    _s_collection_name = 'Organism'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    species = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    BoneList : Mapped[List["Bone"]] = relationship(back_populates="organism")
    LimbList : Mapped[List["Limb"]] = relationship(back_populates="organism")
    OrganSystemList : Mapped[List["OrganSystem"]] = relationship(back_populates="organism")
    TissueList : Mapped[List["Tissue"]] = relationship(back_populates="organism")



class Bone(SAFRSBaseX, Base):
    """
    description: Represents bones within an organism, detailing its characteristics.
    """
    __tablename__ = 'bone'
    _s_collection_name = 'Bone'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    length = Column(Float)
    organism_id = Column(ForeignKey('organism.id'))

    # parent relationships (access parent)
    organism : Mapped["Organism"] = relationship(back_populates=("BoneList"))

    # child relationships (access children)
    JointList : Mapped[List["Joint"]] = relationship(foreign_keys='[Joint.connecting_bone_1_id]', back_populates="connecting_bone_1")
    connecting_bone_2JointList : Mapped[List["Joint"]] = relationship(foreign_keys='[Joint.connecting_bone_2_id]', back_populates="connecting_bone_2")
    MuscleList : Mapped[List["Muscle"]] = relationship(back_populates="bone")



class Limb(SAFRSBaseX, Base):
    """
    description: Represents limbs of organisms, composed of bones and muscles.
    """
    __tablename__ = 'limb'
    _s_collection_name = 'Limb'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    strength = Column(Float)
    organism_id = Column(ForeignKey('organism.id'))

    # parent relationships (access parent)
    organism : Mapped["Organism"] = relationship(back_populates=("LimbList"))

    # child relationships (access children)



class OrganSystem(SAFRSBaseX, Base):
    """
    description: Represents systems within the organism comprising various tissues.
    """
    __tablename__ = 'organ_system'
    _s_collection_name = 'OrganSystem'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    function = Column(String)
    organism_id = Column(ForeignKey('organism.id'))

    # parent relationships (access parent)
    organism : Mapped["Organism"] = relationship(back_populates=("OrganSystemList"))

    # child relationships (access children)
    OrganList : Mapped[List["Organ"]] = relationship(back_populates="system")



class Tissue(SAFRSBaseX, Base):
    """
    description: Represents various tissue types in organisms.
    """
    __tablename__ = 'tissue'
    _s_collection_name = 'Tissue'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    type = Column(String)
    coverage_area = Column(Float)
    organism_id = Column(ForeignKey('organism.id'))

    # parent relationships (access parent)
    organism : Mapped["Organism"] = relationship(back_populates=("TissueList"))

    # child relationships (access children)
    CellList : Mapped[List["Cell"]] = relationship(back_populates="tissue")



class Cell(SAFRSBaseX, Base):
    """
    description: Represents cells within tissues, detailing their functions.
    """
    __tablename__ = 'cell'
    _s_collection_name = 'Cell'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    type = Column(String)
    function = Column(String)
    tissue_id = Column(ForeignKey('tissue.id'))

    # parent relationships (access parent)
    tissue : Mapped["Tissue"] = relationship(back_populates=("CellList"))

    # child relationships (access children)



class Joint(SAFRSBaseX, Base):
    """
    description: Represents joints connecting different bones.
    """
    __tablename__ = 'joint'
    _s_collection_name = 'Joint'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    type = Column(String)
    connecting_bone_1_id = Column(ForeignKey('bone.id'))
    connecting_bone_2_id = Column(ForeignKey('bone.id'))

    # parent relationships (access parent)
    connecting_bone_1 : Mapped["Bone"] = relationship(foreign_keys='[Joint.connecting_bone_1_id]', back_populates=("JointList"))
    connecting_bone_2 : Mapped["Bone"] = relationship(foreign_keys='[Joint.connecting_bone_2_id]', back_populates=("connecting_bone_2JointList"))

    # child relationships (access children)



class Muscle(SAFRSBaseX, Base):
    """
    description: Represents muscles in the organism, associated with certain bones.
    """
    __tablename__ = 'muscle'
    _s_collection_name = 'Muscle'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    strength = Column(Float)
    bone_id = Column(ForeignKey('bone.id'))

    # parent relationships (access parent)
    bone : Mapped["Bone"] = relationship(back_populates=("MuscleList"))

    # child relationships (access children)



class Organ(SAFRSBaseX, Base):
    """
    description: Represents organs forming part of the organ systems.
    """
    __tablename__ = 'organ'
    _s_collection_name = 'Organ'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    size = Column(Float)
    system_id = Column(ForeignKey('organ_system.id'))

    # parent relationships (access parent)
    system : Mapped["OrganSystem"] = relationship(back_populates=("OrganList"))

    # child relationships (access children)
    BloodVesselList : Mapped[List["BloodVessel"]] = relationship(back_populates="organ")
    NerveList : Mapped[List["Nerve"]] = relationship(back_populates="organ")



class BloodVessel(SAFRSBaseX, Base):
    """
    description: Represents blood vessels connecting organs for nutrient transport.
    """
    __tablename__ = 'blood_vessel'
    _s_collection_name = 'BloodVessel'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    type = Column(String)
    diameter = Column(Float)
    organ_id = Column(ForeignKey('organ.id'))

    # parent relationships (access parent)
    organ : Mapped["Organ"] = relationship(back_populates=("BloodVesselList"))

    # child relationships (access children)



class Nerve(SAFRSBaseX, Base):
    """
    description: Represents nerves connecting different organs for signal transmission.
    """
    __tablename__ = 'nerve'
    _s_collection_name = 'Nerve'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    path = Column(String)
    organ_id = Column(ForeignKey('organ.id'))

    # parent relationships (access parent)
    organ : Mapped["Organ"] = relationship(back_populates=("NerveList"))

    # child relationships (access children)
    SenseOrganList : Mapped[List["SenseOrgan"]] = relationship(back_populates="nerve")



class SenseOrgan(SAFRSBaseX, Base):
    """
    description: Represents sense organs linked to nerve systems.
    """
    __tablename__ = 'sense_organ'
    _s_collection_name = 'SenseOrgan'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    sensitivity = Column(Float)
    nerve_id = Column(ForeignKey('nerve.id'))

    # parent relationships (access parent)
    nerve : Mapped["Nerve"] = relationship(back_populates=("SenseOrganList"))

    # child relationships (access children)
