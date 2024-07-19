using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PostAPI;
using System;
using System.Collections.Generic;

namespace PostAPI
{
    public class PostEntityTypeConfiguration : IEntityTypeConfiguration<Post>
    {
        public void Configure(EntityTypeBuilder<Post> builder)
        {
            builder
                .HasKey(x => x.Id);

            builder
                .Property(x => x.Id)
                .ValueGeneratedNever()
                .HasColumnName("Id")
                .HasPrecision(32, 0);

            builder
                .Property(x => x.Nombre)
                .HasColumnName("Nombre")
                .HasColumnType("character varying");

            builder
                .Property(x => x.Descripcion)
                .HasColumnName("Descripcion")
                .HasColumnType("character varying");

            builder
                .ToTable("Post", "public");
        }
    }
}
