﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool
//     Changes to this file will be lost if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------
namespace AVM.META.Design
{
	using AVM;
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using System.Text;

	public partial class DesignModel
	{
		public virtual string Name
		{
			get;
			set;
		}

		public virtual string DesignID
		{
			get;
			set;
		}

		public virtual string SrcDesignSpaceID
		{
			get;
			set;
		}

		public virtual String DDPSpecVersion
		{
			get;
			set;
		}

		public virtual List<Connector> Connectors
		{
			get;
			set;
		}

		public virtual List<Container> Containers
		{
			get;
			set;
		}

	}
}

