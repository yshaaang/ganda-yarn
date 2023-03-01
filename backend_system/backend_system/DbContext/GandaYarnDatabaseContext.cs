using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using backend_system.Models;

public partial class GandaYarnDatabaseContext : DbContext
{
    public GandaYarnDatabaseContext()
    {
    }

    public GandaYarnDatabaseContext(DbContextOptions<GandaYarnDatabaseContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Cart> Carts { get; set; }

    public virtual DbSet<Order> Orders { get; set; }

    public virtual DbSet<OrderProduct> OrderProducts { get; set; }

    public virtual DbSet<Product> Products { get; set; }

    public virtual DbSet<ProductAttribute> ProductAttributes { get; set; }

    public virtual DbSet<Review> Reviews { get; set; }

    public virtual DbSet<Status> Statuses { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseMySql("server=localhost;port=3306;database=ganda-yarn;uid=admin;password=admin", Microsoft.EntityFrameworkCore.ServerVersion.Parse("10.4.27-mariadb"));

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .UseCollation("utf8mb4_general_ci")
            .HasCharSet("utf8mb4");

        modelBuilder.Entity<Cart>(entity =>
        {
            entity.HasKey(e => new { e.UserId, e.ProductId, e.AttributeId })
                .HasName("PRIMARY")
                .HasAnnotation("MySql:IndexPrefixLength", new[] { 0, 0, 0 });

            entity
                .ToTable("cart")
                .UseCollation("utf8mb4_unicode_ci");

            entity.HasIndex(e => e.AttributeId, "Cart_attribute_id_fkey");

            entity.HasIndex(e => e.ProductId, "Cart_product_id_fkey");

            entity.HasIndex(e => e.UserId, "Cart_user_id_key").IsUnique();

            entity.Property(e => e.UserId)
                .HasColumnType("int(11)")
                .HasColumnName("user_id");
            entity.Property(e => e.ProductId)
                .HasColumnType("int(11)")
                .HasColumnName("product_id");
            entity.Property(e => e.AttributeId)
                .HasColumnType("int(11)")
                .HasColumnName("attribute_id");
            entity.Property(e => e.CreatedAt)
                .HasColumnType("datetime(3)")
                .HasColumnName("created_at");
            entity.Property(e => e.ModifiedAt)
                .HasColumnType("datetime(3)")
                .HasColumnName("modified_at");
            entity.Property(e => e.Quantity)
                .HasColumnType("int(11)")
                .HasColumnName("quantity");
            entity.Property(e => e.TotalPrice).HasColumnName("total_price");

            entity.HasOne(d => d.Attribute).WithMany(p => p.Carts)
                .HasForeignKey(d => d.AttributeId)
                .HasConstraintName("Cart_attribute_id_fkey");

            entity.HasOne(d => d.Product).WithMany(p => p.Carts)
                .HasForeignKey(d => d.ProductId)
                .HasConstraintName("Cart_product_id_fkey");

            entity.HasOne(d => d.User).WithOne(p => p.Cart)
                .HasForeignKey<Cart>(d => d.UserId)
                .HasConstraintName("Cart_user_id_fkey");
        });

        modelBuilder.Entity<Order>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity
                .ToTable("order")
                .UseCollation("utf8mb4_unicode_ci");

            entity.HasIndex(e => e.StatusCode, "Order_status_code_fkey");

            entity.HasIndex(e => e.UserId, "Order_user_id_fkey");

            entity.Property(e => e.Id)
                .HasColumnType("int(11)")
                .HasColumnName("id");
            entity.Property(e => e.CreatedAt)
                .HasColumnType("datetime(3)")
                .HasColumnName("created_at");
            entity.Property(e => e.ModifiedAt)
                .HasColumnType("datetime(3)")
                .HasColumnName("modified_at");
            entity.Property(e => e.StatusCode)
                .HasMaxLength(191)
                .HasColumnName("status_code");
            entity.Property(e => e.TotalPrice).HasColumnName("total_price");
            entity.Property(e => e.UserId)
                .HasColumnType("int(11)")
                .HasColumnName("user_id");

            entity.HasOne(d => d.StatusCodeNavigation).WithMany(p => p.Orders)
                .HasForeignKey(d => d.StatusCode)
                .HasConstraintName("Order_status_code_fkey");

            entity.HasOne(d => d.User).WithMany(p => p.Orders)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("Order_user_id_fkey");
        });

        modelBuilder.Entity<OrderProduct>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity
                .ToTable("order_product")
                .UseCollation("utf8mb4_unicode_ci");

            entity.HasIndex(e => e.AttributeId, "Order_Product_attribute_id_fkey");

            entity.HasIndex(e => e.OrderId, "Order_Product_order_id_fkey");

            entity.HasIndex(e => e.ProductId, "Order_Product_product_id_fkey");

            entity.HasIndex(e => e.UserId, "Order_Product_user_id_fkey");

            entity.Property(e => e.Id)
                .HasColumnType("int(11)")
                .HasColumnName("id");
            entity.Property(e => e.AttributeId)
                .HasColumnType("int(11)")
                .HasColumnName("attribute_id");
            entity.Property(e => e.OrderId)
                .HasColumnType("int(11)")
                .HasColumnName("order_id");
            entity.Property(e => e.ProductId)
                .HasColumnType("int(11)")
                .HasColumnName("product_id");
            entity.Property(e => e.UserId)
                .HasColumnType("int(11)")
                .HasColumnName("user_id");

            entity.HasOne(d => d.Attribute).WithMany(p => p.OrderProducts)
                .HasForeignKey(d => d.AttributeId)
                .HasConstraintName("Order_Product_attribute_id_fkey");

            entity.HasOne(d => d.Order).WithMany(p => p.OrderProducts)
                .HasForeignKey(d => d.OrderId)
                .HasConstraintName("Order_Product_order_id_fkey");

            entity.HasOne(d => d.Product).WithMany(p => p.OrderProducts)
                .HasForeignKey(d => d.ProductId)
                .HasConstraintName("Order_Product_product_id_fkey");

            entity.HasOne(d => d.User).WithMany(p => p.OrderProducts)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("Order_Product_user_id_fkey");
        });

        modelBuilder.Entity<Product>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity
                .ToTable("product")
                .UseCollation("utf8mb4_unicode_ci");

            entity.Property(e => e.Id)
                .HasColumnType("int(11)")
                .HasColumnName("id");
            entity.Property(e => e.CreatedAt)
                .HasColumnType("datetime(3)")
                .HasColumnName("created_at");
            entity.Property(e => e.Description).HasColumnName("description");
            entity.Property(e => e.ModifiedAt)
                .HasColumnType("datetime(3)")
                .HasColumnName("modified_at");
            entity.Property(e => e.Name)
                .HasMaxLength(191)
                .HasColumnName("name");
            entity.Property(e => e.PreviewImageLink)
                .HasMaxLength(191)
                .HasColumnName("preview_image_link");
            entity.Property(e => e.QuantitySold)
                .HasColumnType("int(11)")
                .HasColumnName("quantity_sold");
        });

        modelBuilder.Entity<ProductAttribute>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity
                .ToTable("product_attribute")
                .UseCollation("utf8mb4_unicode_ci");

            entity.HasIndex(e => e.ProductId, "Product_Attribute_product_id_fkey");

            entity.Property(e => e.Id)
                .HasColumnType("int(11)")
                .HasColumnName("id");
            entity.Property(e => e.CreatedAt)
                .HasColumnType("datetime(3)")
                .HasColumnName("created_at");
            entity.Property(e => e.ImageLink)
                .HasMaxLength(191)
                .HasColumnName("image_link");
            entity.Property(e => e.ModifiedAt)
                .HasColumnType("datetime(3)")
                .HasColumnName("modified_at");
            entity.Property(e => e.Price).HasColumnName("price");
            entity.Property(e => e.ProductId)
                .HasColumnType("int(11)")
                .HasColumnName("product_id");
            entity.Property(e => e.Stock)
                .HasColumnType("int(11)")
                .HasColumnName("stock");
            entity.Property(e => e.Variant)
                .HasMaxLength(191)
                .HasColumnName("variant");

            entity.HasOne(d => d.Product).WithMany(p => p.ProductAttributes)
                .HasForeignKey(d => d.ProductId)
                .HasConstraintName("Product_Attribute_product_id_fkey");
        });

        modelBuilder.Entity<Review>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity
                .ToTable("review")
                .UseCollation("utf8mb4_unicode_ci");

            entity.HasIndex(e => e.OrderProductId, "Review_order_product_id_fkey");

            entity.Property(e => e.Id)
                .HasColumnType("int(11)")
                .HasColumnName("id");
            entity.Property(e => e.Comment).HasColumnName("comment");
            entity.Property(e => e.CreatedAt)
                .HasColumnType("datetime(3)")
                .HasColumnName("created_at");
            entity.Property(e => e.ModifiedAt)
                .HasColumnType("datetime(3)")
                .HasColumnName("modified_at");
            entity.Property(e => e.OrderProductId)
                .HasColumnType("int(11)")
                .HasColumnName("order_product_id");
            entity.Property(e => e.Rate)
                .HasColumnType("int(11)")
                .HasColumnName("rate");

            entity.HasOne(d => d.OrderProduct).WithMany(p => p.Reviews)
                .HasForeignKey(d => d.OrderProductId)
                .HasConstraintName("Review_order_product_id_fkey");
        });

        modelBuilder.Entity<Status>(entity =>
        {
            entity.HasKey(e => e.Code).HasName("PRIMARY");

            entity
                .ToTable("status")
                .UseCollation("utf8mb4_unicode_ci");

            entity.Property(e => e.Code)
                .HasMaxLength(191)
                .HasColumnName("code");
            entity.Property(e => e.CreatedAt)
                .HasColumnType("datetime(3)")
                .HasColumnName("created_at");
            entity.Property(e => e.Description).HasColumnName("description");
            entity.Property(e => e.ModifiedAt)
                .HasColumnType("datetime(3)")
                .HasColumnName("modified_at");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity
                .ToTable("user")
                .UseCollation("utf8mb4_unicode_ci");

            entity.HasIndex(e => e.Username, "User_username_key").IsUnique();

            entity.Property(e => e.Id)
                .HasColumnType("int(11)")
                .HasColumnName("id");
            entity.Property(e => e.CreatedAt)
                .HasColumnType("datetime(3)")
                .HasColumnName("created_at");
            entity.Property(e => e.EmailAddress)
                .HasMaxLength(191)
                .HasColumnName("email_address");
            entity.Property(e => e.FirstName)
                .HasMaxLength(191)
                .HasColumnName("first_name");
            entity.Property(e => e.Gender)
                .HasMaxLength(191)
                .HasColumnName("gender");
            entity.Property(e => e.HomeAddress)
                .HasMaxLength(191)
                .HasColumnName("home_address");
            entity.Property(e => e.LastName)
                .HasMaxLength(191)
                .HasColumnName("last_name");
            entity.Property(e => e.MobileNumber)
                .HasColumnType("int(11)")
                .HasColumnName("mobile_number");
            entity.Property(e => e.ModifiedAt)
                .HasColumnType("datetime(3)")
                .HasColumnName("modified_at");
            entity.Property(e => e.Password)
                .HasMaxLength(191)
                .HasColumnName("password");
            entity.Property(e => e.Type)
                .HasDefaultValueSql("'USER'")
                .HasColumnType("enum('USER','ADMIN')")
                .HasColumnName("type");
            entity.Property(e => e.Username)
                .HasMaxLength(191)
                .HasColumnName("username");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
